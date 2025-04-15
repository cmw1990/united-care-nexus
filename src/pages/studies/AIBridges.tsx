
import { useState, useEffect } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, ListTodo, MessageSquare, Upload, Edit, CheckCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { ProtocolViewer } from "@/components/studies/ProtocolViewer";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { useStudy } from "@/hooks/useStudy";
import { StudyDocument } from "@/types/database.types";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const AIBridges = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("protocol");
  const [protocolContent, setProtocolContent] = useState<string | null>(null);
  const [protocolUrl, setProtocolUrl] = useState<string | null>(null);
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  
  const { 
    uploadDocument
  } = useStudy("ai-bridges");
  
  useEffect(() => {
    const loadProtocolFile = async () => {
      try {
        const { data: protocolDocs, error } = await supabase
          .from('study_documents')
          .select('*')
          .eq('study_id', 'ai-bridges')
          .eq('title', 'protocol.txt')
          .single();
        
        if (error) {
          console.log('No protocol file found:', error);
          return;
        }
        
        if (!protocolDocs) {
          return;
        }

        if (typeof protocolDocs === 'object' && protocolDocs !== null && 'file_url' in protocolDocs) {
          const typedProtocolDoc = protocolDocs as StudyDocument;
          setProtocolUrl(typedProtocolDoc.file_url);
          setUploadedFileName(typedProtocolDoc.title);
          
          try {
            const fileUrl = typedProtocolDoc.file_url?.toLowerCase();
            if (fileUrl && (fileUrl.endsWith('.txt') || fileUrl.endsWith('.md') || fileUrl.endsWith('.json'))) {
              const response = await fetch(typedProtocolDoc.file_url as string);
              if (response.ok) {
                const text = await response.text();
                setProtocolContent(text);
              }
            }
          } catch (contentError) {
            console.error('Error fetching file content:', contentError);
          }
        }
      } catch (error) {
        console.error('Error loading protocol file:', error);
      }
    };
    
    loadProtocolFile();
  }, []);

  const prepareUpload = (file: File): Promise<void> => {
    return new Promise((resolve) => {
      setSelectedFile(file);
      setShowConfirmDialog(true);
      resolve();
    });
  };

  const cancelUpload = () => {
    setSelectedFile(null);
    setShowConfirmDialog(false);
  };

  const confirmUpload = async () => {
    if (!selectedFile) return;
    
    setIsUploading(true);
    
    try {
      const file = selectedFile;
      const fileType = file.type.toLowerCase();
      const isTextFile = fileType === 'text/plain' || 
                         file.name.endsWith('.txt') || 
                         file.name.endsWith('.md') || 
                         file.name.endsWith('.json');
      
      setUploadedFileName(file.name);
      
      if (isTextFile) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const content = e.target?.result as string;
          if (content) {
            setProtocolContent(content);
            const blob = new Blob([content], { type: fileType || 'text/plain' });
            const url = URL.createObjectURL(blob);
            setProtocolUrl(url);
          }
        };
        reader.readAsText(file);
      } else {
        const url = URL.createObjectURL(file);
        setProtocolUrl(url);
        setProtocolContent(null);
      }
      
      if (uploadDocument) {
        await uploadDocument(file, file.name, `Protocol document for AI Bridges study - ${file.name}`);
      }
      
      toast({
        title: "Upload successful",
        description: "Your protocol file has been uploaded successfully.",
      });
    } catch (error: any) {
      console.error('Error handling protocol:', error);
      toast({
        title: "Upload failed",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
      setShowConfirmDialog(false);
      setSelectedFile(null);
    }
  };
  
  return (
    <MainLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">{t('study2.title')}</h1>
          <p className="text-muted-foreground">
            {t('study2.description')}
          </p>
        </div>

        <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="protocol">
              <FileText className="h-4 w-4 mr-2" />
              Protocol
            </TabsTrigger>
            <TabsTrigger value="tasks">
              <ListTodo className="h-4 w-4 mr-2" />
              Tasks
            </TabsTrigger>
            <TabsTrigger value="questions">
              <MessageSquare className="h-4 w-4 mr-2" />
              Questions
            </TabsTrigger>
            <TabsTrigger value="files">
              <Upload className="h-4 w-4 mr-2" />
              Files
            </TabsTrigger>
            <TabsTrigger value="editor">
              <Edit className="h-4 w-4 mr-2" />
              Co-Editor
            </TabsTrigger>
          </TabsList>
          <TabsContent value="protocol" className="border rounded-md p-4 mt-4">
            <ProtocolViewer 
              title="Study Protocol" 
              documentUrl={protocolUrl || undefined} 
              documentContent={protocolContent || undefined}
              fileName={uploadedFileName || undefined}
              onUpload={prepareUpload}
            />
          </TabsContent>
          <TabsContent value="tasks">
            <div className="border rounded-md p-4 mt-4">
              <h2 className="text-xl font-semibold mb-4">Task Manager</h2>
              <p className="text-muted-foreground mb-4">Manage and assign tasks related to the study</p>
              <div className="flex justify-center">
                <p>Task management functionality will be displayed here</p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="questions">
            <div className="border rounded-md p-4 mt-4">
              <h2 className="text-xl font-semibold mb-4">Questions</h2>
              <p className="text-muted-foreground mb-4">Track and manage questions related to the study</p>
              <div className="flex justify-center">
                <p>Questions management functionality will be displayed here</p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="files">
            <div className="border rounded-md p-4 mt-4">
              <h2 className="text-xl font-semibold mb-4">Files</h2>
              <p className="text-muted-foreground mb-4">Upload, download, and manage study files</p>
              <div className="flex justify-center">
                <p>File management functionality will be displayed here</p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="editor">
            <div className="border rounded-md p-4 mt-4">
              <h2 className="text-xl font-semibold mb-4">Co-Editor</h2>
              <p className="text-muted-foreground mb-4">Collaboratively edit text documents</p>
              <div className="flex justify-center">
                <p>Text co-editing functionality will be displayed here</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Dialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Upload</DialogTitle>
            <DialogDescription>
              Are you sure you want to upload {selectedFile?.name}?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={cancelUpload} disabled={isUploading}>
              Cancel
            </Button>
            <Button onClick={confirmUpload} disabled={isUploading}>
              {isUploading ? "Uploading..." : (
                <>
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Confirm Upload
                </>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </MainLayout>
  );
};

export default AIBridges;

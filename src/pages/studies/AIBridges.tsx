import React, { useState, useEffect, useCallback } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
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
  
  const loadProtocolFile = useCallback(async () => {
    try {
      console.log("Loading protocol file...");
      const { data: protocolDocs, error } = await supabase
        .from('study_documents')
        .select('*')
        .eq('study_id', 'ai-bridges')
        .order('created_at', { ascending: false })
        .limit(1);
      
      if (error) {
        console.error('Error loading protocol file:', error);
        return;
      }
      
      if (!protocolDocs || protocolDocs.length === 0) {
        console.log('No protocol documents found');
        return;
      }

      console.log("Protocol docs found:", protocolDocs);
      const typedProtocolDoc = protocolDocs[0] as StudyDocument;
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
    } catch (error) {
      console.error('Error loading protocol file:', error);
    }
  }, []);
  
  useEffect(() => {
    loadProtocolFile();
  }, [loadProtocolFile]);

  const prepareUpload = useCallback(async (file: File): Promise<void> => {
    console.log("Preparing to upload file:", file.name);
    setSelectedFile(file);
    setShowConfirmDialog(true);
    return Promise.resolve();
  }, []);

  const cancelUpload = () => {
    setSelectedFile(null);
    setShowConfirmDialog(false);
  };

  const confirmUpload = async () => {
    if (!selectedFile) {
      toast({
        title: "No file selected",
        description: "Please select a file to upload",
        variant: "destructive"
      });
      return;
    }
    
    setIsUploading(true);
    
    try {
      const file = selectedFile;
      console.log("Starting upload for file:", file.name);
      
      // Generate a unique filename to prevent conflicts
      const fileName = `${Date.now()}-${file.name}`;
      const filePath = fileName;
      
      // Upload file to Supabase Storage with error handling
      const { data: storageData, error: storageError } = await supabase.storage
        .from('study-documents')
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: true
        });
      
      if (storageError) {
        console.error('Storage upload error:', storageError);
        throw new Error(storageError.message);
      }
      
      console.log("File uploaded to storage successfully:", storageData);
      
      // Get the public URL
      const { data: { publicUrl } } = supabase.storage
        .from('study-documents')
        .getPublicUrl(filePath);
      
      console.log("Public URL generated:", publicUrl);
      
      // Update local state based on file type
      setUploadedFileName(file.name);
      
      // Read text content if it's a text-based file
      const fileType = file.type.toLowerCase();
      const isTextFile = fileType === 'text/plain' || 
                         file.name.endsWith('.txt') || 
                         file.name.endsWith('.md') || 
                         file.name.endsWith('.json');
      
      if (isTextFile) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const content = e.target?.result as string;
          if (content) {
            setProtocolContent(content);
          }
        };
        reader.readAsText(file);
      } else {
        setProtocolContent(null);
      }
      
      setProtocolUrl(publicUrl);
      
      // Create record in study_documents table
      const newDocument = {
        title: file.name,
        description: `Protocol document for AI Bridges study - ${file.name}`,
        file_url: publicUrl,
        file_type: file.type,
        created_by: null, // Would be set to user ID in a real app with auth
        study_id: 'ai-bridges',
      };
      
      const { error: docError } = await supabase
        .from('study_documents')
        .insert(newDocument);
      
      if (docError) {
        console.error('Database insert error:', docError);
        throw new Error(docError.message);
      }
      
      console.log("Document record created successfully");
      
      // Refresh the protocol data after successful upload
      await loadProtocolFile();
      
      toast({
        title: "Upload successful",
        description: `${file.name} has been uploaded successfully.`,
      });
    } catch (error: any) {
      console.error('Error handling protocol:', error);
      toast({
        title: "Upload failed",
        description: error.message || "Failed to upload file",
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
          <TabsList className="grid w-full grid-cols-6">
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
            <TabsTrigger value="study1-protocol">
              <FileText className="h-4 w-4 mr-2" />
              Study 1 Protocol (temp)
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
          <TabsContent value="study1-protocol" className="border rounded-md p-4 mt-4">
            <div className="prose max-w-none">
              <h1>Beyond the Care Dyad: Bridging Dementia Caregivers with eHealth</h1>
              <h2>1. Abstract</h2>
              <p>{/* Full abstract text from the provided document */}</p>
              {/* Continue with the full text of the protocol */}
              <div className="text-sm text-muted-foreground mt-4">
                Note: This is a temporary display of the full protocol text. A more formatted version will be added in future updates.
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

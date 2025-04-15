
import { useState, useEffect } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, ListTodo, MessageSquare, Upload, Edit } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { ProtocolViewer } from "@/components/studies/ProtocolViewer";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { useStudy } from "@/hooks/useStudy";

const AIBridges = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("protocol");
  const [protocolContent, setProtocolContent] = useState<string | null>(null);
  const [protocolUrl, setProtocolUrl] = useState<string | null>(null);
  
  const { 
    uploadDocument
  } = useStudy("ai-bridges");
  
  // Load protocol file if it exists
  useEffect(() => {
    const loadProtocolFile = async () => {
      try {
        // Check if protocol file exists
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
        
        if (protocolDocs && protocolDocs.file_url) {
          setProtocolUrl(protocolDocs.file_url);
          
          // Fetch the content
          const response = await fetch(protocolDocs.file_url);
          if (response.ok) {
            const text = await response.text();
            setProtocolContent(text);
          }
        }
      } catch (error) {
        console.error('Error loading protocol file:', error);
      }
    };
    
    loadProtocolFile();
  }, []);

  const handleProtocolUpload = async (file: File) => {
    try {
      // Upload the protocol file
      const uploadedDocument = await uploadDocument(file, "protocol.txt", "Protocol document for AI Bridges study");
      
      if (uploadedDocument && uploadedDocument.file_url) {
        setProtocolUrl(uploadedDocument.file_url);
      }
      
      return Promise.resolve();
    } catch (error: any) {
      console.error('Error uploading protocol:', error);
      toast({
        title: "Upload failed",
        description: error.message,
        variant: "destructive",
      });
      return Promise.reject(error);
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
              onUpload={handleProtocolUpload}
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
    </MainLayout>
  );
};

export default AIBridges;

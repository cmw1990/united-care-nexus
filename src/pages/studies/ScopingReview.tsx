import { useState, useEffect } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, ListTodo, MessageSquare, Upload, Edit } from "lucide-react";
import { useStudy } from "@/hooks/useStudy";
import { QuestionsManager } from "@/components/studies/QuestionsManager";
import { FileManager } from "@/components/studies/FileManager";
import { ProtocolViewer } from "@/components/studies/ProtocolViewer";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import { useLanguage } from "@/context/LanguageContext";
import { supabase } from "@/integrations/supabase/client";
import { StudyDocument } from "@/types/database.types";

const ScopingReview = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("protocol");
  const { user, isLoading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [protocolContent, setProtocolContent] = useState<string | null>(null);
  const [protocolUrl, setProtocolUrl] = useState<string | null>(null);
  
  const { 
    tasks, 
    questions, 
    documents, 
    notes, 
    loading: studyLoading,
    addTask,
    updateTask,
    deleteTask,
    addQuestion,
    answerQuestion,
    uploadDocument,
    deleteDocument,
    saveNote
  } = useStudy("scoping-review");

  useEffect(() => {
    const loadProtocolFile = async () => {
      try {
        const { data: protocolDocs, error } = await supabase
          .from('study_documents')
          .select('*')
          .eq('study_id', 'scoping-review')
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

  const handleProtocolUpload = async (file: File) => {
    try {
      const uploadedDocument = await uploadDocument(file, file.name, `Protocol document for scoping review - ${file.name}`);
      
      if (uploadedDocument) {
        if (typeof uploadedDocument === 'object' && 'file_url' in uploadedDocument) {
          const typedDocument = uploadedDocument as StudyDocument;
          if (typedDocument.file_url) {
            setProtocolUrl(typedDocument.file_url);
            
            const fileType = file.type.toLowerCase();
            if (fileType === 'text/plain' || file.name.endsWith('.txt') || 
                file.name.endsWith('.md') || file.name.endsWith('.json')) {
              const reader = new FileReader();
              reader.onload = (e) => {
                const content = e.target?.result as string;
                setProtocolContent(content);
              };
              reader.readAsText(file);
            }
          }
        }
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

  const formattedQuestions = questions.map(q => ({
    id: q.id,
    title: q.question.substring(0, 50) + (q.question.length > 50 ? '...' : ''),
    content: q.question,
    author: { id: q.asked_by || "", name: "Researcher", initials: "R", role: "Researcher" },
    timestamp: q.created_at,
    tags: ["methodology", "research"],
    comments: q.answer ? [{
      id: `comment-${q.id}`,
      content: q.answer,
      author: { id: q.answered_by || "", name: "Researcher", initials: "R", role: "Researcher" },
      timestamp: q.created_at
    }] : [],
    isResolved: q.status === "resolved"
  }));

  const formattedFiles = documents.map(doc => ({
    id: doc.id,
    name: doc.title,
    type: doc.file_type || "document",
    size: 1000000,
    uploadedBy: "Researcher",
    uploadDate: new Date().toISOString().split('T')[0],
    downloadUrl: doc.file_url || "#"
  }));

  const handleFileUpload = async (files: FileList | null) => {
    if (!files || files.length === 0) return;
    
    try {
      const file = files[0];
      await uploadDocument(file, file.name);
      toast({
        title: "File uploaded",
        description: "Your file has been uploaded successfully.",
      });
    } catch (error: any) {
      toast({
        title: "Upload failed",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  return (
    <MainLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">{t('study1.title')}</h1>
          <p className="text-muted-foreground">
            {t('study1.description')}
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
              {studyLoading ? (
                <div className="flex justify-center items-center p-8">Loading tasks...</div>
              ) : (
                <div>
                  {tasks.length === 0 ? (
                    <div className="text-center py-8">
                      <p className="text-muted-foreground mb-4">No tasks yet. Create your first task to get started.</p>
                      <Button onClick={() => addTask({
                        title: "Review literature search strategy",
                        description: "Validate the search terms and databases for the scoping review",
                        status: "pending",
                        priority: "high",
                        due_date: null,
                        assigned_to: null,
                        created_by: user?.id || null,
                        study_id: "scoping-review"
                      })}>
                        Create First Task
                      </Button>
                    </div>
                  ) : (
                    <div>
                      <h2 className="text-xl font-semibold mb-4">Task Manager</h2>
                      <p className="text-muted-foreground mb-4">Manage and assign tasks related to the study</p>
                      <div>
                        {tasks.map(task => (
                          <div key={task.id} className="border rounded-md p-4 mb-3">
                            <div className="flex justify-between">
                              <h3 className="font-medium">{task.title}</h3>
                              <div className="flex items-center gap-2">
                                <span className={`px-2 py-1 rounded-full text-xs ${
                                  task.priority === 'high' ? 'bg-red-100 text-red-800' :
                                  task.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                                  'bg-blue-100 text-blue-800'
                                }`}>
                                  {task.priority}
                                </span>
                                <span className={`px-2 py-1 rounded-full text-xs ${
                                  task.status === 'completed' ? 'bg-green-100 text-green-800' :
                                  task.status === 'in-progress' ? 'bg-purple-100 text-purple-800' :
                                  'bg-gray-100 text-gray-800'
                                }`}>
                                  {task.status}
                                </span>
                              </div>
                            </div>
                            {task.description && (
                              <p className="text-sm text-muted-foreground mt-2">{task.description}</p>
                            )}
                            <div className="flex justify-end gap-2 mt-4">
                              {task.status !== 'completed' ? (
                                <Button 
                                  size="sm" 
                                  variant="outline"
                                  onClick={() => updateTask(task.id, { status: 'completed' })}
                                >
                                  Mark Complete
                                </Button>
                              ) : (
                                <Button 
                                  size="sm" 
                                  variant="outline"
                                  onClick={() => updateTask(task.id, { status: 'pending' })}
                                >
                                  Reopen
                                </Button>
                              )}
                              <Button 
                                size="sm" 
                                variant="destructive"
                                onClick={() => deleteTask(task.id)}
                              >
                                Delete
                              </Button>
                            </div>
                          </div>
                        ))}
                        <Button 
                          className="mt-4"
                          onClick={() => addTask({
                            title: "New Task",
                            description: "Task description",
                            status: "pending",
                            priority: "medium",
                            due_date: null,
                            assigned_to: null,
                            created_by: user?.id || null,
                            study_id: "scoping-review"
                          })}
                        >
                          Add New Task
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </TabsContent>
          <TabsContent value="questions">
            <div className="border rounded-md p-4 mt-4">
              {studyLoading ? (
                <div className="flex justify-center items-center p-8">Loading questions...</div>
              ) : (
                <QuestionsManager 
                  title="Research Questions" 
                  initialQuestions={formattedQuestions}
                />
              )}
            </div>
          </TabsContent>
          <TabsContent value="files">
            <div className="border rounded-md p-4 mt-4">
              {studyLoading ? (
                <div className="flex justify-center items-center p-8">Loading files...</div>
              ) : (
                <FileManager 
                  title="Research Files" 
                  initialFiles={formattedFiles}
                />
              )}
            </div>
          </TabsContent>
          <TabsContent value="editor">
            <div className="border rounded-md p-4 mt-4">
              <h2 className="text-xl font-semibold mb-4">Co-Editor</h2>
              <p className="text-muted-foreground mb-4">Collaboratively edit text documents</p>
              <div className="border rounded-md p-6 min-h-[400px]">
                <div className="prose max-w-none">
                  <h3>Scoping Review Notes</h3>
                  <p>
                    This is a collaborative document for the scoping review project. Team members can edit this document together.
                  </p>
                  <p>
                    <strong>Research Questions:</strong>
                  </p>
                  <ol>
                    <li>What are the existing eHealth applications designed to support communication, coordination, and collaboration among caregivers of people with dementia living at home?</li>
                    <li>What are the effectiveness and outcomes of these eHealth applications?</li>
                    <li>What are the barriers and facilitators to implementing these eHealth applications?</li>
                  </ol>
                  <p>
                    <strong>Methods:</strong>
                  </p>
                  <p>
                    We will conduct a scoping review following the methodology of Arksey and O'Malley (2005), with enhancements by Levac et al. (2010). The review will include articles published in English between 2010 and 2023.
                  </p>
                </div>
              </div>
              <div className="flex justify-end mt-4">
                <Button variant="outline" className="mr-2">Cancel</Button>
                <Button>Save Changes</Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default ScopingReview;

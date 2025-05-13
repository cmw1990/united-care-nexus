import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, ListTodo, MessageSquare, Upload, Edit, Gamepad2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const ExperiencedGame = () => {
  const { t } = useLanguage();
  
  return (
    <MainLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">{t('study4.title')} / </h1>
        </div>

        <Tabs defaultValue="protocol" className="w-full">
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
            <div className="prose max-w-none">
              <h1>{t('study4.title')} / </h1>
            </div>
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

export default ExperiencedGame;

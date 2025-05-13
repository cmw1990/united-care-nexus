
import { MainLayout } from "@/components/layout/MainLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, ListTodo, MessageSquare, Upload, Edit } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { ProtocolTab } from "@/components/studies/ProtocolTab";
import { TasksTab } from "@/components/studies/TasksTab";
import { QuestionsTab } from "@/components/studies/QuestionsTab";
import { FilesTab } from "@/components/studies/FilesTab";
import { EditorTab } from "@/components/studies/EditorTab";

const ScopingReview = () => {
  const { t } = useLanguage();
  
  return (
    <MainLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">{t('study1.title')}</h1>
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
            <ProtocolTab />
          </TabsContent>
          <TabsContent value="tasks">
            <TasksTab studyId="scoping-review" />
          </TabsContent>
          <TabsContent value="questions">
            <QuestionsTab studyId="scoping-review" />
          </TabsContent>
          <TabsContent value="files">
            <FilesTab studyId="scoping-review" />
          </TabsContent>
          <TabsContent value="editor">
            <EditorTab studyId="scoping-review" />
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default ScopingReview;

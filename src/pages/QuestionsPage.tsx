
import { MainLayout } from "@/components/layout/MainLayout";
import { Card } from "@/components/ui/card";

const QuestionsPage = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Research Questions</h1>
        </div>

        <Card className="p-6">
          <p>Questions content will be added here.</p>
        </Card>
      </div>
    </MainLayout>
  );
};

export default QuestionsPage;

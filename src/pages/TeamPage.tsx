
import { MainLayout } from "@/components/layout/MainLayout";

const TeamPage = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-8">
        <section>
          <h1 className="text-3xl font-bold mb-4">Research</h1>
          <p className="text-muted-foreground max-w-3xl">
            Information about our research is available in our published studies.
          </p>
        </section>
      </div>
    </MainLayout>
  );
};

export default TeamPage;

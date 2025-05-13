
import { MainLayout } from "@/components/layout/MainLayout";
import { useLanguage } from "@/context/LanguageContext";

const ResearchPage = () => {
  const { t } = useLanguage();

  return (
    <MainLayout>
      <div className="container px-4 md:px-6 py-6">
        <h1 className="text-3xl font-bold tracking-tight mb-8">{t('research.title')}</h1>
      </div>
    </MainLayout>
  );
};

export default ResearchPage;

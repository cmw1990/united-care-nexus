
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/context/LanguageContext";

const ResearchPage = () => {
  const { t } = useLanguage();

  return (
    <MainLayout>
      <div className="container px-4 md:px-6 py-6">
        <h1 className="text-3xl font-bold tracking-tight mb-8">{t('research.title')}</h1>
        
        <div className="max-w-4xl space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>{t('study1.shortTitle')}</CardTitle>
              <CardDescription>{t('research.overview')}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                {t('research.description')}
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>{t('research.objectives')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="list-disc pl-6 space-y-2">
                <li>Identify gaps in existing eHealth solutions for dementia caregiver networks</li>
                <li>Develop AI-powered tools to facilitate coordination among caregivers</li>
                <li>Evaluate the feasibility and effectiveness of novel digital interventions</li>
                <li>Create resources that address the unique needs of dementia caregivers</li>
                <li>Promote knowledge exchange and support within caregiver networks</li>
              </ul>
            </CardContent>
          </Card>
          
          <p className="text-lg">
            For detailed information about our specific research studies, please visit the <a href="/studies" className="text-primary hover:underline">{t('nav.studies')}</a>.
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default ResearchPage;

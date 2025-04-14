
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Download, Video } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const ResourcesPage = () => {
  const { t } = useLanguage();

  return (
    <MainLayout>
      <div className="flex flex-col gap-6">
        <section>
          <h1 className="text-3xl font-bold mb-4">{t('resources.title')}</h1>
          <p className="text-muted-foreground max-w-3xl">
            {t('resources.description')}
          </p>
        </section>

        <Tabs defaultValue="publications" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="publications">
              <FileText className="h-4 w-4 mr-2" />
              {t('resources.publications')}
            </TabsTrigger>
            <TabsTrigger value="tools">
              <Download className="h-4 w-4 mr-2" />
              {t('resources.tools')}
            </TabsTrigger>
            <TabsTrigger value="multimedia">
              <Video className="h-4 w-4 mr-2" />
              {t('resources.multimedia')}
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="publications" className="mt-6">
            <Card className="border shadow-sm">
              <CardHeader>
                <CardTitle>{t('resources.publications')}</CardTitle>
                <CardDescription>Academic publications related to the research</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">No publications added yet.</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="tools" className="mt-6">
            <Card className="border shadow-sm">
              <CardHeader>
                <CardTitle>{t('resources.tools')}</CardTitle>
                <CardDescription>Tools and templates for research</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">No tools or templates added yet.</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="multimedia" className="mt-6">
            <Card className="border shadow-sm">
              <CardHeader>
                <CardTitle>{t('resources.multimedia')}</CardTitle>
                <CardDescription>Videos, podcasts, and other multimedia content</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">No multimedia resources added yet.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default ResourcesPage;

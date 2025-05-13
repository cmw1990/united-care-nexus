
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookText, Wand2, Clock, Gamepad2, MessagesSquare, Users2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";

const StudiesPage = () => {
  const { t } = useLanguage();

  const studies = [
    {
      id: "study1",
      title: t('study1.title'),
      description: "/",
      icon: BookText,
      path: "/studies/scoping-review"
    },
    {
      id: "study2",
      title: t('study2.title'),
      description: "/",
      icon: Wand2,
      path: "/studies/ai-bridges"
    },
    {
      id: "study3",
      title: t('study3.title'),
      description: "/",
      icon: Clock,
      path: "/studies/caregiver-week"
    },
    {
      id: "study4",
      title: t('study4.title'),
      description: "/",
      icon: Gamepad2,
      path: "/studies/experienced-game"
    },
    {
      id: "study5",
      title: t('study5.title'),
      description: "/",
      icon: MessagesSquare,
      path: "/studies/chat-support-hub"
    },
    {
      id: "study6",
      title: t('study6.title'),
      description: "/",
      icon: Users2,
      path: "/studies/better-support"
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 md:px-6 py-6">
        <h1 className="text-3xl font-bold tracking-tight mb-8">{t('studies.title')}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {studies.map((study) => (
            <Card key={study.id} className="h-full hover:shadow-md transition-shadow">
              <Link to={study.path} className="block w-full h-full no-underline">
                <CardHeader className="flex flex-row items-start gap-3">
                  <study.icon className="h-6 w-6 text-primary mt-1" />
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-lg">{study.title}</CardTitle>
                    <CardDescription className="text-sm mt-2">{study.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button size="sm" className="w-full">
                    {t('button.viewStudy')}
                  </Button>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default StudiesPage;


import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { BookText, Wand2, Clock, Gamepad2, MessagesSquare, Users2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";

const Index = () => {
  const { t } = useLanguage();

  const studies = [
    {
      id: "study1",
      title: t('study1.title'),
      icon: BookText,
      path: "/studies/scoping-review"
    },
    {
      id: "study2",
      title: t('study2.title'),
      icon: Wand2,
      path: "/studies/ai-bridges"
    },
    {
      id: "study3",
      title: t('study3.title'),
      icon: Clock,
      path: "/studies/caregiver-week"
    },
    {
      id: "study4",
      title: t('study4.title'),
      icon: Gamepad2,
      path: "/studies/experienced-game"
    },
    {
      id: "study5",
      title: t('study5.title'),
      icon: MessagesSquare,
      path: "/studies/chat-support-hub"
    },
    {
      id: "study6",
      title: t('study6.title'),
      icon: Users2,
      path: "/studies/better-support"
    }
  ];

  return (
    <MainLayout>
      <div className="flex flex-col gap-8">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-accent/40 rounded-lg">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  {t('app.title')}
                </h1>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link to="/studies/scoping-review">
                  <Button>
                    <BookText className="mr-2 h-4 w-4" />
                    {t('button.viewScopingReview')}
                  </Button>
                </Link>
                <Link to="/team">
                  <Button variant="outline">{t('button.aboutResearch')}</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="container px-4 md:px-6 py-6">
          <h2 className="text-2xl font-bold tracking-tight mb-6">{t('studies.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {studies.map((study) => (
              <Card key={study.id} className="h-full hover:shadow-md transition-shadow">
                <Link to={study.path} className="block h-full w-full no-underline">
                  <CardHeader className="flex flex-row items-start gap-2">
                    <study.icon className="h-6 w-6 text-primary flex-shrink-0" />
                    <CardTitle className="text-lg line-clamp-3">{study.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">/</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">{t('button.viewStudy')}</Button>
                  </CardFooter>
                </Link>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default Index;

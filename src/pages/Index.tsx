
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, BookText, BrainCircuit, Clock, Gamepad2, MessagesSquare, Users2 } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const studies = [
    {
      id: "study1",
      title: "Beyond the Care Dyad: Bridging Dementia Caregivers with eHealth",
      description: "Scoping Review: Are (Some of) the Bridges Still Too Far? eHealth Applications to Support Communication, Coordination, Collaboration",
      icon: BookText,
      path: "/studies/scoping-review"
    },
    {
      id: "study2",
      title: "AI Help to Forge Stronger and Smarter Bridges for Dementia Caregiver Networks",
      description: "Exploring how AI can strengthen support networks for dementia caregivers",
      icon: BrainCircuit,
      path: "/studies/ai-bridges"
    },
    {
      id: "study3",
      title: "A week in the life of dementia caregivers",
      description: "Protocol for an experience-based co-design approach to implement digital resources",
      icon: Clock,
      path: "/studies/caregiver-week"
    },
    {
      id: "study4",
      title: "ExperienceD: Dialogue-Based Serious Game",
      description: "Design and Feasibility Evaluation of a Serious Game to Enhance Dementia Care Knowledge",
      icon: Gamepad2,
      path: "/studies/experienced-game"
    },
    {
      id: "study5",
      title: "AI powered caregiver network support hub",
      description: "Protocol for a pilot evaluation of the UniteD caregiver network support hub",
      icon: MessagesSquare,
      path: "/studies/chat-support-hub"
    },
    {
      id: "study6",
      title: "Bridges to offer better support",
      description: "A pilot evaluation of an AI powered caregiver network support hub",
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
                  UniteD - Bridging Dementia Caregivers with eHealth
                </h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Research presentation platform for PhD research on eHealth solutions for dementia caregiver networks
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link to="/studies/scoping-review">
                  <Button>
                    <BookText className="mr-2 h-4 w-4" />
                    View Latest Study
                  </Button>
                </Link>
                <Link to="/team">
                  <Button variant="outline">About the Research Team</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="container px-4 md:px-6 py-6">
          <h2 className="text-2xl font-bold tracking-tight mb-6">Research Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {studies.map((study) => (
              <Link key={study.id} to={study.path} className="no-underline">
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardHeader className="flex flex-row items-center gap-2">
                    <study.icon className="h-6 w-6 text-primary" />
                    <CardTitle className="text-lg">{study.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">{study.description}</CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default Index;

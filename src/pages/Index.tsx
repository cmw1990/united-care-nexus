
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { BookText, Wand2, Clock, Gamepad2, MessagesSquare, Users2 } from "lucide-react";
import { Link } from "react-router-dom";

const studies = [
  {
    id: "study1",
    title: "Beyond the Care Dyad: Bridging Dementia Caregivers with eHealth: Are (Some of) the Bridges Still Too Far? eHealth Applications to Support Communication, Coordination, Collaboration Among Caregivers of People with Dementia Living at Home - A Scoping Review",
    description: "Beyond the Care Dyad: Bridging Dementia Caregivers with eHealth: Are (Some of) the Bridges Still Too Far? eHealth Applications to Support Communication, Coordination, Collaboration Among Caregivers of People with Dementia Living at Home - A Scoping Review",
    icon: BookText,
    path: "/studies/scoping-review"
  },
  {
    id: "study2",
    title: "Beyond the Care Dyad: Can Artificial Intelligence Help to Forge Stronger and Smarter Bridges for Dementia Caregiver Networks?",
    description: "Beyond the Care Dyad: Can Artificial Intelligence Help to Forge Stronger and Smarter Bridges for Dementia Caregiver Networks?",
    icon: Wand2,
    path: "/studies/ai-bridges"
  },
  {
    id: "study3",
    title: "A Week in the Life of Dementia Caregivers: An Experience-Based Co-Design Study to Develop Digital Resources Supporting Caregiver Networks",
    description: "A Week in the Life of Dementia Caregivers: An Experience-Based Co-Design Study to Develop Digital Resources Supporting Caregiver Networks",
    icon: Clock,
    path: "/studies/caregiver-week"
  },
  {
    id: "study4",
    title: "ExperienceD: Design and Feasibility Evaluation of a Brief Dialogue-Based Serious Game to Enhance Dementia Care Knowledge and Attitudes Among Informal Caregivers",
    description: "ExperienceD: Design and Feasibility Evaluation of a Brief Dialogue-Based Serious Game to Enhance Dementia Care Knowledge and Attitudes Among Informal Caregivers",
    icon: Gamepad2,
    path: "/studies/experienced-game"
  },
  {
    id: "study5",
    title: "Is a Chat Group All Caregivers Need and would Accept? Pilot Evaluation of an AI-Powered Caregiver Network Support Hub \"UniteD\"",
    description: "Is a Chat Group All Caregivers Need and would Accept? Pilot Evaluation of an AI-Powered Caregiver Network Support Hub \"UniteD\"",
    icon: MessagesSquare,
    path: "/studies/chat-support-hub"
  },
  {
    id: "study6",
    title: "Bridges to Better Support: A Pilot Feasibility Evaluation of 'VolunteerD (UniteD-VolunteerD)', an AI-Powered Support Hub for Volunteer Dementia Care Networks",
    description: "Bridges to Better Support: A Pilot Feasibility Evaluation of 'VolunteerD (UniteD-VolunteerD)', an AI-Powered Support Hub for Volunteer Dementia Care Networks",
    icon: Users2,
    path: "/studies/better-support"
  }
];

const Index = () => {
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
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link to="/studies/scoping-review">
                  <Button>
                    <BookText className="mr-2 h-4 w-4" />
                    View Beyond the Care Dyad: Bridging Dementia Caregivers with eHealth: Are (Some of) the Bridges Still Too Far? eHealth Applications to Support Communication, Coordination, Collaboration Among Caregivers of People with Dementia Living at Home - A Scoping Review
                  </Button>
                </Link>
                <Link to="/team">
                  <Button variant="outline">About Research</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="container px-4 md:px-6 py-6">
          <h2 className="text-2xl font-bold tracking-tight mb-6">Research Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {studies.map((study) => (
              <Card key={study.id} className="h-full hover:shadow-md transition-shadow">
                <Link to={study.path} className="block h-full w-full no-underline">
                  <CardHeader className="flex flex-row items-start gap-2">
                    <study.icon className="h-6 w-6 text-primary flex-shrink-0" />
                    <CardTitle className="text-lg">{study.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">{study.description}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">View Complete Study Details for {study.title}</Button>
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

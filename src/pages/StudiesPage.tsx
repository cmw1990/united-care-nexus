
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookText, Wand2, Clock, Gamepad2, MessagesSquare, Users2 } from "lucide-react";
import { Link } from "react-router-dom";

const StudiesPage = () => {
  const studies = [
    {
      id: "study1",
      title: "Beyond the Care Dyad: Bridging Dementia Caregivers with eHealth: Are (Some of) the Bridges Still Too Far? eHealth Applications to Support Communication, Coordination, Collaboration Among Caregivers of People with Dementia Living at Home - A Scoping Review",
      description: "A comprehensive scoping review analyzing eHealth applications that support communication, coordination, and collaboration among caregivers of people with dementia.",
      icon: BookText,
      path: "/studies/scoping-review"
    },
    {
      id: "study2",
      title: "Beyond the Care Dyad: Can Artificial Intelligence Help to Forge Stronger and Smarter Bridges for Dementia Caregiver Networks?",
      description: "Exploring AI solutions to enhance support networks for dementia caregivers.",
      icon: Wand2,
      path: "/studies/ai-bridges"
    },
    {
      id: "study3",
      title: "A Week in the Life of Dementia Caregivers: An Experience-Based Co-Design Study to Develop Digital Resources Supporting Caregiver Networks",
      description: "Experience-based research to design digital tools for caregiver support networks.",
      icon: Clock,
      path: "/studies/caregiver-week"
    },
    {
      id: "study4",
      title: "ExperienceD: Design and Feasibility Evaluation of a Brief Dialogue-Based Serious Game to Enhance Dementia Care Knowledge and Attitudes Among Informal Caregivers",
      description: "Evaluating a dialogue-based game to improve caregiver knowledge and attitudes.",
      icon: Gamepad2,
      path: "/studies/experienced-game"
    },
    {
      id: "study5",
      title: "Is a Chat Group All Caregivers Need and would Accept? Pilot Evaluation of an AI-Powered Caregiver Network Support Hub \"UniteD\"",
      description: "Pilot study of an AI-powered chat support hub for caregiver networks.",
      icon: MessagesSquare,
      path: "/studies/chat-support-hub"
    },
    {
      id: "study6",
      title: "Bridges to Better Support: A Pilot Feasibility Evaluation of 'VolunteerD (UniteD-VolunteerD)', an AI-Powered Support Hub for Volunteer Dementia Care Networks",
      description: "Evaluating an AI-powered hub for volunteer dementia care networks.",
      icon: Users2,
      path: "/studies/better-support"
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 md:px-6 py-6">
        <h1 className="text-3xl font-bold tracking-tight mb-8">Research Studies</h1>
        <div className="grid grid-cols-1 gap-6">
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
                    View Study Details
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

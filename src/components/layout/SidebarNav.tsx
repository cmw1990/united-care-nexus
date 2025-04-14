
import { 
  BookText, 
  CheckSquare, 
  HelpCircle, 
  FileText, 
  FileUp, 
  Edit, 
  MessagesSquare,
  Clock,
  Gamepad2,
  Users2,
  Wand2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";

interface StudyItem {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  path: string;
}

const studies: StudyItem[] = [
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

export function SidebarNav() {
  const location = useLocation();
  
  return (
    <div className="hidden md:block w-[320px] min-w-[320px] border-r px-4 py-6 bg-accent/40">
      <div className="flex items-center mb-6 pl-4">
        <h2 className="text-lg font-medium">Research Studies</h2>
      </div>
      <ScrollArea className="h-[calc(100vh-9rem)]">
        <div className="space-y-2">
          {studies.map((study) => (
            <Link
              key={study.id}
              to={study.path}
              className={cn(
                "flex flex-col gap-1 py-3 px-4 text-sm rounded-md hover:bg-accent transition-colors block w-full",
                location.pathname === study.path ? "bg-accent font-medium text-accent-foreground" : "text-foreground/70"
              )}
            >
              <div className="flex items-start gap-3">
                <study.icon className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <div className="flex-1 w-full min-w-0">
                  <span className="line-clamp-3">{study.title}</span>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{study.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}

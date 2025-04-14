
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
  icon: React.ComponentType<{ className?: string }>;
  path: string;
}

const studies: StudyItem[] = [
  {
    id: "study1",
    title: "Beyond the Care Dyad: Bridging Dementia Caregivers with eHealth",
    icon: BookText,
    path: "/studies/scoping-review"
  },
  {
    id: "study2",
    title: "Beyond the Care Dyad: Can Artificial Intelligence Help to Forge Stronger and Smarter Bridges for Dementia Caregiver Networks?",
    icon: Wand2,
    path: "/studies/ai-bridges"
  },
  {
    id: "study3",
    title: "A Week in the Life of Dementia Caregivers: An Experience-Based Co-Design Study to Develop Digital Resources Supporting Caregiver Networks",
    icon: Clock,
    path: "/studies/caregiver-week"
  },
  {
    id: "study4",
    title: "ExperienceD: Design and Feasibility Evaluation of a Brief Dialogue-Based Serious Game to Enhance Dementia Care Knowledge and Attitudes Among Informal Caregivers",
    icon: Gamepad2,
    path: "/studies/experienced-game"
  },
  {
    id: "study5",
    title: "Is a Chat Group All Caregivers Need and would Accept? Pilot Evaluation of an AI-Powered Caregiver Network Support Hub \"UniteD\"",
    icon: MessagesSquare,
    path: "/studies/chat-support-hub"
  },
  {
    id: "study6",
    title: "Bridges to Better Support: A Pilot Feasibility Evaluation of 'VolunteerD (UniteD-VolunteerD)', an AI-Powered Support Hub for Volunteer Dementia Care Networks",
    icon: Users2,
    path: "/studies/better-support"
  }
];

export function SidebarNav() {
  const location = useLocation();
  
  return (
    <div className="hidden md:block w-[320px] min-w-[320px] border-r px-4 py-6 bg-accent/40">
      <div className="flex items-center mb-6 pl-4">
        <h2 className="text-lg font-medium">Beyond the Care Dyad: Bridging Dementia Caregivers with eHealth</h2>
      </div>
      <ScrollArea className="h-[calc(100vh-9rem)]">
        <div className="space-y-2">
          {studies.map((study) => (
            <Link
              key={study.id}
              to={study.path}
              className={cn(
                "flex items-start gap-3 py-3 px-4 text-sm rounded-md hover:bg-accent transition-colors block w-full",
                location.pathname === study.path ? "bg-accent font-medium text-accent-foreground" : "text-foreground/70"
              )}
            >
              <study.icon className="h-4 w-4 flex-shrink-0 mt-0.5" />
              <div className="flex-1 w-full min-w-0">
                <span>{study.title}</span>
              </div>
            </Link>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}

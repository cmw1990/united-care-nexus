
import { Link } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";
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
  Brain,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocation } from "react-router-dom";

interface StudyItem {
  id: string;
  title: string;
  shortTitle: string;
  icon: React.ComponentType<{ className?: string }>;
  path: string;
}

const studies: StudyItem[] = [
  {
    id: "study1",
    title: "Beyond the Care Dyad: Bridging Dementia Caregivers with eHealth",
    shortTitle: "Scoping Review",
    icon: BookText,
    path: "/studies/scoping-review"
  },
  {
    id: "study2",
    title: "AI Help to Forge Stronger and Smarter Bridges for Dementia Caregiver Networks",
    shortTitle: "AI Bridges",
    icon: Brain,
    path: "/studies/ai-bridges"
  },
  {
    id: "study3",
    title: "A week in the life of dementia caregivers",
    shortTitle: "Caregiver Week",
    icon: Clock,
    path: "/studies/caregiver-week"
  },
  {
    id: "study4",
    title: "ExperienceD: Dialogue-Based Serious Game",
    shortTitle: "ExperienceD Game",
    icon: Gamepad2,
    path: "/studies/experienced-game"
  },
  {
    id: "study5",
    title: "AI powered caregiver network support hub",
    shortTitle: "Chat Support Hub",
    icon: MessagesSquare,
    path: "/studies/chat-support-hub"
  },
  {
    id: "study6",
    title: "Bridges to offer better support",
    shortTitle: "Better Support",
    icon: Users2,
    path: "/studies/better-support"
  }
];

export function SidebarNav() {
  const location = useLocation();
  
  return (
    <div className="hidden md:block w-[280px] min-w-[280px] border-r px-4 py-6 bg-accent/40">
      <div className="flex items-center mb-6 pl-4">
        <h2 className="text-lg font-medium">Beyond the Care Dyad: Bridging Dementia Caregivers with eHealth</h2>
      </div>
      <ScrollArea className="h-[calc(100vh-9rem)]">
        <div className="space-y-1">
          {studies.map((study) => (
            <Link
              key={study.id}
              to={study.path}
              className={cn(
                "flex items-center py-2 px-4 text-sm rounded-md hover:bg-accent",
                location.pathname === study.path ? "bg-accent font-medium text-accent-foreground" : "text-foreground/70"
              )}
            >
              <study.icon className="h-4 w-4 mr-3 flex-shrink-0" />
              <span className="truncate">{study.shortTitle}</span>
            </Link>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}

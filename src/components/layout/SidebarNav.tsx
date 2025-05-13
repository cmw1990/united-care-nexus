
import { 
  BookText, 
  Wand2,
  Clock,
  Gamepad2,
  MessagesSquare,
  Users2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useLanguage } from "@/context/LanguageContext";

export function SidebarNav() {
  const location = useLocation();
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
    <div className="hidden md:block w-[320px] min-w-[320px] border-r px-4 py-6 bg-accent/40">
      <div className="flex items-center mb-6 pl-4">
        <h2 className="text-lg font-medium">{t('studies.title')}</h2>
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

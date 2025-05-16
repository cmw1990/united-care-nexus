
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useLocation } from "react-router-dom";
import { BookText, FileText, Library, CheckSquare, HelpCircle, Home } from "lucide-react";
import { LanguageSelector } from "../LanguageSelector";

export function MainNav() {
  const location = useLocation();
  
  const links = [
    { href: "/", label: "Home", icon: Home },
    { href: "/studies", label: "Studies", icon: BookText },
    { href: "/research", label: "Research", icon: FileText },
    { href: "/resources", label: "Resources", icon: Library },
    { href: "/todo", label: "To Do", icon: CheckSquare },
    { href: "/questions", label: "Questions", icon: HelpCircle },
  ];

  return (
    <div className="flex items-center space-x-4 lg:space-x-6">
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <Link
            key={link.href}
            to={link.href}
            className={cn(
              "flex items-center text-sm font-medium transition-colors hover:text-primary gap-1",
              location.pathname === link.href
                ? "text-foreground"
                : "text-muted-foreground"
            )}
          >
            <Icon className="h-4 w-4" />
            <span>{link.label}</span>
          </Link>
        );
      })}
      <LanguageSelector />
    </div>
  );
}

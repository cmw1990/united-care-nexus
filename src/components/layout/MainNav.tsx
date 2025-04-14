
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Brain, FileText, Users, Menu } from "lucide-react";
import { useState } from "react";

export function MainNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link to="/" className="flex items-center space-x-2">
            <Brain className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl md:text-2xl hidden md:inline-block">UniteD Care Nexus</span>
          </Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-4 flex-1 justify-center">
          <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link to="/studies" className="text-sm font-medium transition-colors hover:text-primary">
            Studies
          </Link>
          <Link to="/resources" className="text-sm font-medium transition-colors hover:text-primary">
            Resources
          </Link>
          <Link to="/team" className="text-sm font-medium transition-colors hover:text-primary">
            Team
          </Link>
        </div>
        
        <div className="md:hidden flex-1 justify-end flex">
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
        
        <div className="hidden md:flex items-center space-x-2">
          <Button variant="ghost" size="icon">
            <FileText className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Users className="h-5 w-5" />
          </Button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 border-b border-border/40 bg-background py-4 px-6 space-y-4">
          <Link to="/" className="block text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link to="/studies" className="block text-sm font-medium transition-colors hover:text-primary">
            Studies
          </Link>
          <Link to="/resources" className="block text-sm font-medium transition-colors hover:text-primary">
            Resources
          </Link>
          <Link to="/team" className="block text-sm font-medium transition-colors hover:text-primary">
            Team
          </Link>
        </div>
      )}
    </header>
  );
}

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText, Users, Menu, LogOut, KeyRound } from "lucide-react";
import { useState, useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";

export function MainNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasAccessCode, setHasAccessCode] = useState(false);
  const { user, signOut } = useAuth();

  useEffect(() => {
    const storedAccessCode = localStorage.getItem("united_access_code");
    setHasAccessCode(storedAccessCode === "UniteD");
  }, []);

  const handleSignOut = async () => {
    if (hasAccessCode) {
      localStorage.removeItem("united_access_code");
      setHasAccessCode(false);
      window.location.href = "/auth";
    } else {
      await signOut();
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl md:text-2xl hidden md:inline-block">UniteD - Bridging Dementia Caregivers with eHealth</span>
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
          {user ? (
            <>
              <Button variant="ghost" size="icon">
                <FileText className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Users className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" onClick={handleSignOut}>
                <LogOut className="h-5 w-5" />
              </Button>
            </>
          ) : hasAccessCode ? (
            <>
              <div className="flex items-center mr-2 text-sm text-muted-foreground">
                <KeyRound className="h-4 w-4 mr-1" />
                <span>Read-only access</span>
              </div>
              <Button variant="outline" size="sm" onClick={handleSignOut}>
                Exit
              </Button>
            </>
          ) : (
            <Link to="/auth">
              <Button variant="default">Sign In</Button>
            </Link>
          )}
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
          {user ? (
            <Button variant="outline" className="w-full" onClick={handleSignOut}>
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          ) : hasAccessCode ? (
            <Button variant="outline" className="w-full" onClick={handleSignOut}>
              <KeyRound className="h-4 w-4 mr-2" />
              Exit Read-only Mode
            </Button>
          ) : (
            <Link to="/auth">
              <Button variant="default" className="w-full">Sign In</Button>
            </Link>
          )}
        </div>
      )}
    </header>
  );
}


import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import { ProtectedRoute } from "@/routes/ProtectedRoute";
import { LanguageProvider } from "@/context/LanguageContext";
import translations from "@/translations";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";

// Import studies page
import StudiesPage from "./pages/StudiesPage";
import ResearchPage from "./pages/ResearchPage";

// Import individual study pages
import ScopingReview from "./pages/studies/ScopingReview";
import AIBridges from "./pages/studies/AIBridges";
import CaregiverWeek from "./pages/studies/CaregiverWeek";
import ExperiencedGame from "./pages/studies/ExperiencedGame";
import ChatSupportHub from "./pages/studies/ChatSupportHub";
import BetterSupport from "./pages/studies/BetterSupport";
import TeamPage from "./pages/TeamPage";
import ResourcesPage from "./pages/ResourcesPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <LanguageProvider translations={translations} defaultLanguage="en">
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/auth" element={<Auth />} />
              
              {/* Studies Routes */}
              <Route path="/studies" element={<StudiesPage />} />
              <Route path="/research" element={<ResearchPage />} />
              
              {/* Study 1 needs special handling - make it directly accessible */}
              <Route path="/studies/scoping-review" element={<ScopingReview />} />
              
              {/* Protected Study Routes */}
              <Route element={<ProtectedRoute />}>
                <Route path="/studies/ai-bridges" element={<AIBridges />} />
                <Route path="/studies/caregiver-week" element={<CaregiverWeek />} />
                <Route path="/studies/experienced-game" element={<ExperiencedGame />} />
                <Route path="/studies/chat-support-hub" element={<ChatSupportHub />} />
                <Route path="/studies/better-support" element={<BetterSupport />} />
              </Route>
              
              {/* Additional Pages */}
              <Route path="/team" element={<TeamPage />} />
              <Route path="/resources" element={<ResourcesPage />} />
              
              {/* Catch-all route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;

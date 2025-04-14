
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useState, useEffect } from "react";
import { toast } from "@/hooks/use-toast";

export const ProtectedRoute = () => {
  const { user, isLoading } = useAuth();
  const [hasAccessCode, setHasAccessCode] = useState(false);
  const [checkingAccess, setCheckingAccess] = useState(true);

  useEffect(() => {
    // Check if user has stored the correct access code
    const storedAccessCode = localStorage.getItem("united_access_code");
    const hasValidCode = storedAccessCode === "UniteD";
    setHasAccessCode(hasValidCode);
    
    // If we have a valid access code, show a toast notification
    if (hasValidCode && !user) {
      toast({
        title: "Read-only access granted",
        description: "You are browsing with read-only access. Sign in for full functionality."
      });
    }
    
    setCheckingAccess(false);
  }, [user]);

  if (isLoading || checkingAccess) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  // Allow access if user is logged in OR has the correct access code
  if (user || hasAccessCode) {
    return <Outlet />;
  }

  // If no user and no access code, redirect to auth page
  return <Navigate to="/auth" />;
};

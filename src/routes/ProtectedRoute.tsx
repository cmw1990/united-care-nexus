
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

export const ProtectedRoute = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  return user ? <Outlet /> : <Navigate to="/auth" />;
};

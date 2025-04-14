
import { ReactNode } from "react";
import { MainNav } from "./MainNav";
import { SidebarNav } from "./SidebarNav";

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <div className="flex">
        <SidebarNav />
        <main className="flex-1 p-6 md:p-8 pt-6">
          {children}
        </main>
      </div>
    </div>
  );
}

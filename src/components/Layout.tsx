
import React, { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar with fixed positioning */}
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      {/* Menu button for mobile */}
      <button
        onClick={toggleSidebar}
        className="sidebar-trigger-button md:hidden"
        aria-label="Toggle Sidebar"
      >
        <Menu size={20} className="text-gray-700" />
      </button>
      
      {/* Main content with proper left margin to avoid overlap */}
      <main className={cn(
        "flex-1 transition-all duration-300 ease-in-out",
        "md:ml-64" // Always keep space for sidebar on desktop
      )}>
        <div className="max-w-7xl mx-auto p-4 sm:p-6 md:p-8">
          {children}
        </div>
      </main>
    </div>
  );
};

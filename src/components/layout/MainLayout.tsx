import { ReactNode, useState } from "react";
import Sidebar, { MobileMenuTrigger } from "./Sidebar";
import Header from "./Header";
import SearchDialog from "./SearchDialog";
import { SearchProvider } from "@/hooks/useSearch";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <SearchProvider>
      <div className="flex min-h-screen w-full max-w-7xl mx-auto">
        <Sidebar 
          isMobileOpen={isMobileMenuOpen} 
          onMobileClose={() => setIsMobileMenuOpen(false)} 
        />
        <div className="flex-1 flex flex-col min-w-0">
          <Header onMobileMenuOpen={() => setIsMobileMenuOpen(true)} />
          <main id="main-content" className="flex-1 overflow-auto p-4 md:p-6 lg:p-8">
            {children}
          </main>
        </div>
        <SearchDialog />
      </div>
    </SearchProvider>
  );
};

export default MainLayout;

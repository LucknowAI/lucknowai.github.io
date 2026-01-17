import { Search, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { useSearch } from "@/hooks/useSearch";

interface HeaderProps {
  onMobileMenuOpen?: () => void;
}

const Header = ({ onMobileMenuOpen }: HeaderProps) => {
  const { setIsOpen } = useSearch();

  return (
    <header className="h-[3.8rem] border-b border-border flex items-center justify-between px-4 md:px-6">
      {/* Left side */}
      <div className="flex items-center gap-4">
        {/* Mobile menu button */}
        <button 
          onClick={onMobileMenuOpen}
          className="lg:hidden p-2 -ml-2 hover:bg-secondary rounded"
          aria-label="Open menu"
        >
          <Menu className="w-5 h-5" />
        </button>
        
        {/* Site Title - visible on mobile */}
        <Link to="/" className="lg:hidden text-lg font-semibold text-foreground hover:text-foreground/90">
          Lucknow AI
        </Link>
        
        {/* Search button - desktop only (already in sidebar) */}
        <button
          onClick={() => setIsOpen(true)}
          className="hidden lg:flex items-center gap-2 text-muted-foreground hover:text-foreground"
        >
          <Search className="w-4 h-4" />
          <span className="text-sm">Search Lucknow AI</span>
        </button>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        {/* Mobile search button */}
        <button
          onClick={() => setIsOpen(true)}
          className="lg:hidden p-2 hover:bg-secondary rounded"
          aria-label="Search"
        >
          <Search className="w-5 h-5" />
        </button>
        
        {/* GitHub Link */}
        <a
          href="https://github.com/LucknowAI"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline text-sm hidden sm:block"
        >
          Lucknow AI on GitHub
        </a>
      </div>
    </header>
  );
};

export default Header;

import { useEffect, useRef } from "react";
import { Search, X } from "lucide-react";
import { useSearch } from "@/hooks/useSearch";

const SearchDialog = () => {
  const { query, setQuery, results, isOpen, setIsOpen, navigateToResult } = useSearch();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Close on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
      // Cmd/Ctrl + K to open
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen(true);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [setIsOpen]);

  if (!isOpen) return null;

  // Group results by category
  const groupedResults = results.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, typeof results>);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />
      
      {/* Dialog */}
      <div className="relative w-full max-w-lg bg-card border border-border rounded-lg shadow-2xl">
        {/* Search input */}
        <div className="flex items-center border-b border-border px-4">
          <Search className="w-5 h-5 text-muted-foreground" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search Lucknow AI..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 px-3 py-4 bg-transparent text-foreground placeholder:text-muted-foreground outline-none"
          />
          <button 
            onClick={() => setIsOpen(false)}
            className="p-1 hover:bg-secondary rounded"
          >
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>

        {/* Results */}
        {query && (
          <div className="max-h-80 overflow-y-auto p-2">
            {results.length === 0 ? (
              <div className="p-4 text-center text-muted-foreground">
                No results found for "{query}"
              </div>
            ) : (
              Object.entries(groupedResults).map(([category, items]) => (
                <div key={category} className="mb-2">
                  <div className="px-3 py-1 text-xs font-medium text-muted-foreground uppercase">
                    {category}
                  </div>
                  {items.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => navigateToResult(item.href)}
                      className="w-full text-left px-3 py-2 rounded hover:bg-secondary text-foreground text-sm"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              ))
            )}
          </div>
        )}

        {/* Keyboard hint */}
        <div className="border-t border-border px-4 py-2 text-xs text-muted-foreground">
          Press <kbd className="px-1.5 py-0.5 bg-secondary rounded text-foreground">ESC</kbd> to close
        </div>
      </div>
    </div>
  );
};

export default SearchDialog;

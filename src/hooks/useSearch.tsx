import { createContext, useContext, useState, useCallback, useMemo, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface SearchableItem {
  label: string;
  href: string;
  category: string;
}

// All searchable content
const searchableContent: SearchableItem[] = [
  { label: "Home", href: "/", category: "Pages" },
  { label: "About Us", href: "/about-us", category: "Pages" },
  { label: "Research & Publications", href: "/research", category: "Pages" },
  { label: "AI Baithak", href: "/ai-baithak", category: "Pages" },
  { label: "Resources", href: "/resources", category: "Pages" },
  { label: "LAI Mentorship Program", href: "/mentorship", category: "Pages" },
  { label: "Volunteer Opportunities", href: "/volunteer", category: "Pages" },
  { label: "Contact Us", href: "/contact", category: "Pages" },
  { label: "Code of Conduct", href: "/code-of-conduct", category: "Pages" },
  { label: "License", href: "/license", category: "Pages" },
  
  // Projects
  { label: "Nawab-AI", href: "/projects/nawab-ai", category: "Projects" },
  { label: "Final Year Project Generator", href: "/projects/final-year-project", category: "Projects" },
  
  // FAQs
  { label: "LAI FAQs", href: "/faqs/lai-faqs", category: "FAQs" },
  { label: "Commonly Asked Questions", href: "/faqs/common", category: "FAQs" },
  { label: "Volunteer FAQs", href: "/faqs/volunteer", category: "FAQs" },
  
  // Past Events
  { label: "(26/11/23) Meetup", href: "/events/past/26-nov-2023-meetup", category: "Past Events" },
  { label: "(13/01/24) Jamie AI Voice Assistant Online Meetup", href: "/events/past/13-jan-2024-jamie-ai", category: "Past Events" },
  { label: "(21/01/24) Startup Success Days India 2023", href: "/events/past/21-jan-2024-startup-success", category: "Past Events" },
  { label: "(27/01/24) Image Processing Meetup", href: "/events/past/27-jan-2024-image-processing", category: "Past Events" },
  { label: "(27/02/24) Build, Train & Deploy Workshop", href: "/events/past/27-feb-2024-build-train-deploy", category: "Past Events" },
  { label: "(27/04/24) GDSC WOW Lucknow 2024", href: "/events/past/27-apr-2024-gdsc-wow", category: "Past Events" },
  { label: "(23-24/05/24) Hack To Crack 1.0", href: "/events/past/23-24-may-2024-hack-to-crack", category: "Past Events" },
  { label: "(25/05/24) Gen AI Awadh Summit", href: "/events/past/25-may-2024-genai-awadh", category: "Past Events" },
  { label: "(29/06/24) Build with AI 2024", href: "/events/past/29-jun-2024-build-with-ai", category: "Past Events" },
  { label: "(10/08/24) Discord AMA 2024", href: "/events/past/10-aug-2024-discord-ama", category: "Past Events" },
  { label: "(31/08/24) Google I/O Extended Lucknow", href: "/events/past/31-aug-2024-google-io-extended", category: "Past Events" },
  { label: "(19/10/24) AI-Day Lucknow", href: "/events/past/19-oct-2024-ai-day", category: "Past Events" },
  { label: "(24/11/24) DevFest Lucknow", href: "/events/past/24-nov-2024-devfest", category: "Past Events" },
  { label: "(08/03/25) IWD Lucknow", href: "/events/past/08-mar-2025-iwd", category: "Past Events" },
  { label: "(05/04/25) Hack4Bihar – Lucknow Hacking Tour", href: "/events/past/05-apr-2025-hack4bihar", category: "Past Events" },
  { label: "(07/04/25) Build with AI Workshop at BBD", href: "/events/past/07-apr-2025-build-with-ai-bbd", category: "Past Events" },
  { label: "(19/04/25) Build with AI Workshop at SRMCEM", href: "/events/past/19-apr-2025-build-with-ai-srmcem", category: "Past Events" },
  { label: "(27/04/25) Build with AI Workshop at LPCPS", href: "/events/past/27-apr-2025-build-with-ai-lpcps", category: "Past Events" },
];

interface SearchContextType {
  query: string;
  setQuery: (query: string) => void;
  results: SearchableItem[];
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  navigateToResult: (href: string) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const searchTerm = query.toLowerCase();
    return searchableContent.filter(
      item => 
        item.label.toLowerCase().includes(searchTerm) ||
        item.category.toLowerCase().includes(searchTerm)
    );
  }, [query]);

  const navigateToResult = useCallback((href: string) => {
    navigate(href);
    setQuery("");
    setIsOpen(false);
  }, [navigate]);

  return (
    <SearchContext.Provider value={{ query, setQuery, results, isOpen, setIsOpen, navigateToResult }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within SearchProvider");
  }
  return context;
};

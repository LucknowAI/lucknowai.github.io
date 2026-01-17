import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Search, Menu, X } from "lucide-react";
import { useSearch } from "@/hooks/useSearch";
import logo from "@/assets/images/logo.png";

interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  children?: NavItem[];
  isDropdown?: boolean;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Research & Publications", href: "/research" },
  {
    label: "Events & Meetups",
    href: "/events",
    children: [
      { 
        label: "Upcoming Events", 
        href: "/events/upcoming", 
        isDropdown: true,
        children: []
      },
      { 
        label: "Past Events", 
        href: "/events/past", 
        isDropdown: true,
        children: [
          {
            label: "2023",
            href: "/events/past/2023",
            isDropdown: true,
            children: [
              { label: "(26/11/23) Meetup", href: "/events/past/26-nov-2023-meetup" },
            ]
          },
          {
            label: "2024",
            href: "/events/past/2024",
            isDropdown: true,
            children: [
              { label: "(13/01/24) Jamie AI Voice Assistant Online Meetup", href: "/events/past/13-jan-2024-jamie-ai" },
              { label: "(21/01/24) Startup Success Days India 2023", href: "/events/past/21-jan-2024-startup-success" },
              { label: "(27/01/24) Meetup", href: "/events/past/27-jan-2024-image-processing" },
              { label: "(27/02/24) Build, Train & Deploy Workshop", href: "/events/past/27-feb-2024-build-train-deploy" },
              { label: "(27/04/24) GDSC WOW Lucknow 2024", href: "/events/past/27-apr-2024-gdsc-wow" },
              { label: "(23-24/05/24) Hack To Crack 1.0", href: "/events/past/23-24-may-2024-hack-to-crack" },
              { label: "(25/05/24) Gen AI Awadh Summit", href: "/events/past/25-may-2024-genai-awadh" },
              { label: "(29/06/24) Build with AI 2024", href: "/events/past/29-jun-2024-build-with-ai" },
              { label: "(10/08/24) Discord AMA 2024", href: "/events/past/10-aug-2024-discord-ama" },
              { label: "(31/08/24) Google I/O Extended Lucknow", href: "/events/past/31-aug-2024-google-io-extended" },
              { label: "(19/10/24) AI-Day Lucknow", href: "/events/past/19-oct-2024-ai-day" },
              { label: "(24/11/24) DevFest Lucknow", href: "/events/past/24-nov-2024-devfest" },
            ]
          },
          {
            label: "2025",
            href: "/events/past/2025",
            isDropdown: true,
            children: [
              { label: "(08/03/25) IWD Lucknow", href: "/events/past/08-mar-2025-iwd" },
              { label: "(05/04/25) Hack4Bihar – Lucknow Hacking Tour", href: "/events/past/05-apr-2025-hack4bihar" },
              { label: "(07/04/25) Build with AI Workshop at BBD", href: "/events/past/07-apr-2025-build-with-ai-bbd" },
              { label: "(19/04/25) Build with AI Workshop at SRMCEM", href: "/events/past/19-apr-2025-build-with-ai-srmcem" },
              { label: "(27/04/25) Build with AI Workshop at LPCPS", href: "/events/past/27-apr-2025-build-with-ai-lpcps" },
            ]
          },
        ]
      },
    ],
  },
  // {
  //   label: "Projects",
  //   href: "/projects",
  //   children: [
  //     { label: "Nawab-AI", href: "/projects/nawab-ai" },
  //     { label: "Final Year Project Generator", href: "/projects/final-year-project" },
  //   ],
  // },
  { label: "AI Baithak", href: "/ai-baithak" },
  { label: "Resources", href: "/resources" },
  { label: "LAI Mentorship Program", href: "/mentorship" },
  { label: "Volunteer Opportunities", href: "/volunteer" },
  { label: "Contact Us", href: "/contact" },
  {
    label: "FAQs",
    href: "/faqs",
    children: [
      { label: "LAI FAQs", href: "/faqs/lai-faqs" },
      { label: "Commonly Asked Questions", href: "/faqs/common" },
      { label: "Volunteer FAQs", href: "/faqs/volunteer" },
    ],
  },
  { label: "Code of Conduct", href: "/code-of-conduct" },
  { label: "Lisence", href: "/license" },
];

// Helper to check if a path matches an item or any of its children
const isPathActive = (item: NavItem, pathname: string): boolean => {
  if (pathname === item.href || pathname.startsWith(item.href + "/")) {
    return true;
  }
  if (item.children) {
    return item.children.some(child => isPathActive(child, pathname));
  }
  return false;
};

interface NavItemComponentProps {
  item: NavItem;
  isActive: boolean;
  pathname: string;
  onNavigate?: () => void;
}

const NavItemComponent = ({ item, isActive, pathname, onNavigate }: NavItemComponentProps) => {
  const shouldBeOpen = isPathActive(item, pathname);
  const [isOpen, setIsOpen] = useState(shouldBeOpen);

  // Keep menu open when navigating within its children
  useEffect(() => {
    if (shouldBeOpen) {
      setIsOpen(true);
    }
  }, [shouldBeOpen]);

  if (item.children) {
    return (
      <div className="space-y-1">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center justify-between w-full text-left nav-link ${
            isActive ? "nav-link-active" : ""
          }`}
        >
          <span>{item.label}</span>
          <ChevronDown
            className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          />
        </button>
        {isOpen && (
          <div className="pl-4 space-y-1 mt-1 max-h-60 overflow-y-auto scrollbar-thin">
            {item.children.map((child) => (
              <ChildNavItem key={child.href} item={child} pathname={pathname} onNavigate={onNavigate} />
            ))}
          </div>
        )}
      </div>
    );
  }

  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`block nav-link ${isActive ? "nav-link-active" : ""}`}
        onClick={onNavigate}
      >
        {item.label}
      </a>
    );
  }

  return (
    <Link
      to={item.href}
      className={`block nav-link ${isActive ? "nav-link-active" : ""}`}
      onClick={onNavigate}
    >
      {item.label}
    </Link>
  );
};

interface ChildNavItemProps {
  item: NavItem;
  pathname: string;
  onNavigate?: () => void;
}

const ChildNavItem = ({ item, pathname, onNavigate }: ChildNavItemProps) => {
  const shouldBeOpen = isPathActive(item, pathname);
  const [isSubOpen, setIsSubOpen] = useState(shouldBeOpen);

  // Keep submenu open when navigating within its children
  useEffect(() => {
    if (shouldBeOpen) {
      setIsSubOpen(true);
    }
  }, [shouldBeOpen]);

  if (item.isDropdown && item.children) {
    return (
      <div className="space-y-1">
        <button
          onClick={() => setIsSubOpen(!isSubOpen)}
          className="flex items-center justify-between w-full text-left nav-link text-xs text-primary hover:text-primary/80"
        >
          <span>{item.label}</span>
          <ChevronDown
            className={`w-3 h-3 transition-transform ${isSubOpen ? "rotate-180" : ""}`}
          />
        </button>
        {isSubOpen && (
          <div className="pl-3 space-y-1 mt-1 max-h-48 overflow-y-auto scrollbar-thin">
            {item.children.map((subChild) => {
              // Recursively render children that might also be dropdowns
              if (subChild.isDropdown && subChild.children) {
                return (
                  <ChildNavItem
                    key={subChild.href}
                    item={subChild}
                    pathname={pathname}
                    onNavigate={onNavigate}
                  />
                );
              }
              return (
                <Link
                  key={subChild.href}
                  to={subChild.href}
                  onClick={onNavigate}
                  className={`block nav-link text-xs hover:text-foreground ${
                    pathname === subChild.href 
                      ? "text-foreground font-medium" 
                      : "text-[#959396]"
                  }`}
                >
                  {subChild.label}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  if (item.children) {
    return (
      <div>
        <Link
          to={item.href}
          onClick={onNavigate}
          className={`block nav-link text-xs hover:text-foreground ${
            pathname === item.href 
              ? "text-foreground font-medium" 
              : "text-[#959396]"
          }`}
        >
          {item.label}
        </Link>
        <div className="pl-3 space-y-1 mt-1">
          {item.children.map((subChild) => (
            <Link
              key={subChild.href}
              to={subChild.href}
              onClick={onNavigate}
              className={`block nav-link text-xs hover:text-foreground ${
                pathname === subChild.href 
                  ? "text-foreground font-medium" 
                  : "text-[#959396]"
              }`}
            >
              {subChild.label}
            </Link>
          ))}
        </div>
      </div>
    );
  }

  return (
    <Link
      to={item.href}
      onClick={onNavigate}
      className={`block nav-link text-xs hover:text-foreground ${
        pathname === item.href 
          ? "text-foreground font-medium" 
          : "text-[#959396]"
      }`}
    >
      {item.label}
    </Link>
  );
};

interface SidebarProps {
  isMobileOpen?: boolean;
  onMobileClose?: () => void;
}

const Sidebar = ({ isMobileOpen, onMobileClose }: SidebarProps) => {
  const location = useLocation();
  const { setIsOpen } = useSearch();

  const handleNavigate = () => {
    if (onMobileClose) {
      onMobileClose();
    }
  };

  return (
    <>
      {/* Mobile overlay */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={onMobileClose}
        />
      )}
      
      <aside 
        className={`
          fixed lg:static inset-y-0 left-0 z-50
          w-64 min-h-screen bg-sidebar border-r border-sidebar-border flex flex-col
          transform transition-transform duration-300 lg:translate-x-0
          ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {/* Header with Title */}
        <div className="p-4 border-b border-sidebar-border">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-lg font-semibold text-foreground hover:text-foreground/90" onClick={handleNavigate}>
              Lucknow AI
            </Link>
            <button 
              className="lg:hidden p-1 hover:bg-secondary rounded"
              onClick={onMobileClose}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Logo */}
        <div className="p-4 flex flex-col items-center">
          <Link to="/" onClick={handleNavigate}>
            <img src={logo} alt="Lucknow AI Logo" className="w-32 h-32 object-contain" />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 pb-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <NavItemComponent
              key={item.href}
              item={item}
              isActive={location.pathname === item.href}
              pathname={location.pathname}
              onNavigate={handleNavigate}
            />
          ))}
        </nav>

        {/* Footer */}
        <div className="px-4 pb-4 text-xs text-muted-foreground">
          <p>
            Copyright © 2017 Lucknow AI. 
            {/* Distributed by a{" "}
            <a
              href="https://opensource.org/licenses/MIT"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              MIT license
            </a>
            .  */}
          </p>
        </div>
      </aside>
    </>
  );
};

// Mobile menu trigger button
export const MobileMenuTrigger = ({ onClick }: { onClick: () => void }) => (
  <button 
    onClick={onClick}
    className="lg:hidden p-2 hover:bg-secondary rounded"
    aria-label="Open menu"
  >
    <Menu className="w-6 h-6" />
  </button>
);

export default Sidebar;

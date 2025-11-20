import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LogoWithBgRemoval } from "./LogoWithBgRemoval";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (hash: string) => {
    const element = document.querySelector(hash);
    if (element) {
      const headerOffset = 100; // Match the footer's offset
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Update URL without triggering a page reload
      window.history.pushState({}, '', hash);
    }
  };

  const handleNavigation = (hash: string) => {
    if (location.pathname !== '/') {
      navigate('/' + hash);
      // Small delay to ensure the page has loaded before scrolling
      setTimeout(() => scrollToSection(hash), 100);
    } else {
      scrollToSection(hash);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2" onClick={() => window.scrollTo(0, 0)}>
            <LogoWithBgRemoval />
            <span className="text-xl font-bold" style={{ fontFamily: "var(--font-serif)" }}>A&T Solutions</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8" style={{ fontFamily: "var(--font-sans)" }}>
            <button onClick={() => handleNavigation('#solutions')} className="text-sm font-medium hover:text-primary transition-colors">
              Solutions
            </button>
            <button onClick={() => handleNavigation('#about')} className="text-sm font-medium hover:text-primary transition-colors">
              About Us
            </button>
            <Button onClick={() => handleNavigation('#book-demo')}>
              Book Demo
            </Button>
          </nav>

          <Button className="md:hidden" onClick={() => {
            const menu = document.querySelector('nav.md:hidden');
            if (menu) {
              menu.classList.toggle('hidden');
            }
          }}>Menu</Button>
          <nav className="hidden md:hidden absolute top-20 left-0 right-0 bg-background border-t border-border p-4 shadow-lg">
            <div className="flex flex-col gap-4">
              <button onClick={() => handleNavigation('#solutions')} className="text-left px-4 py-2 text-sm font-medium hover:text-primary transition-colors">
                Solutions
              </button>
              <button onClick={() => handleNavigation('#about')} className="text-left px-4 py-2 text-sm font-medium hover:text-primary transition-colors">
                About Us
              </button>
              <Button onClick={() => handleNavigation('#book-demo')} className="w-full">
                Book Demo
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

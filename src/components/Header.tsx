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
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between h-20 py-2 md:py-0">
          <Link to="/" className="flex items-center gap-2 mb-2 md:mb-0" onClick={() => window.scrollTo(0, 0)}>
            <LogoWithBgRemoval />
            <span className="text-xl font-bold text-center" style={{ fontFamily: "var(--font-serif)" }}>A&T Solutions</span>
          </Link>
          
          <nav className="flex items-center gap-4 sm:gap-6 md:gap-8" style={{ fontFamily: "var(--font-sans)" }}>
            <button onClick={() => handleNavigation('#solutions')} className="text-sm font-medium hover:text-primary transition-colors">
              Solutions
            </button>
            <button onClick={() => handleNavigation('#about')} className="text-sm font-medium hover:text-primary transition-colors">
              About Us
            </button>
            <button 
              onClick={() => handleNavigation('#book-demo')} 
              className="text-sm font-medium hover:text-primary transition-colors md:bg-primary md:text-primary-foreground md:px-4 md:py-2 md:rounded-md md:hover:bg-primary/90"
            >
              Book Demo
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

import ATLogo from "@/assets/ATLogo.svg";
import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const Footer = () => {
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
    }
  };

  const handleSectionClick = (e: React.MouseEvent, hash: string) => {
    e.preventDefault();
    
    if (location.pathname !== '/') {
      // If not on homepage, navigate to homepage with hash
      navigate(`/${hash}`);
      // Scroll after navigation is complete
      const scrollAfterNavigation = () => {
        if (window.location.pathname === '/') {
          scrollToSection(hash);
          window.removeEventListener('popstate', scrollAfterNavigation);
        }
      };
      window.addEventListener('popstate', scrollAfterNavigation);
    } else {
      // If already on homepage, just scroll
      window.history.pushState({}, '', hash);
      scrollToSection(hash);
    }
  };

  useEffect(() => {
    if (location.hash === '#solutions') {
      const element = document.getElementById('solutions');
      if (element) {
        const headerOffset = 80; // Adjust this value as needed
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  }, [location]);

  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
          <div className="space-y-4 md:col-span-1 flex flex-col items-center md:items-start">
            <Link to="/" className="flex items-center gap-2 group" onClick={() => window.scrollTo(0, 0)}>
              <img 
                src={ATLogo} 
                alt="A&T Solutions Logo" 
                className="h-10 w-auto transition-transform group-hover:scale-105"
              />
              <span className="text-xl font-bold hidden sm:inline-block" style={{ fontFamily: "var(--font-serif)" }}>
                A&T Solutions
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              AI consulting for small and mid-size businesses
            </p>
          </div>

          <div className="md:col-span-1 flex flex-col items-center md:items-start">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/#about" className="hover:text-primary transition-colors" onClick={(e) => handleSectionClick(e, '#about')}>About Us</a></li>
              <li><a href="/#solutions" className="hover:text-primary transition-colors" onClick={(e) => handleSectionClick(e, '#solutions')}>Our Solutions</a></li>
              <li><a href="/#book-demo" className="hover:text-primary transition-colors" onClick={(e) => handleSectionClick(e, '#book-demo')}>Book Demo</a></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors" onClick={() => window.scrollTo(0, 0)}>Contact</Link></li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/privacy" className="hover:text-primary transition-colors" onClick={() => window.scrollTo(0, 0)}>Privacy Policy</Link></li>
              <li><Link to="/security" className="hover:text-primary transition-colors" onClick={() => window.scrollTo(0, 0)}>Security & DPA</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center space-y-1" style={{ fontFamily: "var(--font-sans)" }}>
          <p className="text-sm text-muted-foreground">© 2025 A&T AI Solutions LLC. All rights reserved.</p>
          <p className="text-xs text-muted-foreground">Incorporated in New Jersey, 2025</p>
        </div>
      </div>
    </footer>
  );
};

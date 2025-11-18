import { Button } from "@/components/ui/button";
import { LogoWithBgRemoval } from "./LogoWithBgRemoval";
import { Link, useNavigate, useLocation } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (hash: string) => {
    if (location.pathname !== '/') {
      navigate('/' + hash);
    } else {
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2">
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

          <Button className="md:hidden">Menu</Button>
        </div>
      </div>
    </header>
  );
};

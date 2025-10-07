import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent" />
            <span className="text-xl font-bold">A&T Solutions</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#solutions" className="text-sm hover:text-primary transition-colors">
              Solutions
            </a>
            <a href="#industries" className="text-sm hover:text-primary transition-colors">
              Industries
            </a>
            <a href="#pricing" className="text-sm hover:text-primary transition-colors">
              Pricing
            </a>
            <Button>Book Demo</Button>
          </nav>

          <Button className="md:hidden">Menu</Button>
        </div>
      </div>
    </header>
  );
};

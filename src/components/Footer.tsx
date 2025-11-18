import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent" />
              <span className="text-xl font-bold" style={{ fontFamily: "var(--font-serif)" }}>A&T Solutions</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              AI consulting for small and mid-size businesses
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/#solutions" className="hover:text-primary transition-colors">Outbound Campaigns</Link></li>
              <li><Link to="/#solutions" className="hover:text-primary transition-colors">Social Media Automation</Link></li>
              <li><Link to="/#solutions" className="hover:text-primary transition-colors">Data Pipelines</Link></li>
              <li><Link to="/#solutions" className="hover:text-primary transition-colors">Knowledge Base</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/#about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/#solutions" className="hover:text-primary transition-colors">Our Solutions</Link></li>
              <li><Link to="/#book-demo" className="hover:text-primary transition-colors">Book Demo</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/security" className="hover:text-primary transition-colors">Security & DPA</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
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

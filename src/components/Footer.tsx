export const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent" />
              <span className="text-xl font-bold">A&T Solutions</span>
            </div>
            <p className="text-sm text-muted-foreground">
              AI consulting for small and mid-size businesses
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Invoice Automation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Internal AI Employee</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Web Chatbot</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Voice Receptionist</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Video Workflow</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Industries</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Professional Services</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Home Services</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Healthcare & Dental</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Retail & E-commerce</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Auto Services</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Security & DPA</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
          <p>© 2025 A&T Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

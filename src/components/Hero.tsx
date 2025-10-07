import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-block px-4 py-2 rounded-full bg-secondary border border-border text-sm text-muted-foreground mb-4">
            AI Solutions for Growing Businesses
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            We deliver work
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              that converts
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            AI consulting for small and mid-size businesses. Automate invoices, empower teams with instant answers, and boost conversions—all with predictable costs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              className="group text-lg px-8"
              onClick={() => document.getElementById('book-demo')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book a 20-Minute Demo
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8"
              onClick={() => document.querySelector('#solutions')?.scrollIntoView({ behavior: 'smooth' })}
            >
              See Our Solutions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

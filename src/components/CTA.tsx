import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to automate and grow?
          </h2>
          <p className="text-xl text-muted-foreground">
            Book a 20-minute demo to see how our AI solutions can transform your business operations. No commitment required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              className="group text-lg px-8"
              onClick={() => document.getElementById('book-demo')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book Your Demo
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Download One-Pager
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            Upfront + retainer model • Lite/Standard/Plus tiers • Promotional pilots available
          </p>
        </div>
      </div>
    </section>
  );
};

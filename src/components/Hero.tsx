import { Button } from "@/components/ui/button";
import { Calendar, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

export const Hero = () => {
  const rotatingTexts = [
    "driving your bottom line",
    "accelerating your growth",
    "scaling your efficiency"
  ];
  
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000); // Change every 3 seconds
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center p-4 md:p-8">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="font-bold tracking-tight leading-tight" style={{ fontFamily: "var(--font-serif)" }}>
            <div className="text-[3.5rem] md:text-[5.5rem] lg:text-[6.5rem] text-foreground">
              AI Solutions
            </div>
            <span 
              key={currentTextIndex}
              className="inline-block text-[2.5rem] md:text-[3.75rem] lg:text-[4.25rem] bg-clip-text text-transparent"
              style={{
                animation: 'fadeIn 0.5s ease-in-out',
                backgroundImage: 'linear-gradient(135deg, hsl(265, 60%, 70%), hsl(280, 70%, 60%), hsl(290, 60%, 65%))'
              }}
            >
              {rotatingTexts[currentTextIndex]}
            </span>
          </h1>
          
          <style>{`
            @keyframes fadeIn {
              0% { opacity: 0; transform: translateY(10px); }
              100% { opacity: 1; transform: translateY(0); }
            }
          `}</style>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="group text-base px-8 bg-primary hover:bg-primary/90 text-white transition-all duration-300"
              style={{ fontFamily: "var(--font-sans)", fontWeight: 500 }}
              onClick={() => document.getElementById('book-demo')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book a 20-Minute Demo
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-base px-8 border-2"
              style={{ fontFamily: "var(--font-sans)", fontWeight: 500 }}
              onClick={() => document.querySelector('#solutions')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Sparkles className="mr-2 h-5 w-5" />
              See Our Solutions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

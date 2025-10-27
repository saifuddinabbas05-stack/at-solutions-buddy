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
      {/* Full-screen gradient background with rounded corners */}
      <div 
        className="absolute inset-4 md:inset-8 rounded-3xl overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #4a1a5c 0%, #2d1b4e 25%, #1a1a3e 50%, #0f0f1e 75%, #000000 100%)',
          boxShadow: '0 25px 50px -12px rgba(74, 26, 92, 0.5)'
        }}
      >
        {/* Glowing orbs effect */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl" />
        
        {/* Gradient fade to black at bottom - more gradual */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-64"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.7) 70%, #000000 100%)'
          }}
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Liquid glass badge */}
          <div 
            className="inline-block px-6 py-3 rounded-full text-sm mb-4 backdrop-blur-xl border"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              borderColor: 'rgba(255, 255, 255, 0.1)',
              boxShadow: '0 8px 32px 0 rgba(139, 92, 246, 0.2), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)',
              color: 'rgba(255, 255, 255, 0.9)',
              fontFamily: "'JetBrains Mono', monospace"
            }}
          >
            AI Solutions for Growing Businesses
          </div>
          
          <h1 className="font-bold tracking-tight text-white leading-tight" style={{ fontFamily: "'Geist', sans-serif" }}>
            <div className="text-[3.5rem] md:text-[5.5rem] lg:text-[6.5rem]">
              AI Solutions
            </div>
            <span 
              key={currentTextIndex}
              className="inline-block text-[2.5rem] md:text-[3.75rem] lg:text-[4.25rem] bg-clip-text text-transparent"
              style={{
                animation: 'fadeIn 0.5s ease-in-out',
                backgroundImage: 'linear-gradient(to right, #ffffff, #f0f0f0, #a78bfa, #8b5cf6)'
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
              className="group text-lg px-8 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white transition-all duration-300 shadow-lg hover:shadow-primary/30"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
              onClick={() => document.getElementById('book-demo')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Calendar className="mr-2 h-5 w-5" />
              BOOK A 20-MINUTE DEMO
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
              onClick={() => document.querySelector('#solutions')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Sparkles className="mr-2 h-5 w-5" />
              SEE OUR SOLUTIONS
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

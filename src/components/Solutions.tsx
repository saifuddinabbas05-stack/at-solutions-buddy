import { Card } from "@/components/ui/card";
import { FileText, Brain, MessageSquare, Phone, Video } from "lucide-react";

export const Solutions = () => {
  const solutions = [
    {
      icon: FileText,
      title: "Invoice Automation",
      outcome: "70–90% touchless processing, fewer errors, faster cash-flow visibility",
      features: [
        "Email/API ingestion with OCR + LLM extraction",
        "Smart validation rules and error detection",
        "Direct export to QuickBooks/Xero",
        "Real-time status dashboard"
      ],
      timeline: "4–6 weeks"
    },
    {
      icon: Brain,
      title: "Internal AI Employee",
      outcome: "Instant answers from private company docs; lower time-to-answer and onboarding costs",
      features: [
        "Secure document ingestion and vector indexing",
        "Citations and source tracking",
        "Slack/Teams/web portal integration",
        "Admin analytics dashboard"
      ],
      timeline: "6–8 weeks"
    },
    {
      icon: MessageSquare,
      title: "MCP+RAG Web Chatbot",
      outcome: "More site conversions via accurate answers; lead capture; call deflection",
      features: [
        "Branded website widget",
        "Multi-channel pipeline integration",
        "Lead database and CRM sync",
        "ADA-compliant design"
      ],
      timeline: "3–5 weeks"
    },
    {
      icon: Phone,
      title: "AI Voice Receptionist",
      outcome: "Answers common questions, books appointments, routes calls",
      features: [
        "Twilio voice integration",
        "Calendar and scheduling sync",
        "Smart human fallback routing",
        "Full conversation logging"
      ],
      timeline: "4–6 weeks"
    },
    {
      icon: Video,
      title: "Multi-Platform Video Workflow",
      outcome: "Consistent posting across YouTube, TikTok, Instagram with automation",
      features: [
        "Auto-generated captions and highlights",
        "Multi-platform scheduler",
        "Template-based branding",
        "Performance analytics"
      ],
      timeline: "3–5 weeks"
    }
  ];

  return (
    <section className="py-24 bg-background" id="solutions">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Flagship Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the AI solution that fits your business needs. All come with clear timelines and custom pricing—request a quote to get started.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <Card 
                key={index} 
                className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] group"
              >
                <div className="space-y-6">
                  <div className="flex items-start justify-between">
                    <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                      {solution.timeline}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-3">{solution.title}</h3>
                    <p className="text-foreground/90 leading-relaxed">
                      {solution.outcome}
                    </p>
                  </div>

                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

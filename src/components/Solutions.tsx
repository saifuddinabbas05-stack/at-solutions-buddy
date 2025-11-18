import { Card } from "@/components/ui/card";
import { TrendingUp, Mail, Share2, Database, Brain, BarChart3 } from "lucide-react";

export const Solutions = () => {
  const solutionCategories = [
    {
      category: "Growth & Outbound",
      description: "Automated marketing campaigns with measurable ROI",
      solutions: [
        {
          icon: Mail,
          title: "Outbound Campaign Automation",
          outcome: "Automated email sequences with personalized messaging and lead scoring",
          features: [
            "AI-powered email personalization at scale",
            "Multi-channel outreach (email, LinkedIn, SMS)",
            "Lead scoring and qualification automation",
            "Real-time ROI dashboard with conversion tracking"
          ],
          timeline: "3–5 weeks"
        },
        {
          icon: Share2,
          title: "Social Media Campaign Automation",
          outcome: "Consistent multi-platform presence with automated content generation",
          features: [
            "AI content generation for multiple platforms",
            "Automated scheduling and posting",
            "Engagement tracking and response automation",
            "Performance analytics with ROI metrics"
          ],
          timeline: "4–6 weeks"
        }
      ]
    },
    {
      category: "Backend & Operations",
      description: "Streamline internal processes with intelligent automation",
      solutions: [
        {
          icon: Database,
          title: "Data Pipeline Automation",
          outcome: "Automated data collection, transformation, and reporting",
          features: [
            "Multi-source data integration and ETL",
            "Real-time data validation and cleaning",
            "Automated report generation",
            "Custom dashboards with KPI tracking"
          ],
          timeline: "5–7 weeks"
        },
        {
          icon: Brain,
          title: "Internal Knowledge Base",
          outcome: "Instant access to company knowledge with AI-powered search",
          features: [
            "Secure document ingestion and indexing",
            "Natural language search with citations",
            "Slack/Teams integration",
            "Usage analytics and ROI dashboard"
          ],
          timeline: "4–6 weeks"
        }
      ]
    }
  ];

  return (
    <section className="py-16 bg-background" id="solutions">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 space-y-4">
          <h2 
            className="text-6xl md:text-7xl font-bold bg-clip-text text-transparent" 
            style={{ 
              fontFamily: "var(--font-serif)",
              backgroundImage: 'linear-gradient(135deg, hsl(270, 65%, 65%), hsl(280, 70%, 60%), hsl(290, 60%, 65%))'
            }}
          >
            Our Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" style={{ fontFamily: "var(--font-sans)" }}>
            AI-powered solutions with easy tracking and visible ROI metrics
          </p>
        </div>

        <div className="space-y-20 max-w-7xl mx-auto">
          {solutionCategories.map((category, catIndex) => (
            <div key={catIndex} className="space-y-10">
              {/* Category Header */}
              <div className="text-center space-y-3">
                <h3 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-serif)" }}>
                  {category.category}
                </h3>
                <p className="text-lg text-muted-foreground" style={{ fontFamily: "var(--font-sans)" }}>
                  {category.description}
                </p>
              </div>

              {/* Solutions Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {category.solutions.map((solution, index) => {
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
                          <div className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full" style={{ fontFamily: "var(--font-sans)", fontWeight: 500 }}>
                            {solution.timeline}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-2xl font-bold mb-3">{solution.title}</h4>
                          <p className="text-foreground/90 leading-relaxed">
                            {solution.outcome}
                          </p>
                        </div>

                        <ul className="space-y-2">
                          {solution.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground" style={{ fontFamily: "var(--font-sans)" }}>
                              <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>

                        {/* ROI Badge */}
                        <div className="pt-4 border-t border-border">
                          <div className="flex items-center gap-2 text-sm text-primary">
                            <BarChart3 className="h-4 w-4" />
                            <span className="font-medium">Includes ROI tracking dashboard</span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

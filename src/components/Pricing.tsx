export const Pricing = () => {
  const tiers = [
    {
      name: "Lite",
      price: "$2,500/mo",
      summary: "Best for first pilot or single workflow",
      items: ["One solution", "Email support", "2 iterations/month"],
    },
    {
      name: "Standard",
      price: "$5,000/mo",
      summary: "Most popular for multi-team rollouts",
      items: ["Two solutions", "Priority support", "4 iterations/month"],
    },
    {
      name: "Plus",
      price: "$8,000/mo",
      summary: "For advanced automation and integrations",
      items: ["Three solutions", "Dedicated Slack", "Custom integrations"],
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Pricing</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Predictable monthly pricing with clear deliverables. Promotional pilots available.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {tiers.map((t) => (
            <div key={t.name} className="p-8 rounded-xl bg-card border border-border">
              <div className="text-2xl font-semibold">{t.name}</div>
              <div className="text-4xl font-bold mt-2">{t.price}</div>
              <div className="text-muted-foreground mt-2">{t.summary}</div>
              <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                {t.items.map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;






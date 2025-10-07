export const Stats = () => {
  const stats = [
    {
      label: "Average Time Saved",
      value: "70-90%",
      description: "Touchless invoice processing"
    },
    {
      label: "Faster Onboarding",
      value: "60%",
      description: "With internal AI assistants"
    },
    {
      label: "Lead Conversion",
      value: "+45%",
      description: "Via AI-powered chatbots"
    },
    {
      label: "Implementation",
      value: "3-8 Weeks",
      description: "From design to go-live"
    }
  ];

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-3">
              <div className="text-sm uppercase tracking-wider text-primary font-medium">
                {stat.label}
              </div>
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-muted-foreground">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Industries = () => {
  const industries = [
    { name: "Professional Services", blurb: "Automate back-office tasks and client ops." },
    { name: "Home Services", blurb: "Capture more leads and streamline scheduling." },
    { name: "Healthcare & Dental", blurb: "Reduce admin load and improve patient comms." },
    { name: "Retail & E-commerce", blurb: "Answer product questions and increase AOV." },
    { name: "Auto Services", blurb: "Book appointments and triage inquiries automatically." },
  ];

  return (
    <section id="industries" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Industries We Serve</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Proven playbooks tailored to common SMB verticals. Start with a fast pilot.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {industries.map((i) => (
            <div key={i.name} className="p-6 rounded-xl bg-background border border-border">
              <div className="text-2xl font-semibold mb-2">{i.name}</div>
              <div className="text-muted-foreground">{i.blurb}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;






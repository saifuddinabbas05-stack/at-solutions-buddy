export const AboutUs = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Two Rutgers students building AI solutions that work
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {/* Huzefa */}
          <div className="group rounded-2xl border border-border bg-card p-6 hover:shadow-lg transition-all">
            <div className="flex items-start gap-4">
              <div className="h-20 w-20 rounded-2xl bg-muted flex items-center justify-center text-2xl font-bold">
                HT
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold">Huzefa Tapya</h3>
                <p className="text-sm text-muted-foreground mb-3">Co-Founder • B.S. Computer Science, Rutgers</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  Built AI agents and robust backends; shipped apps used by thousands. Previously contributed at{" "}
                  <span className="font-medium text-foreground">Walmart Global Tech</span>,{" "}
                  <span className="font-medium text-foreground">Google (exploreCSR)</span>,{" "}
                  <span className="font-medium text-foreground">Johnson & Johnson</span>,{" "}
                  <span className="font-medium text-foreground">Princeton University</span>, and{" "}
                  <span className="font-medium text-foreground">The Port Authority of NY & NJ</span>.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["AI Agents", "Full-Stack", "Python/JS", "LangChain", "FastAPI"].map((pill) => (
                    <span
                      key={pill}
                      className="text-xs rounded-full bg-secondary text-secondary-foreground px-2.5 py-1"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Saif */}
          <div className="group rounded-2xl border border-border bg-card p-6 hover:shadow-lg transition-all">
            <div className="flex items-start gap-4">
              <div className="h-20 w-20 rounded-2xl bg-muted flex items-center justify-center text-2xl font-bold">
                SA
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold">Saifuddin Abbas</h3>
                <p className="text-sm text-muted-foreground mb-3">Co-Founder • B.S. Data Science & Finance, Rutgers Honors</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  Product-minded data builder. Experience at{" "}
                  <span className="font-medium text-foreground">Andrena</span> and{" "}
                  <span className="font-medium text-foreground">Define Media Group</span> supporting SEO & data initiatives across clients like{" "}
                  <span className="font-medium text-foreground">The Weather Channel</span> and{" "}
                  <span className="font-medium text-foreground">the NBA</span>.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Data Apps", "Analytics", "Product", "Python/SQL", "Cortex AI"].map((pill) => (
                    <span
                      key={pill}
                      className="text-xs rounded-full bg-secondary text-secondary-foreground px-2.5 py-1"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Credibility Strip */}
        <div className="rounded-2xl border border-border bg-card p-6 max-w-5xl mx-auto">
          <p className="text-sm font-medium text-foreground mb-4">We've built and shipped at:</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
            {[
              "Walmart Global Tech",
              "Google",
              "Johnson & Johnson",
              "Princeton University",
              "Port Authority NY/NJ",
              "Andrena",
              "Define Media Group",
              "The Weather Channel",
              "NBA"
            ].map((name) => (
              <div
                key={name}
                className="flex items-center justify-center rounded-xl border border-border bg-background px-3 py-2 text-xs text-muted-foreground"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

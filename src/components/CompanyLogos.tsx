export const CompanyLogos = () => {
  const companies = [
    { name: "Google", logo: "/logos/google.png" },
    { name: "Walmart Global Tech", logo: "/logos/walmart.png" },
    { name: "Johnson & Johnson", logo: "/logos/jnj.png" },
    { name: "Princeton University", logo: "/logos/princeton.png" },
    { name: "The Weather Channel", logo: "/logos/weather.png" },
    { name: "NBA", logo: "/logos/nba.png" },
    { name: "JCrew", logo: "/logos/jcrew.png" },
    { name: "Port Authority NY/NJ", logo: "/logos/panynj.png" },
    { name: "Andrena", logo: "/logos/andrena.png" },
    { name: "Define Media Group", logo: "/logos/define.png" },
  ];

  return (
    <div className="py-12 bg-muted/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-xl font-semibold text-foreground mb-12">
          Our Experience Across Industries
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 md:gap-12">
          {companies.map((company, index) => (
            <div 
              key={index} 
              className="group flex items-center justify-center p-2"
              title={company.name}
            >
              <div className="relative h-20 w-full flex items-center justify-center">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-full w-auto max-w-full object-contain object-center opacity-90 hover:opacity-100 transition-opacity duration-300"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = '/placeholder-logo.svg';
                    e.currentTarget.alt = `${company.name} logo`;
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

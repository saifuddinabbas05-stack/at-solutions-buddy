import { CompanyLogos } from "./CompanyLogos";
import { ProfilePicture } from "./ui/ProfilePicture";

export const AboutUs = () => {
  const team = [
    {
      name: "Huzefa Tapya",
      role: "Co-Founder",
      education: "B.S. Computer Science, Rutgers",
      skills: ["AI Agents", "Full-Stack", "Python/JS", "LangChain", "FastAPI"],
      image: "/profiles/huzefa.jpg"
    },
    {
      name: "Saif Abbas",
      role: "Co-Founder",
      education: "B.S. Data Science & Finance, Rutgers",
      skills: ["AI/ML", "Data Science", "Cloud Computing", "DevOps", "MERN Stack"],
      image: "/profiles/saif.jpg"
    }
  ];

  return (
    <section id="about" className="bg-background">
      <div className="container mx-auto px-6 pt-24 pb-12">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About Us
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <div key={index} className="group rounded-2xl border border-border bg-card p-6 hover:shadow-lg transition-all">
              <div className="flex items-start gap-6">
                <ProfilePicture 
                  src={member.image} 
                  alt={member.name}
                  className="flex-shrink-0"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {member.role} • {member.education}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs rounded-full bg-secondary text-secondary-foreground px-2.5 py-1"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <CompanyLogos />
    </section>
  );
};

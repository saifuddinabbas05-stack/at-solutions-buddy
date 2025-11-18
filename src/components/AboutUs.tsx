import { CompanyLogos } from "./CompanyLogos";
import { ProfilePicture } from "./ui/ProfilePicture";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { useState } from "react";

export const AboutUs = () => {
  const [openDialog, setOpenDialog] = useState<string | null>(null);

  const team = [
    {
      name: "Huzefa Tapya",
      role: "Co-Founder",
      education: "B.S. Computer Science, Rutgers",
      skills: ["AI Agents", "Full-Stack", "Python/JS", "LangChain", "FastAPI"],
      image: "/profiles/huzefa.jpg",
      bio: "Huzefa is a passionate technologist with expertise in building AI-powered solutions. With a strong background in computer science from Rutgers University, he specializes in creating intelligent agents and full-stack applications that solve real business problems.",
      experience: [
        "Led development of multiple AI automation systems for SMBs",
        "Expert in LangChain and modern AI frameworks",
        "Built scalable backend systems using FastAPI and Python",
        "Full-stack developer proficient in modern web technologies"
      ]
    },
    {
      name: "Saif Abbas",
      role: "Co-Founder",
      education: "B.S. Data Science & Finance, Rutgers",
      skills: ["AI/ML", "Data Science", "Cloud Computing", "DevOps", "MERN Stack"],
      image: "/profiles/saif.jpg",
      bio: "Saif combines his expertise in data science and finance to deliver data-driven AI solutions. His unique background enables him to understand both the technical and business aspects of AI implementation.",
      experience: [
        "Specialized in machine learning model development and deployment",
        "Expert in cloud infrastructure and DevOps practices",
        "Built end-to-end data pipelines for business intelligence",
        "Full-stack developer with MERN stack expertise"
      ]
    }
  ];

  return (
    <section id="about" className="bg-background">
      <div className="container mx-auto px-6 pt-2 pb-12">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <img 
              src="/logos/at-logo-white.png" 
              alt="A&T Solutions Logo" 
              className="h-auto"
              style={{ width: '300px' }}
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About Us
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <Dialog key={index} open={openDialog === member.name} onOpenChange={(open) => setOpenDialog(open ? member.name : null)}>
              <DialogTrigger asChild>
                <div className="group rounded-2xl border border-border bg-card p-6 hover:shadow-lg transition-all cursor-pointer hover:border-primary/50">
                  <div className="flex items-start gap-6">
                    <ProfilePicture 
                      src={member.image} 
                      alt={member.name}
                      className="flex-shrink-0"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold">{member.name}</h3>
                      <p className="text-sm text-muted-foreground mb-3" style={{ fontFamily: "var(--font-sans)" }}>
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
                      <p className="text-xs text-muted-foreground mt-3 italic">Click to learn more</p>
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl" style={{ fontFamily: "var(--font-serif)" }}>{member.name}</DialogTitle>
                </DialogHeader>
                <div className="space-y-6 mt-4">
                  <div className="flex items-start gap-6">
                    <ProfilePicture 
                      src={member.image} 
                      alt={member.name}
                      className="flex-shrink-0"
                    />
                    <div>
                      <p className="text-sm text-muted-foreground mb-2" style={{ fontFamily: "var(--font-sans)" }}>
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
                  
                  <div>
                    <h4 className="font-semibold mb-2">About</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Experience & Expertise</h4>
                    <ul className="space-y-2">
                      {member.experience.map((exp, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                          <span>{exp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
      <CompanyLogos />
    </section>
  );
};

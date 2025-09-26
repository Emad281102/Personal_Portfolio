import { CheckCircle2 } from "lucide-react";

const experience = {
  title: "Experience",
  description: "I am an SDE at Hostup Cloud Technologies Pvt Ltd",
  items: [
    {
      title: "Software Engineering Intern",
      company: "Hostup Cloud Technologies Pvt Ltd",
      date: "Aug 2025 - Present",
      description: [
        "Developed and deployed production-level web features using React.js, Next.js, and Tailwind CSS, focusing on responsive design, scalability, and delivering a seamless user experience across devices.",
        "Integrated REST APIs and external services to ensure smooth, API-driven functionality.",
        "Designed and optimized MongoDB databases with Prisma ORM, creating efficient schemas, queries, and data handling workflows.",
        "Improved application performance while supporting real-time multilingual processing and secure authentication with Better Auth.",
        "Collaborated in Agile sprints using Git/GitHub for version control, contributing through code reviews, debugging, and unit testing (Jest, JUnit) to maintain high-quality, production-ready code in team-driven environments.",
      ],
    },
  ],
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">{experience.title}</h2>
        <div className="max-w-4xl mx-auto">
          {experience.items.map((item, index) => (
            <div key={index} className="bg-card rounded-2xl shadow-2xl p-8 transform transition-transform duration-500 hover:scale-105 hover:shadow-primary/20">
              <div className="flex items-start gap-6">
                <div className="z-20 flex items-center justify-center bg-primary shadow-lg w-16 h-16 rounded-full flex-shrink-0">
                  <h1 className="font-bold text-2xl text-white">{index + 1}</h1>
                </div>
                <div className="flex-grow">
                  <h3 className="font-bold text-2xl mb-2 text-primary">{item.title}</h3>
                  <p className="text-md font-semibold text-muted-foreground mb-4">{item.company} | {item.date}</p>
                  <ul className="mt-6 space-y-4 text-md text-muted-foreground">
                    {item.description.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="text-primary/80 mt-1 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { ExperienceSection };
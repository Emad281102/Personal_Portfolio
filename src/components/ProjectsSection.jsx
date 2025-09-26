import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Saarthi Learn",
    description:
      "An AI-driven multilingual educational platform aimed at bridging the digital divide in rural India.",
    image: "/projects/saarthi.png", // add a screenshot to /public/projects/
    tags: ["AI", "Next.js", "TailwindCSS", "Node.js"],
    demoUrl: "#", // if you have a live demo link, add here
    githubUrl: "https://github.com/Emad281102/Saarthi_Learn",
  },
  {
    id: 2,
    title: "RuralConnect",
    description:
      "A web platform designed to connect rural communities with essential services and opportunities.",
    image: "/projects/ruralconnect.png",
    tags: ["React", "Express", "MongoDB"],
    demoUrl: "#",
    githubUrl: "https://github.com/Emad281102/RuralConnect_Project",
  },
  {
    id: 3,
    title: "Personal Portfolio",
    description:
      "My personal portfolio website showcasing skills, projects, research, and achievements.",
    image: "/projects/portfolio.png",
    tags: ["Next.js", "TailwindCSS", "TypeScript"],
    demoUrl: "#",
    githubUrl: "https://github.com/Emad281102/Personal_Portfolio",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and real-world impact.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {project.demoUrl !== "#" && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Emad281102"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

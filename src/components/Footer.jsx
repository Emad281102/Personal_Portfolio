import { ArrowUp, Github, Linkedin, Twitter } from "lucide-react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-primary mb-2">Emad&apos;s Portfolio</h3>
          <p className="text-sm text-muted-foreground max-w-md">
            Thank you for visiting my portfolio. Let&apos;s connect and build something amazing together.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center">
          <h4 className="font-semibold mb-3">Connect With Me</h4>
          <div className="flex space-x-4">
            <a
              href="https://github.com/Emad281102"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/mohammed-emadulla-a-bb925a284"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-border pt-8 flex flex-col md:flex-row justify-center items-center gap-4 relative">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Emad.co. All rights reserved.
        </p>
        <a
          href="#hero"
          className="md:absolute md:right-0 p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
        >
          <ArrowUp size={20} />
        </a>
      </div>
    </footer>
  );
};

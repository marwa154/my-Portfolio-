import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = ["All", "ReactJs", "Full Stack", "Next.js"];

const projects = [
  {
    title: "ClassQuiz Landing Page",
    description: "A marketing-focused landing page for ClassQuiz, an educational platform offering online practice exams for primary and secondary school students. Built with Next.js and TypeScript, it highlights features, benefits, and subscription options.",
    image: "images/classquiz.png",
    category: "Next.js",
    tags: ["Next.js", "TypeScript", "CSS"],
    liveUrl: "https://classquiz.tn/",
    githubUrl: "#",
  },
  {
    title: "ClassQuiz Parent Espace",
    description: "A dashboard for parents to monitor their children's progress in an educational game. The platform provides detailed statistics, highlights strengths and weaknesses, and helps parents support their children's learning effectively. Built with React, TypeScript",
    image: "images/classquizparent.png",
    category: "ReactJs",
    tags: ["React", "TypeScript", "CSS"],
    liveUrl: "http://parent.classquiz.tn/",
    githubUrl: "#",
  },
  {
    title: "Yoga Landing Page",
    description: "A responsive web application for a yoga website, showcasing classes, instructors, and schedules. Developed with React and Bootstrap, it uses Framer Motion for smooth animations and interactive effects.",
    image: "images/yoga.png",
    category: "ReactJs",
    tags: ["React", "Bootstrap", "Framer Motion"],
    liveUrl: "https://github.com/marwa154/yoga-site/tree/main/react-app",
    githubUrl: "https://github.com/marwa154/yoga-site/tree/main/react-app",
  },

  {
    title: "CRM Application",
    description: "A responsive Mini-CRM web application that helps a business centralize client information, track sales, invoices, payments, and improve internal communication between sales and administration teams. Built with Reactjs, Tailwind and Node.js.",
    image: "images/crm.png",
    category: "Full Stack",
    tags: ["Reactjs", "Tailwind CSS", "NodeJs"],
    liveUrl: "https://github.com/marwa154?tab=repositories",
    githubUrl: "https://github.com/marwa154?tab=repositories",
  },

];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <p className="text-primary font-medium tracking-wide uppercase text-sm">
            My Work
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Recent Projects
          </h2>
          <p className="text-muted-foreground">
            Here are some of my recent projects that showcase my skills and
            expertise in web development.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={
                activeCategory === category
                  ? "bg-gradient-primary"
                  : "border-primary/30 hover:border-primary hover:text-primary"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden bg-muted">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover  inset-0 opacity-100 group-hover:opacity-70 transition-opacity" />
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-foreground/80 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a
                    target="_blank"
                    href={project.liveUrl}
                    className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:scale-110 transition-transform"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="w-12 h-12 rounded-full bg-card flex items-center justify-center text-foreground hover:scale-110 transition-transform"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

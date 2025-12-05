import { Code, Layout, Smartphone, Globe, Database, Rocket } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Frontend Development",
    description:
      "Building modern, interactive user interfaces using React, TypeScript, and other cutting-edge technologies.",
  },
 {
  icon: Database,
  title: "Backend Development",
  description:
    "Building robust and scalable server-side applications using Node.js and Express.js, ensuring fast and secure data processing.",
},

  {
    icon: Globe,
    title: "UI Implementation",
    description:
      "Transforming design mockups into pixel-perfect, accessible, and performant web interfaces.",
  },
 
  {
    icon: Rocket,
    title: "Performance Optimization",
    description:
      "Improving website speed and performance to ensure the best user experience and SEO rankings.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <p className="text-primary font-medium tracking-wide uppercase text-sm">
            What I Do
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            My Services
          </h2>
          <p className="text-muted-foreground">
            I offer a wide range of web development services to help bring your
            ideas to life and grow your online presence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 bg-card rounded-2xl shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

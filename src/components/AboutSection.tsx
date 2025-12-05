import { Code2, Palette, Smartphone, Zap } from "lucide-react";

const skills = [
  { name: "HTML/CSS", level: 95 },
  { name: "JavaScript", level: 90 },
  { name: "React", level: 88 },
  { name: "TypeScript", level: 85 },
  { name: "Tailwind CSS", level: 92 },
  { name: "Node.js", level: 75 },
];

const highlights = [
  { icon: Code2, label: "Clean Code", description: "Writing maintainable code" },
  { icon: Palette, label: "UI/UX Focus", description: "Beautiful interfaces" },
  { icon: Smartphone, label: "Responsive", description: "Mobile-first design" },
  { icon: Zap, label: "Performance", description: "Optimized solutions" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Image & Stats */}
          <div className="relative">
            <div className="flex aspect-[4/5] rounded-2xl overflow-hidden shadow-card">
              <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-8xl font-display font-bold text-primary/20">
                    About
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Text */}
          <div className="">
            <div className="space-y-4">
              <p className="text-primary font-medium tracking-wide uppercase text-sm">
                About Me
              </p>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
                Passionate Web Developer
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                With over 2 years of experience in web development, I specialize
                in creating modern, responsive, and user-centric web applications.
                I'm passionate about turning complex problems into simple,
                beautiful, and intuitive designs.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My journey in web development started with a curiosity for how
                things work on the internet, and it has evolved into a career
                where I help businesses establish their digital presence and
                achieve their goals.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 p-4 bg-card rounded-xl shadow-soft hover:shadow-card transition-shadow"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{item.label}</p>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">My Skills</h3>
              <div className="grid gap-3">
                {skills.map((skill) => (
                  <div key={skill.name} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-primary rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

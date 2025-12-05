import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-hero relative overflow-hidden"
    >

      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-2 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div className=" order-2 lg:order-1 space-y-8 animate-fade-up flex flex-col mx-auto w-fit justify-center ">
            <div className="space-y-4">
              <p className="text-primary font-medium tracking-wide uppercase text-2xl">
                Hello, I'm Marwa Saidi
              </p>
              <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground leading-tight">
                Web<br />
                <span className="text-gradient">Developer</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
                I craft beautiful, responsive, and user-friendly web experiences
                that help businesses grow and succeed in the digital world.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-gradient-primary hover:opacity-90 transition-opacity text-lg px-8"
              >
                Hire Me
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToAbout}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8"
              >
                About Me
              </Button>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <span className="text-sm text-muted-foreground">Follow me:</span>
              <div className="flex gap-3">
                <a
                  href="https://github.com/marwa154"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/marwa-saidi-689414202/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className=" order-1 lg:order-2 relative flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              {/* Decorative circle behind image */}
              <div className="absolute inset-0 bg-gradient-primary rounded-full scale-95 opacity-20 blur-2xl" />

              {/* Profile image container */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-card">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <img src="images/Marwa Saidi.png" alt="Profile" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-card rounded-2xl shadow-card p-4 animate-fade-in" style={{ animationDelay: "0.5s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                    <span className="text-xl font-bold text-primary-foreground">+2</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Years</p>
                    <p className="text-xs text-muted-foreground">Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToAbout}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-xs uppercase tracking-wider">Scroll</span>
            <ArrowDown size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

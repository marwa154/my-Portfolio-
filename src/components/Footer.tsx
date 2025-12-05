import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <a href="#home" className="font-display text-xl font-bold">
            Portfolio<span className="text-primary">.</span>
          </a>

          {/* Copyright */}
          <p className="text-sm text-background/70 flex items-center gap-1">
            © {currentYear} Made with{" "}
            <Heart className="w-4 h-4 text-primary fill-primary" /> All rights
            reserved.
          </p>

          {/* Back to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-sm text-background/70 hover:text-primary transition-colors"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

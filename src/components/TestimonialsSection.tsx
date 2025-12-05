import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content:
      "Working with this developer was an absolute pleasure. They delivered our e-commerce platform ahead of schedule and exceeded all our expectations. The attention to detail and clean code quality were impressive.",
    avatar: "SJ",
  },
  {
    name: "Michael Chen",
    role: "Product Manager, InnovateCo",
    content:
      "Exceptional work on our dashboard project. The UI is beautiful, the performance is outstanding, and the code is well-documented. I highly recommend their services for any web development needs.",
    avatar: "MC",
  },
  {
    name: "Emily Davis",
    role: "Founder, DesignHub",
    content:
      "They transformed our design mockups into a pixel-perfect, responsive website. The communication throughout the project was excellent, and they were always open to feedback and iterations.",
    avatar: "ED",
  },
  {
    name: "David Wilson",
    role: "CTO, CloudScale",
    content:
      "A true professional who understands both the technical and business aspects of web development. Our web application has received nothing but positive feedback from our users.",
    avatar: "DW",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <p className="text-primary font-medium tracking-wide uppercase text-sm">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            What Clients Say
          </h2>
          <p className="text-muted-foreground">
            Don't just take my word for it. Here's what my clients have to say
            about working with me.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-card rounded-3xl shadow-card p-8 md:p-12">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
              <Quote className="w-6 h-6 text-primary-foreground" />
            </div>

            {/* Content */}
            <div className="pt-4">
              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
                "{testimonials[currentIndex].content}"
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className="w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center">
                    <span className="text-lg font-bold text-primary-foreground">
                      {testimonials[currentIndex].avatar}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonials[currentIndex].name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex gap-2">
                  <button
                    onClick={prevTestimonial}
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "w-8 bg-primary"
                      : "bg-border hover:bg-primary/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Modern architectural building"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-foreground/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center px-4 py-20">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-slide-up font-serif">
          Building Wealth, Protecting Assets,
          <br className="hidden sm:block" /> Managing Futures.
        </h1>
        <p className="max-w-2xl mx-auto text-xl sm:text-2xl text-primary-foreground/80 mb-10 animate-fade-in font-sans" style={{ animationDelay: "0.2s" }}>
          Your all-in-one partner for Real Estate Brokerage, Property Law,
          Construction, and Business Advisory.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Button
            variant="outline"
            size="lg"
            className="border-primary-foreground text-primary bg-primary-foreground hover:bg-primary-foreground/90 text-base w-auto"
            asChild
          >
            <Link to="/projects">View Properties</Link>
          </Button>
          <Button size="lg" className="text-base w-auto" asChild>
            <Link to="/legal-advisory">Speak to a Lawyer</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

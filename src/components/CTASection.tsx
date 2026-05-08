import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/Ayilara_2.jpeg";

const CTASection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-20"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-primary/95" />
      </div>

      <div className="relative z-10 container px-4 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-4 font-serif">
          Ready to Get Started?
        </h2>
        <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8">
          Whether you need legal counsel, property management, or construction expertise we're here to help you every step of the way.
        </p>
        <Button
          size="lg"
          variant="outline"
          className="border-primary-foreground text-primary hover:bg-primary-foreground/10 hover:text-primary text-base"
          asChild
        >
          <Link to="/contact">Contact Us Today</Link>
        </Button>
      </div>
    </section>
  );
};

export default CTASection;

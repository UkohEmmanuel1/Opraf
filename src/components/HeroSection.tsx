import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button"; 

// 1. IMPORT images
import heroBg1 from "@/assets/Opraf-hero.png";
import heroBg2 from "@/assets/Opraf-hero_1.png";
import heroBg3 from "@/assets/Opraf-hero_2.png";

const backgroundImages = [heroBg1, heroBg2, heroBg3];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 6000); // Slightly longer duration for a calmer feel

    return () => clearInterval(timer);
  }, []);

  return (
    // Changed h-screen to min-h-[100dvh] to fix mobile browser URL bar clipping
    <section className="relative w-full min-h-[100dvh] flex items-center justify-center overflow-hidden bg-black">
      
      {/* Sliding Background Images */}
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-[1500ms] ease-in-out ${
            currentIndex === index ? "opacity-100 scale-105" : "opacity-0 scale-100"
          }`}
          style={{ transitionProperty: "opacity, transform" }}
        >
          <img 
            src={image} 
            alt={`Hero Background ${index + 1}`} 
            className="w-full h-full object-cover"
          />
          {/* Enhanced Gradient Overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80"></div>
        </div>
      ))}

      {/* Hero Content */}
      <div className="relative z-10 container px-6 sm:px-8 text-center mt-12 sm:mt-0">
        {/* Scaled down base text-size for better mobile wrapping */}
        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.2] sm:leading-[1.1] mb-4 sm:mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 font-serif">
          Building Wealth, <span className="text-primary-foreground/90 block sm:inline mt-2 sm:mt-0">Protecting Assets,</span>
          <br className="hidden md:block" /> Managing Futures.
        </h1>
        
        {/* Adjusted text base size and margins for mobile */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-white/80 mb-8 sm:mb-10 px-2 sm:px-0 animate-in fade-in slide-in-from-bottom-10 delay-300 duration-1000 font-sans">
          Your all-in-one partner for Real Estate Brokerage, Property Law,
          Construction, and Business Advisory.
        </p>

        {/* Made buttons take full width on mobile for better touch targets */}
        <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-3 sm:gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-12 delay-500 duration-1000 px-4 sm:px-0">
          <Button
            variant="default"
            size="lg"
            className="w-full sm:w-auto px-8 py-6 text-base sm:text-lg min-w-[200px]"
            asChild
          >
            <Link to="/projects">View Properties</Link>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="w-full sm:w-auto px-8 py-6 text-base sm:text-lg min-w-[200px] border-white text-white hover:bg-white hover:text-black transition-colors"
            asChild
          >
            <Link to="/legal-advisory">Speak to a Lawyer</Link>
          </Button>
        </div>
      </div>

      {/* Slide Indicators - Moved up slightly for mobile safe areas */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {backgroundImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-1.5 transition-all duration-500 rounded-full ${
              currentIndex === i ? "w-8 bg-white" : "w-2 bg-white/40"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
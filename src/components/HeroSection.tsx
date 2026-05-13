import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button"; 

// 1. IMPORT images
import heroBg1 from "@/assets/OprafHero.png";
import heroBg2 from "@/assets/OprafHero_0.png";
import heroBg3 from "@/assets/Opraf_Hero.png";

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
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">
      
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60"></div>
        </div>
      ))}

      {/* Hero Content */}
      <div className="relative z-10 container px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 font-serif">
          Building Wealth, <span className="text-primary-foreground/90">Protecting Assets,</span>
          <br className="hidden md:block" /> Managing Futures.
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-white/80 mb-10 animate-in fade-in slide-in-from-bottom-10 delay-300 duration-1000 font-sans">
          Your all-in-one partner for Real Estate Brokerage, Property Law,
          Construction, and Business Advisory.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-12 delay-500 duration-1000">
          <Button
            variant="default"
            size="lg"
            className="px-8 py-6 text-lg min-w-[200px]"
            asChild
          >
            <Link to="/projects">View Properties</Link>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="px-8 py-6 text-lg min-w-[200px] border-white  hover:bg-white hover:text-black transition-colors"
            asChild
          >
            <Link to="/legal-advisory">Speak to a Lawyer</Link>
          </Button>
        </div>
      </div>

      {/* Slide Indicators (Optional but recommended for UX) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {backgroundImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-1.5 transition-all duration-500 rounded-full ${
              currentIndex === i ? "w-8 bg-white" : "w-2 bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
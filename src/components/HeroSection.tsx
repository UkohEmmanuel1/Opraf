import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
// Ensure you have this component, or replace it with a standard <button> if you don't use shadcn
import { Button } from "@/components/ui/button"; 

// 1. IMPORT the images so Vite knows to bundle them properly
import heroBg1 from "@/assets/OprafHero.png";
import heroBg2 from "@/assets/Opraf_2.png";
import heroBg3 from "@/assets/Opraf_4.png";

// 2. Put the imported variables into the array
const backgroundImages = [
  heroBg1,
  heroBg2,
  heroBg3,
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 5000ms = 5 seconds

    return () => clearInterval(timer); // Cleanup timer on unmount
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      
      {/* Sliding Background Images */}
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            currentIndex === index ? "opacity-100 z-0" : "opacity-0 -z-10"
          }`}
        >
          {/* Using an img tag instead of CSS background-image prevents Vite 404 errors */}
          <img 
            src={image} 
            alt={`Hero Background ${index + 1}`} 
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay to make the text pop */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      ))}

      {/* Hero Content (Text, Buttons) */}
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
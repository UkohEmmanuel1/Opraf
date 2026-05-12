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
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">
          Building Wealth, Protecting Assets, Managing Futures
        </h1>
        <p className="text-lg md:text-2xl mb-8 max-w-2xl drop-shadow-md">
          Your all in one partner for Real Estate Brokerage, Property Law, Construction, and Business Advisory
        </p>
        
        {/* If you are using standard HTML buttons instead of the UI component: */}
        <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 transition-colors text-white text-lg font-semibold rounded-md shadow-lg">
          View Projects
        </button>
      </div>
      
    </section>
  );
};

export default HeroSection;
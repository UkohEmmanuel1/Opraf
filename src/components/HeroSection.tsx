import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/OprafHero.png";
import React, { useState, useEffect } from 'react';

// Replace these paths with your actual asset names
const backgroundImages = [
  "@/assets/OprafHero.png",
  "@/assets/Opraf_2.png",
  "@/assets/Opraf_4.png",
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
          className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out"
          style={{
            backgroundImage: `url(${image})`,
            // If it's the current index, make it fully visible, otherwise hide it
            opacity: currentIndex === index ? 1 : 0,
          }}
        >
          {/* Optional Overlay to make text more readable */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
      ))}

      {/* Hero Content (Text, Buttons) */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">
          Building the Future
        </h1>
        <p className="text-lg md:text-2xl mb-8 max-w-2xl drop-shadow-md">
          Discover luxury residences and premium commercial spaces in the heart of Nigeria.
        </p>
        <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 transition-colors text-white text-lg font-semibold rounded-md">
          View Projects
        </button>
      </div>

      {/* Navigation Dots (Optional) */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3 z-10">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentIndex === index ? "bg-white" : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;

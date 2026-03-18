"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import FancyButton from "@/src/components/anim-button/FancyButton";

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // We target all children with the "hero-anim" class inside our ref
    // Animation 1: Fade in and slide up each item with a nice stagger
    const items = containerRef.current.querySelectorAll(".hero-anim");

    gsap.from(items, {
      y: 40,            // Start 40 pixels lower
      opacity: 0,       // Start invisible
      duration: 1.2,    // Take 1.2 seconds to finish
      stagger: 0.2,     // Wait 0.2s between each item starting
      ease: "power4.out", // Smooth, professional deceleration
      delay: 0.3        // Wait a tiny bit for the page to load
    });
  }, []);

  return (
    /* Changed from bg-black to a very light gray/white base */
    <section className="relative w-full h-162.5 flex items-center justify-center overflow-hidden bg-white">
      
      {/* LAYER 1: The Blue Blush Gradient */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(circle at 0% 50%, rgba(37, 99, 235, 0.15) 0%, transparent 40%),
            radial-gradient(circle at 100% 50%, rgba(37, 99, 235, 0.15) 0%, transparent 40%),
            radial-gradient(circle at 50% 50%, white 0%, transparent 70%)
          `
        }}
      />

      {/* LAYER 2: The Content Stack (Now with dark text for contrast) */}
      <div ref={containerRef} className="relative z-20 max-w-4xl mx-auto px-6 text-center">


        <h1 className="hero-anim text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight leading-tight">
          Scale Your Brand <br /> 
          <span className="text-brand-blue">Beyond Ordinary</span>
        </h1>

        <p className="hero-anim mt-8 text-xl text-gray-600 max-w-2xl mx-auto font-medium leading-relaxed">
          Sharp influencer strategies and precise ad campaigns designed to 
          dominate the digital landscape.
        </p>

        <div className="hero-anim mt-10 flex gap-4 justify-center flex-wrap">
          <FancyButton bgOriginal="var(--color-one)" textOriginal="#fff">
            GET STARTED NOW
          </FancyButton>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
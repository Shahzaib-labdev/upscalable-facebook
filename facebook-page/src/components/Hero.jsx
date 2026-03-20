"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowUpRight } from "lucide-react";
import FancyButton from "@/src/components/anim-button/FancyButton";

const Hero = () => {
  const containerRef = useRef(null);
  const leftArrowRef = useRef(null);
  const rightArrowRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Content Entrance
      const items = containerRef.current.querySelectorAll(".hero-anim");
      gsap.from(items, {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out",
        delay: 0.3
      });

      // 2. Arrows Entrance (Fade in)
      gsap.from([leftArrowRef.current, rightArrowRef.current], {
        opacity: 0,
        scale: 0.8,
        duration: 1.5,
        delay: 0.8,
        ease: "power3.out"
      });

      // 3. Floating Animation (The Drifting Effect)
      gsap.to([leftArrowRef.current, rightArrowRef.current], {
        y: -15,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        stagger: 0.4 // Offset the two arrows so they don't move in perfect sync
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-162.5 flex items-center justify-center overflow-hidden bg-white">
      
      {/* LAYER 1: The Blue Blush Gradient */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(circle at 0% 50%, rgba(37, 99, 235, 0.12) 0%, transparent 40%),
            radial-gradient(circle at 100% 50%, rgba(37, 99, 235, 0.12) 0%, transparent 40%)
          `
        }}
      />

      {/* LAYER 2: Background Brand Arrows */}
      {/* Left Arrow (Mirrored) */}
      <div 
        ref={leftArrowRef}
        className="absolute left-[5%] lg:left-[12%] top-[30%] z-10 opacity-10 text-gray-800 scale-x-[-1]"
      >
        <ArrowUpRight size={180} strokeWidth={1} />
      </div>

      {/* Right Arrow */}
      <div 
        ref={rightArrowRef}
        className="absolute right-[5%] lg:right-[12%] bottom-[25%] z-10 opacity-10 text-gray-800"
      >
        <ArrowUpRight size={180} strokeWidth={1} />
      </div>

      {/* LAYER 3: The Content Stack */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
        <h1 className="hero-anim text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight leading-[1.1]">
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
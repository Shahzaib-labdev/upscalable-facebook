"use client";

import React from "react";
import Image from "next/image";
import FancyButton from "@/src/components/anim-button/FancyButton";
import myImage from './images/fbook.jpg';

const Hero = () => {
  return (
    <section className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
      
      {/* LAYER 1: The Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={myImage}
          alt="Facebook Marketing Background"
          fill
          className="object-cover"
          priority
        />
        {/* LAYER 2: The Overlay (Prevents colors from meshing) */}
        <div className="absolute inset-0 bg-black/40 z-10" /> 
      </div>

      {/* LAYER 3: The Content Stack */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-2xl">
          <span className="inline-block bg-color-one px-6 py-2 rounded-lg mb-4">
            Facebook
          </span>
          <br />
          <span className="block drop-shadow-md">Marketing</span>
        </h1>

        <p className="mt-6 text-xl text-gray-100 max-w-2xl mx-auto font-medium">
          Sharp influencer strategies and precise ad campaigns that push your 
          brand past the ordinary.
        </p>

        <div className="mt-10 flex gap-4 justify-center flex-wrap">
          <FancyButton bgOriginal="#2f80ed" textOriginal="#fff">
            START SCALING
          </FancyButton>
        </div>
      </div>
    </section>
  );
};

export default Hero;
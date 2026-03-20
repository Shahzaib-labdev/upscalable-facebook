"use client";

import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Core Swiper styles
import 'swiper/css';

const partners = [
  "Nexus Digital", "Aura Analytics", "Vantage Media", 
  "Pulse Creative", "Zenith Social", "Orbit Advertising"
];

export default function Banner() {
  return (
    <div className="w-full h-12 bg-brand-blue border-y border-white/10 flex items-center overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: `
        .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}} />
      
      <Swiper
        modules={[Autoplay]}
        slidesPerView={'auto'} 
        spaceBetween={80}
        loop={true}
        speed={5000} // Increase this number to slow down the scroll
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        allowTouchMove={false} 
        className="flex items-center w-full"
      >
        {/* Triple the array to prevent "white gaps" during the loop transition */}
        {[...partners, ...partners, ...partners].map((name, index) => (
          <SwiperSlide 
            key={index} 
            className="w-auto! flex items-center justify-center"
          >
            <span className="text-white font-jetbrains font-bold text-xs tracking-[0.2em] uppercase opacity-80 hover:opacity-100 transition-opacity">
              {name}
            </span>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
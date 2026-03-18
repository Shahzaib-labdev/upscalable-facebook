'use client';

import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Core Swiper styles
import 'swiper/css';

// Dummy partner names for the carousel
const partners = [
  "Nexus Digital", "Aura Analytics", "Vantage Media", 
  "Pulse Creative", "Zenith Social", "Orbit Advertising"
];

export default function Banner() {
  return (
    <div className="w-full h-12 bg-brand-blue border-gray-100 flex items-center">
      <Swiper
        modules={[Autoplay]}
        /* Sliding Settings */
        slidesPerView={'auto'} 
        spaceBetween={50}
        loop={true}
        speed={5000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        /* This ensures the slide doesn't slow down/speed up between transitions */
        allowTouchMove={false} 
        className="flex items-center"
      >
        {/* Doubling the array to ensure there's enough content to loop without gaps */}
        {[...partners, ...partners].map((name, index) => (
          <SwiperSlide 
            key={index} 
            className="w-auto! flex items-center justify-center px-4"
          >
            <span className="text-white font-jetbrains font-bold text-sm tracking-widest uppercase">
              {name}
            </span>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
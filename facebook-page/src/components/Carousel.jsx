'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import NextImage from 'next/image';
import myImage from './images/fbook.jpg'; // Ensure this path is correct

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Carousel() {
  return (
    /* containerStyle replaced with Tailwind classes */
    <div className="w-full h-[400px] bg-black">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={800}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-full w-full" /* Replaced inline style */
      >
        {[1, 2, 3, 4, 5].map((num) => (
          /* slideStyle replaced with Tailwind flex and text classes */
          <SwiperSlide 
            key={num} 
            className="flex items-center justify-center text-center text-[18px] bg-[#444] text-white"
          >
            <NextImage 
              src={myImage} // From your previous imports
              alt={`Slide ${num}`}
              fill 
              className="object-cover"
            />
            Slide {num}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

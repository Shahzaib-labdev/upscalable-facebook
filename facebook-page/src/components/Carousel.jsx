'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import NextImage from 'next/image';
import myImage from './images/fbook.jpg';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Carousel() {
  return (
    
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
        className="h-full w-full"
      >
        {[1, 2, 3, 4, 5].map((num) => (
          <SwiperSlide 
            key={num} 
            className="flex items-center justify-center text-center text-[18px] bg-[#444] text-white"
          >
            <NextImage 
              src={myImage}
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

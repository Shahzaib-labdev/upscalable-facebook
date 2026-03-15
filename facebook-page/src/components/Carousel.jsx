'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import NextImage from 'next/image';
import myImage from './images/fbook.jpg';

// Core Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Carousel() {
  const containerStyle = {
    width: '100%',
    height: '400px',
    backgroundColor: '#000',
  };

  const slideStyle = {
    textAlign: 'center',
    fontSize: '18px',
    background: '#444',
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={containerStyle}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000, // Swipes every 1000ms (1 second)
          disableOnInteraction: false,
        }}
        speed={800} // The speed of the sliding animation itself (0.8s)
        loop={true} // Ensures the carousel doesn't stop at the last slide
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        style={{ height: '100%', width: '100%' }}
      >
        {[1, 2, 3, 4, 5].map((num) => (
          <SwiperSlide key={num} style={slideStyle} positoin="relative">
            <NextImage 
              src={myImage} // From your previous imports
              alt={`Slide ${num}`}
              fill 
              className="object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

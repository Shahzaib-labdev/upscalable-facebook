'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Core Swiper styles are still required from the node_module
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Carousel() {
  // We move the styles from styles.css into a JS object
  const containerStyle = {
    width: '100%',
    height: '400px', // Set your desired height here
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
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        style={{ height: '100%', width: '100%' }} // Inline override for Swiper container
      >
        {[1, 2, 3, 4, 5].map((num) => (
          <SwiperSlide key={num} style={slideStyle}>
            Slide {num}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
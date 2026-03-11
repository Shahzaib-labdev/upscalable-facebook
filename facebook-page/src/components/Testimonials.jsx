"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    title: "Beautifully designed &",
    highlight: "Well structured",
    text: `Fantastic template, everything is perfectly divided in section modules,
    you can mix items from any page and they work perfectly.
    Great customer support, very fast and helpful! Great quality design.`,
    name: "Richard Kindall",
    company: "Vault Mechanics",
  },
  {
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    title: "Beautifully designed &",
    highlight: "Well structured",
    text: `The flexibility of this template is amazing.
    Clean code, smooth animations and top-tier support.
    Highly recommended for serious projects.`,
    name: "Alex Morgan",
    company: "Creative Studio",
  },
];

const Testimonials = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <p className="text-sm font-jetbrains text-color-four uppercase mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl font-extrabold -tracking-[0.015em] uppercase text-color-four leading-tight">
            What our Clients{" "}
            <span className="inline-block bg-color-one uppercase text-white px-3 py-1.5 rounded-lg">
              Say About Us
            </span>
          </h2>
          <p className="max-w-2xl mx-auto mt-3 text-sm text-color-four leading-relaxed">
            Hear from our satisfied clients and discover how our services have
            transformed their businesses.
          </p>
        </div>
        <div className="relative">
          <Swiper
            modules={[Autoplay, Navigation]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            className="w-full"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide className="py-4 px-4 sm:px-6 md:px-10" key={index}>
                <div className="flex md:flex-row flex-col bg-color-one p-6 sm:p-8 md:p-10 rounded-2xl rotate-[2deg] transition-all hover:rotate-0 duration-300 hover:scale-[1.02] gap-6 md:gap-16 items-center justify-center max-w-5xl md:mx-auto mx-5">
                  {/* Image */}
                  <div className="flex justify-center md:justify-end w-full md:w-auto mb-4 md:mb-0">
                    <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 rounded-full overflow-hidden grayscale">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="max-w-xl text-center md:text-left">
                    <h2 className="text-2xl sm:text-3xl font-extrabold -tracking-[0.015em] uppercase text-white leading-tight">
                      {item.title} <br />
                      <span className="inline-block bg-color-two uppercase text-white px-3 py-1 rounded-lg text-sm sm:text-base">
                        {item.highlight}
                      </span>
                    </h2>

                    <p className="mt-4 sm:mt-6 text-white leading-relaxed text-sm sm:text-base">
                      {item.text}
                    </p>

                    <div className="mt-4 sm:mt-6">
                      <p className="text-lg sm:text-xl font-signature text-white">
                        {item.name}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-100">
                        — {item.company}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 z-10 cursor-pointer swiper-button-prev-custom">
            <ArrowLeft size={20} className="text-color-one" />
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 z-10 cursor-pointer swiper-button-next-custom">
            <ArrowRight size={20} className="text-color-one" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import FancyButton from "@/src/components/anim-button/FancyButton";

import "swiper/css";

const slides = [
  "/images/headspace.png",
  "/images/headspace.png",
  "/images/headspace.png",
];

const HomeCTA = () => {
  return (
    <section className="py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div
          className="
            relative bg-color-one text-white rounded-2xl
            transform rotate-[1deg]
            transition-all duration-300 ease-out
            hover:rotate-0 hover:scale-[1.03]
          "
        >
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 p-10 md:p-14">
            {/* LEFT CONTENT */}
            <div>
              <h2 className="text-4xl font-extrabold -tracking-[0.015em] uppercase text-white leading-tight">
                SEE WHAT WE’VE BUILT, IMAGINE WHAT WE’LL BUILD{" "}
                <span className="inline-block bg-color-two uppercase text-color-one px-3 py-1.5 rounded-lg">
                  For You
                </span>
              </h2>

              <p className="text-gray-100 mt-4 max-w-md">
                Browse real projects and real results and get inspired by what’s
                next.
              </p>

              <div className="flex gap-4 mt-8">
                <FancyButton
                  bgOriginal="#f2c94c"
                  textOriginal="#000"
                  bgHover="#f5f7fa"
                  textHover="#2b2b2b"
                >
                  Get a Consultation
                </FancyButton>
              </div>
            </div>

            {/* RIGHT SLIDER */}
            <div className="relative w-full h-[260px] md:h-[350px] rounded-xl overflow-hidden bg-black">
              {/* <Swiper
                modules={[Autoplay]}
                autoplay={{
                  delay: 700,
                  disableOnInteraction: false,
                }}
                loop
                slidesPerView={1}
                className="w-full h-full"
              >
                {slides.map((src, i) => (
                  <SwiperSlide key={i}>
                    <div className="relative w-full h-full">
                      <Image
                        src={src}
                        alt="Project preview"
                        fill
                        className="object-cover"
                        priority={i === 0}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper> */}
              <img
                className="object-cover"
                src="https://www.upscalable.co/assets/images/main-story-img.gif"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCTA;

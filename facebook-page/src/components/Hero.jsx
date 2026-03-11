"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import FancyButton from "@/src/components/anim-button/FancyButton";

const images = [
  "https://www.upscalable.co/assets/images/logo.png",
  "https://www.upscalable.co/assets/images/logo.png",
  "https://www.upscalable.co/assets/images/logo.png",
  "https://www.upscalable.co/assets/images/logo.png",
];

const Hero = () => {
  const leftRef = useRef(null);
  const col1Ref = useRef(null);
  const col2Ref = useRef(null);

  useEffect(() => {
    // LEFT CONTENT
    gsap.from(leftRef.current.children, {
      y: 30,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
      ease: "power3.out",
    });

    // VERTICAL MARQUEE
    gsap.to(col1Ref.current, {
      yPercent: -50,
      duration: 12,
      ease: "none",
      repeat: -1,
    });

    gsap.to(col2Ref.current, {
      yPercent: -50,
      duration: 16,
      ease: "none",
      repeat: -1,
    });
  }, []);

  return (
    <section className="bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:py-20 pt-24 pb-16 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT */}
        <div ref={leftRef}>
          <div className="inline-flex items-center gap-3 bg-gray-100 rounded-full px-5 py-2 mb-8 text-sm">
            <span className="w-6 h-6 bg-black rounded-full shrink-0" />
            <span>
              We helped Native Union boost ROI by{" "}
              <span className="text-color-four font-semibold">102%</span>{" "}
              <span className="text-color-one cursor-pointer">
                Case Studies
              </span>
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold">
            <span className="block">GROW BIGGER,</span>
            <span className="inline-block bg-color-one text-white px-4 py-2 rounded-lg my-3">
              MARKET SMARTER,
            </span>
            <span className="block">DRIVE CONVERSIONS.</span>
          </h1>

          <p className="mt-6 text-gray-600 max-w-xl">
            Sharp influencer strategies, smart social moves, and precise ad
            campaigns that push you past the ordinary.
          </p>

          <div className="mt-8 flex gap-4 flex-wrap">
            <FancyButton
              bgOriginal="#2f80ed"
              textOriginal="#fff"
              bgHover="#f5f7fa"
              textHover="#2b2b2b"
            >
              START SCALING
            </FancyButton>
            <FancyButton
              bgOriginal="#f2c94c"
              textOriginal="#000"
              bgHover="#f5f7fa"
              textHover="#2b2b2b"
            >
              SCHEDULE A CALL
            </FancyButton>
          </div>
        </div>

        {/* RIGHT VERTICAL MARQUEE */}
        <div className="relative h-[520px] overflow-hidden">
          <div className="grid grid-cols-2 gap-6 transform">
            {/* COLUMN 1 */}
            <div className="relative overflow-hidden">
              <div ref={col1Ref} className="space-y-6">
                {[...images, ...images].map((src, i) => (
                  <div
                    key={i}
                    className="rounded-3xl overflow-hidden shadow-xl"
                  >
                    <img
                      src={src}
                      alt="Showcase"
                      width={400}
                      className="w-full md:h-[260px] h-[220px] object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* COLUMN 2 */}
            <div className="relative overflow-hidden translate-y-16">
              <div ref={col2Ref} className="space-y-6">
                {[...images, ...images].map((src, i) => (
                  <div
                    key={i}
                    className="rounded-3xl overflow-hidden shadow-xl"
                  >
                    <img
                      src={src}
                      alt="Showcase"
                      width={400}
                      className="w-full md:h-[260px] h-[220px] object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

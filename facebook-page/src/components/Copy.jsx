"use client";

import React, { useEffect, useRef } from "react";
import NextImage from "next/image";
import { gsap } from "gsap";
import myImage from "./images/fbook.jpg"; // Ensure this path is correct
import scrollTrigger from "gsap/ScrollTrigger";

const Copy = () => {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(scrollTrigger);
    // Entrance animation for both sections
    const sections = [section1Ref.current, section2Ref.current];
    
    sections.forEach((section) => {
      if (section) {
        gsap.from(section.querySelectorAll(".anim-item"), {
          y: 40,
          opacity: 0,
          stagger: 0.2,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
          }
        });
      }
    });
  }, []);

  return (
    <div className="bg-white">
      {/* SECTION 1: Text Left, Image Right */}
      <section ref={section1Ref} className="py-16 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="anim-item">
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Why Facebook Advertising <br />
              <span className="text-blue-600">Still Wins in 2026</span>
            </h2>
            <div className="mt-8 space-y-6 antialised">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-1 bg-blue-600 rounded-full" />
                <p className="text-gray-600">
                  <strong className="text-gray-900 block">Precision Targeting</strong>
                  Reaching the demographic that mirrors your highest-value customers.
                </p>
              </div>
            
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-1 bg-blue-600 rounded-full" />
                <p className="text-gray-600">
                  <strong className="text-gray-900 block">Creative Velocity</strong>
                  Rapid testing of visual assets to identify winners before wasting budget.
                </p>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-1 bg-blue-600 rounded-full" />
                <p className="text-gray-600">
                  <strong className="text-gray-900 block">Data-Driven Attribution</strong>
                  Understanding exactly where every dollar goes and what it returns.
                </p>
              </div>
            </div>
          </div>

          <div className="anim-item relative aspect-square w-full max-w-[500px] lg:ml-auto">
            <div className="absolute inset-0 bg-blue-50 rounded-3xl -rotate-3 scale-105" />
            <div className="relative h-full w-full rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <NextImage src={myImage} alt="Marketing Strategy" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Image Left, Text Right (Zigzag) */}
      <section ref={section2Ref} className="py-16 md:py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image on the left now */}
          <div className="anim-item relative aspect-square w-full max-w-[500px] order-2 lg:order-1">
            <div className="absolute inset-0 bg-blue-100 rounded-3xl rotate-3 scale-105" />
            <div className="relative h-full w-full rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <NextImage src={myImage} alt="Creative Velocity" fill className="object-cover" />
            </div>
          </div>

          {/* Text on the right now */}
          <div className="anim-item order-1 lg:order-2">
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Our Framework: <br /> From Optimization to <br />
              <span className="text-blue-600">Domination</span>
            </h2>
            <div className="mt-8 space-y-6 antialised">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-1 bg-blue-600 rounded-full" />
                <p className="text-gray-600">
                  <strong className="text-gray-900 block">Algorithmic Optimization</strong>
                  Letting machine learning do the heavy lifting for audience refinement.
                </p>
              </div>
            
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-1 bg-blue-600 rounded-full" />
                <p className="text-gray-600">
                  <strong className="text-gray-900 block">Omnichannel Integration</strong>
                  Syncing your Facebook efforts with Instagram and Messenger for a seamless brand experience.
                </p>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-1 bg-blue-600 rounded-full" />
                <p className="text-gray-600">
                  <strong className="text-gray-900 block">ROI-First Mindset</strong>
                  Every campaign is measured by its contribution to your specific business goals, not just vanity metrics.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Copy;
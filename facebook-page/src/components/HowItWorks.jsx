"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FancyButton from "@/src/components/anim-button/FancyButton";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    step: "1",
    title: "Kick Things Off",
    text: "Book a 20-minute call with us to map out the marketing strategies that will create real traction. No fluff, just a focused action plan built for results.",
    image:
      "https://images.unsplash.com/photo-1587614203976-365c74645e83?q=80&w=1200&auto=format&fit=crop",
  },
  {
    step: "2",
    title: "Plug In and Go",
    text: "Submit your campaign needs through your dedicated Basecamp. Within a week, our marketing team starts crafting targeted messaging, outreach, and ads.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
  },
  {
    step: "3",
    title: "See Results, Stay Focused",
    text: "While we drive the campaigns and optimize performance, you stay focused on scaling the business. No bottlenecks, no wasted time, just steady, measurable growth.",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
  },
];

const HowItWorks = () => {
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // Heading animation
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          once: true,
        },
      },
    );

    // Cards animation
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          delay: index * 0.08,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            once: true,
          },
        },
      );
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-5">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-16">
          <p className="text-sm font-jetbrains text-color-four uppercase mb-3">
            How It Work
          </p>
          <h2 className="text-3xl font-extrabold -tracking-[0.015em] uppercase text-color-four leading-tight">
            Upscalable Powers Your Growth. You Focus
            <br className="hidden md:block" />{" "}
            <span className="inline-block bg-color-one uppercase text-white px-3 py-1.5 rounded-lg">
              On Winning.
            </span>{" "}
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {steps.map((item, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-white rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[230px] object-cover rounded-t-2xl"
                />

                {/* Step number */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 z-[2] bg-white rounded-full border border-black flex items-center justify-center font-semibold text-color-four shadow-[1.5px_1.5px_1px_rgb(0,0,0)]">
                  {item.step}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-xs uppercase font-jetbrains text-color-four mb-2">
                  Step {item.step}
                </p>
                <h3 className="text-lg font-extrabold text-color-four mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-color-four leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-wrap justify-center gap-4 mt-16">
          <FancyButton
            bgOriginal="#f2c94c"
            textOriginal="#000"
            bgHover="#f5f7fa"
            textHover="#2b2b2b"
          >
            Get a Consultation
          </FancyButton>

          {/* <button className="px-7 py-3 rounded-full bg-color-four text-white text-sm font-medium hover:bg-gray-800 transition">
            Chat Now
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

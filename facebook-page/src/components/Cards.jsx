"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Gauge,
  HeartHandshake,
  Sparkles,
  SlidersHorizontal,
  TrendingUp,
  Timer,
} from "lucide-react";
import FancyButton from "@/src/components/anim-button/FancyButton";

gsap.registerPlugin(ScrollTrigger);

const features = [
  { title: "Marketing That Drives Action", text: "Every campaign we build is designed to bring in real leads and business impact.", icon: Gauge },
  { title: "Audience Trust, Backed by Data", text: "With a 4.9 average review, our strategies keep audiences loyal and engaged.", icon: HeartHandshake },
  { title: "Campaigns That Stand Out", text: "We combine smart tools and creative messaging to build experiences people notice.", icon: Sparkles },
  { title: "Flexible, On Your Terms", text: "Scale up, pause, or shift focus anytime without the burden of permanent hires.", icon: SlidersHorizontal },
  { title: "Built to Fuel Growth", text: "Our clients see 40% higher customer acquisition by focusing on what truly matters.", icon: TrendingUp },
  { title: "Quick Starts, Lasting Impact", text: "Expert campaigns go live within 4–12 weeks, getting you traction without the wait.", icon: Timer },
];

const Cards = () => {
  const sectionRef = useRef(null); // Added this for the context
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Staggered Entrance for Header and Cards
      gsap.fromTo(headingRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );

      // 2. Batch animation for cards (Performance Optimized)
      const allCards = cardsRef.current.filter(Boolean);
      gsap.fromTo(allCards,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0,
          duration: 0.7, // Shrunk slightly for more "pop"
          ease: "back.out(1.5)",
          stagger: 0.08, 
          scrollTrigger: {
            trigger: headingRef.current,
            start: "bottom 85%", // Starts sooner for a snappier feel
            once: true,
          },
        }
      );
    }, sectionRef); // Scoping to sectionRef

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    /* Change background from pure white to a near-white neutral to increase contrast on hover */
    <section ref={sectionRef} className="py-24 bg-[#fcfcfc]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-16">
          <p className="text-xs font-jetbrains text-brand-blue font-bold tracking-[0.2em] uppercase mb-4">
            Quality Over Everything
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-brand-gray-dark leading-tight">
            We Deliver What {" "}
            <span className="relative inline-block text-brand-blue">
              Others Promise
              <span className="absolute -bottom-1 left-0 w-full h-0.75 bg-brand-blue/20 rounded-full" />
            </span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                /* STRONGER HOVER: 
                   1. Use a thin border default.
                   2. Hover: Change border to blue, add large colored shadow, and scale up.
                */
                className="group relative bg-white p-8 rounded-4xl border border-gray-100 transition-all duration-300 ease-out hover:border-brand-blue hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 hover:scale-[1.01]"
              >
                
                {/* 1. Icon in its own circular "Badge" */}
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-full bg-brand-gray-light text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors">
                  <Icon size={28} strokeWidth={1.5} />
                </div>

                {/* 2. Text Content */}
                <h3 className="text-xl font-extrabold text-gray-950 mb-3 tracking-tight">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-sm font-medium">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-20">
          <FancyButton bgOriginal="var(--color-one)" textOriginal="#fff">
            Get a Free Consultation
          </FancyButton>
        </div>
      </div>
    </section>
  );
};

export default Cards;
"use client";

import React, { useEffect, useRef } from "react";
import NextImage from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import myImage from "./images/fbook.jpg";

gsap.registerPlugin(ScrollTrigger);

const ZigZag = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Image "Scale-Up" Entrance
      gsap.utils.toArray(".scale-container").forEach((container) => {
        gsap.fromTo(container, 
          { scale: 0.9, opacity: 0 },
          { 
            scale: 1, 
            opacity: 1, 
            duration: 1, 
            ease: "power3.out",
            scrollTrigger: {
              trigger: container,
              start: "top 85%",
              once: true
            }
          }
        );
      });

      // 2. Text "Stagger" Entrance
      gsap.utils.toArray(".text-block").forEach((block) => {
        gsap.from(block.querySelectorAll(".anim-step"), {
          y: 30,
          opacity: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: block,
            start: "top 80%",
            once: true
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const StepItem = ({ title, desc }) => (
    <div className="anim-step flex gap-6 group">
      <div className="flex flex-col items-center">
        {/* Node: Black/White -> Blue/White on Hover */}
        <div className="w-10 h-10 shrink-0 rounded-xl bg-black flex items-center justify-center text-white group-hover:bg-brand-blue transition-colors duration-300 shadow-lg">
          <ArrowUpRight size={18} strokeWidth={2.5} />
        </div>
        <div className="w-px h-full bg-gray-100 mt-2" />
      </div>
      <div className="pb-8">
        <h4 className="font-extrabold text-gray-950 text-lg uppercase tracking-tight leading-none mb-2">
          {title}
        </h4>
        <p className="text-gray-500 text-sm font-medium leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );

  return (
    <div ref={containerRef} className="bg-white overflow-hidden">
      
      {/* SECTION 1: Text Left, Image Right */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          
          <div className="text-block">
            <p className="anim-reveal text-xs font-jetbrains text-brand-blue font-bold tracking-[0.2em] uppercase mb-4">
              Market Intelligence
            </p>
            <h2 className="anim-reveal text-4xl md:text-5xl font-extrabold tracking-tight text-brand-gray-dark leading-tight mb-8">
              Why Facebook Ads <br />
              <span className="relative inline-block text-brand-blue">
                Still Wins in 2026
                <span className="absolute -bottom-1 left-0 w-full h-0.75 bg-brand-blue/20 rounded-full" />
              </span>
            </h2>
            
            <div className="space-y-6">
              {[
                { title: "Precision Targeting", desc: "Reaching the exact demographic that mirrors your winners." },
                { title: "Creative Velocity", desc: "Identify winning assets before burning through budget." },
                { title: "ROI Attribution", desc: "Full transparency on every dollar spent and lead gained." }
              ].map((item, i) => (
                <div key={i} className="anim-reveal flex gap-5 group items-start">
                  <div className="w-10 h-10 shrink-0 rounded-xl bg-black flex items-center justify-center text-white group-hover:bg-brand-blue transition-colors duration-300 shadow-lg">
                    <ArrowUpRight size={18} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-950 text-lg tracking-tight uppercase">{item.title}</h4>
                    <p className="text-gray-500 text-sm font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="scale-container relative">
            <div className="absolute -inset-4 bg-blue-50/50 rounded-[2.5rem] blur-2xl opacity-50" />
            <div className="relative aspect-5/5 rounded-4xl overflow-hidden shadow-2xl border-8 border-white">
              <NextImage src={myImage} alt="Marketing Strategy" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Image Left, Text Right (Zigzag) */}
      <section className="py-24 bg-gray-100 relative">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          
          <div className="scale-container order-2 lg:order-1 relative">
            <div className="absolute -inset-4 bg-brand-blue/5 rounded-[2.5rem] blur-2xl opacity-50" />
            <div className="relative aspect-5/5 rounded-4xl overflow-hidden shadow-2xl border-8 border-white">
              <NextImage src={myImage} alt="Growth Strategy" fill className="object-cover" />
            </div>
          </div>

          <div className="text-block order-1 lg:order-2">
            <p className="anim-reveal text-xs font-jetbrains text-brand-blue font-bold tracking-[0.2em] uppercase mb-4">
              Our Blueprint
            </p>
            <h2 className="anim-reveal text-4xl md:text-5xl font-extrabold tracking-tight text-brand-gray-dark leading-tight mb-8">
              The Upscalable <br />
              <span className="relative inline-block text-brand-blue">
                Framework
                <span className="absolute -bottom-1 left-0 w-full h-0.75 bg-brand-blue/20 rounded-full" />
              </span>
            </h2>

            <div className="space-y-6">
              {[
                { title: "Algorithmic Optimization", desc: "Letting machine learning handle the audience heavy lifting." },
                { title: "Omnichannel Sync", desc: "Integrating FB, Instagram, and Messenger for seamless growth." },
                { title: "ROI-First Mindset", desc: "Focusing on bottom-line results over vanity metrics." }
              ].map((item, i) => (
                <div key={i} className="anim-reveal flex gap-5 group items-start">
                  <div className="w-10 h-10 shrink-0 rounded-xl bg-black flex items-center justify-center text-white group-hover:bg-brand-blue transition-colors duration-300 shadow-lg">
                    <ArrowUpRight size={18} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-950 text-lg tracking-tight uppercase">{item.title}</h4>
                    <p className="text-gray-500 text-sm font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ZigZag;
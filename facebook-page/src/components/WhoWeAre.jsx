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
  {
    title: "Marketing That Drives Action",
    text: "Every campaign we build is designed to do one thing: bring in real leads, real conversions, and real business impact, not just empty clicks.",
    icon: Gauge,
  },
  {
    title: "Audience Trust, Backed by Data",
    text: "With a 4.9 average from hundreds of client reviews, our strategies don’t just look good on paper; they keep audiences engaged and loyal.",
    icon: HeartHandshake,
  },
  {
    title: "Campaigns That Stand Out",
    text: "We combine smart tools, targeted outreach, and creative messaging to build marketing experiences people notice, remember, and act on.",
    icon: Sparkles,
  },
  {
    title: "Flexible, On Your Terms",
    text: "Our marketing retainers give you full control. Scale up, pause, or shift focus anytime, without the burden of permanent hires.",
    icon: SlidersHorizontal,
  },
  {
    title: "Built to Fuel Growth",
    text: "Our clients have seen 40% higher customer acquisition after partnering with us because we drive what matters.",
    icon: TrendingUp,
  },
  {
    title: "Quick Starts, Lasting Impact",
    text: "Our senior-level marketing experts work fast. Most campaigns go live within 4–12 weeks, getting you traction without the wait.",
    icon: Timer,
  },
];

const WhoWeAre = () => {
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
          toggleActions: "play none none none",
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
          delay: index * 0.05,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
            once: true,
          },
        },
      );
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-5">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-14">
          <p className="text-sm font-jetbrains text-color-four uppercase mb-3">
            Cheap design costs you more in the long run.
          </p>
          <h2 className="text-3xl font-extrabold -tracking-[0.015em] uppercase text-color-four leading-tight">
            We Deliver What {" "}
            <span className="inline-block bg-color-one uppercase text-white px-3 py-1.5 rounded-lg">
              Others Promise
            </span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className="bg-white rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] p-8 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="mb-5">
                  <Icon
                    size={34}
                    strokeWidth={1.5}
                    className="text-color-one"
                  />
                </div>

                <h3 className="text-lg font-semibold text-black mb-3">
                  {item.title}
                </h3>

                <p className="text-color-four leading-relaxed text-sm">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-14">
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
    </section>
  );
};

export default WhoWeAre;

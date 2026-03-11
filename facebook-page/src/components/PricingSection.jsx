"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Check } from "lucide-react";
import FancyButton from "@/src/components/anim-button/FancyButton";

gsap.registerPlugin(ScrollTrigger);

const plans = [
  {
    title: "The Good Plan",
    sections: [
      {
        heading: "Content Creation",
        items: [
          "Total 12 posts per month or 03 posts per week",
          "03 reels",
          "06 posts",
          "03 carousels",
          "04 stories and highlights (complimentary)",
        ],
      },
      {
        heading: "Platforms Supported",
        items: ["Facebook", "Instagram"],
      },
      {
        heading: "Ads Management",
        items: [
          "01 campaign per month",
          "Campaigns on all platforms",
          "01 Adset per month",
        ],
      },
      {
        heading: "Social Media Management",
        items: [
          "Account setup/optimization",
          "Monthly social post scheduling",
          "Meta Business Manager setup",
          "CRM Integration (Database Management)",
          "Cross Platform Integration (Facebook, Instagram, WhatsApp, Pixels, etc.)",
        ],
      },
      {
        heading: "Team Members",
        items: [
          "01 Dedicated Social Copywriter",
          "01 Dedicated Graphic Designer",
          "01 Dedicated Ads Expert",
          "01 Dedicated Account Manager",
        ],
      },
    ],
  },

  {
    title: "The Better Plan",
    sections: [
      {
        heading: "Content Creation",
        items: [
          "Total 16 posts per month or 03 posts per week",
          "04 reels",
          "06 posts",
          "06 carousels",
          "05 stories and highlights (complimentary)",
        ],
      },
      {
        heading: "Platforms Supported",
        items: ["Facebook", "Instagram", "LinkedIn / TikTok"],
      },
      {
        heading: "Ads Management",
        items: [
          "03 campaigns per month",
          "Campaigns on all platforms",
          "10 Adsets per month",
        ],
      },
      {
        heading: "Social Media Management",
        items: [
          "Account setup/optimization",
          "Monthly social post scheduling",
          "Meta Business Manager setup",
          "CRM Integration (Database Management)",
          "Cross Platform Integration",
        ],
      },
      {
        heading: "Team Members",
        items: [
          "02 Dedicated Social Copywriters",
          "03 Dedicated Graphic Designers",
          "02 Dedicated Ads Experts",
          "01 Dedicated Account Manager",
        ],
      },
    ],
  },

  {
    title: "The Best Plan",
    sections: [
      {
        heading: "Content Creation",
        items: [
          "Total 20 posts per month or 04 posts per week",
          "06 reels",
          "08 posts",
          "06 carousels",
          "06 stories and highlights (complimentary)",
        ],
      },
      {
        heading: "Platforms Supported",
        items: ["Facebook", "Instagram", "Twitter", "LinkedIn", "TikTok"],
      },
      {
        heading: "Ads Management",
        items: [
          "05 campaigns per month",
          "Campaigns on all platforms",
          "15 Adsets per month",
        ],
      },
      {
        heading: "Social Media Management",
        items: [
          "Account setup/optimization",
          "Monthly social post scheduling",
          "Meta Business Manager setup",
          "CRM Integration (Database Management)",
          "Cross Platform Integration",
        ],
      },
      {
        heading: "Team Members",
        items: [
          "04 Dedicated Social Copywriters",
          "04 Dedicated Graphic Designers",
          "04 Dedicated Ads Experts",
          "01 Dedicated Account Manager",
        ],
      },
    ],
  },
];

const PricingSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ".pricing-card",
      {
        y: 80,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      },
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-sm font-jetbrains text-color-four uppercase mb-3">
            PRICING
          </p>
          <h2 className="text-3xl font-extrabold -tracking-[0.015em] uppercase text-color-four leading-tight">
            SIMPLE AND{" "}
            <span className="inline-block bg-color-one uppercase text-white px-3 py-1.5 rounded-lg">
              FLEXIBLE.
            </span>
          </h2>
          <p className="max-w-2xl mx-auto mt-3 text-sm text-color-four leading-relaxed">
            <strong>No hidden contracts,</strong> no surprises.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div
              key={i}
              className="pricing-card bg-white rounded-2xl shadow-lg border border-gray-100 flex flex-col"
            >
              <div className="px-8 pt-8 pb-6 border-b border-[#cecece]">
                <h3 className="text-xl font-extrabold text-center">
                  {plan.title}
                </h3>
              </div>

              <ul className="px-4 py-6 space-y-3 mx-4 my-4 text-sm text-color-four bg-color-three overflow-auto max-h-[350px]">
                {plan.sections.map((section, idx) => (
                  <li key={idx} className="mb-5">
                    <p className="font-semibold text-black mb-2 text-center">
                      {section.heading}
                    </p>

                    <ul className="space-y-2">
                      {section.items.map((item, index) => (
                        <li key={index} className="flex gap-2">
                          <span className="font-bold text-black">
                            {" "}
                            <Check size={16} className="inline-block" />{" "}
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>

              <div className="mt-auto px-8 pb-8">
                <div className="flex justify-center gap-4">
                  <FancyButton
                    bgOriginal="#f2c94c"
                    textOriginal="#000"
                    bgHover="#f5f7fa"
                    textHover="#2b2b2b"
                  >
                    Start a New Project
                  </FancyButton>
                </div>
                <p className="text-center text-sm text-color-four font-semibold mt-3">
                  or send an email{" "}
                  <ArrowRight size={14} className="inline-block ml-1" />
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

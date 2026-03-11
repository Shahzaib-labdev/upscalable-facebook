"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    name: "Life360",
    description:
      "Increased user acquisition through targeted digital campaigns, leading to a significant rise in premium subscriptions and improved customer retention across North America and Europe.",
    image:
      "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Casper",
    description:
      "Grew online engagement ratios and CTRs by 230% in 18 months, resulting in a 450% revenue increase and a 2x increase in cart size all across North America.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Native Union",
    description:
      "Successfully helped Native Union launch their eco-friendly collection with YATAY, driving exceptional online performance and enabling the collection to surpass all previous launches.",
    image:
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Masterclass",
    description:
      "Multiplied ROI by 400% in the FY 2022–2023 for digital advertisements over search engines and social media, with continuous month-on-month growth.",
    image:
      "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=1200&auto=format&fit=crop",
  },
];

const Portfolio = () => {
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
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-5">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-16">
          <p className="text-sm font-jetbrains text-color-four uppercase mb-3">
            How We Helped Others Succeed
          </p>
          <h2 className="text-3xl font-extrabold -tracking-[0.015em] uppercase text-color-four leading-tight">
            Success That{" "}
            <span className="inline-block bg-color-one uppercase text-white px-3 py-1.5 rounded-lg">
              Speaks For Itself
            </span>
          </h2>
          <p className="max-w-2xl mx-auto mt-3 text-sm text-color-four leading-relaxed">
            Explore how Upscalable transforms bold ideas into measurable wins,
            building brands that lead, inspire, and leave a lasting mark.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((item, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-white rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] overflow-hidden"
            >
              {/* Image */}
              <div className="h-[240px] w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 className="text-lg font-semibold text-black mb-2">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

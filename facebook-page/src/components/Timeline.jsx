"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Search, PenTool, Rocket, BarChart3 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const roadmapSteps = [
  { step: "01", title: "Insight & Audit", icon: Search },
  { step: "02", title: "Creative Concepting", icon: PenTool },
  { step: "03", title: "Campaign Launch", icon: Rocket }, // Icon updated
  { step: "04", title: "Optimize & Scale", icon: BarChart3 },
];

const Timeline = () => {
  const sectionRef = useRef(null);
  const nodeRefs = useRef([]);
  const lineRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      roadmapSteps.forEach((_, index) => {
        const isLast = index === roadmapSteps.length - 1;
        
        // 1. Pop the Node
        tl.to(nodeRefs.current[index], {
          backgroundColor: "#2563eb",
          scale: 1.15,
          duration: 0.5,
          ease: "back.out(2)",
        });

        // 2. Animate the line segment to the next node
        if (!isLast) {
          tl.to(lineRefs.current[index], {
            scaleX: 1,
            duration: 0.8,
            ease: "none", // Linear speed between nodes for perfect sync
          }, "-=0.1"); // Slight overlap so the line starts just as the pop finishes
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-[#fcfcfc] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Heading Block */}
        <div className="text-center mb-16">
          <p className="text-sm font-jetbrains text-brand-blue font-bold tracking-[0.2em] uppercase mb-4">
            Our Proven Process
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-brand-gray-dark leading-tight">
            A Strategic Roadmap to <br /> 
            <span className="relative inline-block text-brand-blue">
              Dominating Facebook
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-brand-blue/20 rounded-full" />
            </span>
          </h2>
        </div>

        <div className="relative">
          {/* --- THE NODES & SEGMENTS --- */}
          <div className="relative z-20 grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-0">
            {roadmapSteps.map((item, index) => {
              const Icon = item.icon;
              const isLast = index === roadmapSteps.length - 1;

              return (
                <div key={index} className="flex flex-col items-center relative">
                  
                  {/* The Line Segment (Attached to the right of the node) */}
                  {!isLast && (
                    <div className="hidden md:block absolute top-10 left-[50%] w-full h-0.5 bg-gray-200 z-0">
                      <div 
                        ref={(el) => (lineRefs.current[index] = el)}
                        className="absolute inset-0 bg-brand-blue origin-left scale-x-0"
                      />
                    </div>
                  )}

                  {/* The Node Circle */}
                  <div 
                    ref={(el) => (nodeRefs.current[index] = el)}
                    className="w-20 h-20 rounded-full bg-black flex items-center justify-center border-4 border-white shadow-xl relative z-10"
                  >
                    <Icon className="text-white" size={30} strokeWidth={2} />
                  </div>

                  {/* Text Content */}
                  <div className="mt-8 text-center">
                    <span className="text-brand-blue font-jetbrains font-bold text-xs tracking-widest uppercase">
                      Step {item.step}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mt-2">
                      {item.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
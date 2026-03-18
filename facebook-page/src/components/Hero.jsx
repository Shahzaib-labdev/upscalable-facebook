"use client";

import FancyButton from "@/src/components/anim-button/FancyButton";

const Hero = () => {
  return (
    /* Changed from bg-black to a very light gray/white base */
    <section className="relative w-full h-150 flex items-center justify-center overflow-hidden bg-[#f8fafc]">
      
      {/* LAYER 1: The Blue Blush Gradient */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(circle at 0% 50%, rgba(37, 99, 235, 0.15) 0%, transparent 40%),
            radial-gradient(circle at 100% 50%, rgba(37, 99, 235, 0.15) 0%, transparent 40%),
            radial-gradient(circle at 50% 50%, white 0%, transparent 70%)
          `
        }}
      />

      {/* LAYER 2: The Content Stack (Now with dark text for contrast) */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900">
          <span className="inline-block bg-brand-blue text-white px-6 py-2 rounded-2xl mb-6 shadow-lg shadow-blue-200">
            Facebook Marketing
          </span>
          <br />
          <span className="block text-gray-800 tracking-tight">
            Scale Beyond Ordinary
          </span>
        </h1>

        <p className="mt-8 text-xl text-gray-600 max-w-2xl mx-auto font-medium leading-relaxed">
          Sharp influencer strategies and precise ad campaigns that push your 
          brand past the ordinary.
        </p>

        <div className="mt-10 flex gap-4 justify-center flex-wrap">
          <FancyButton bgOriginal="var(--color-one)" textOriginal="#fff">
            START SCALING
          </FancyButton>
        </div>
      </div>
    </section>
  );
};

export default Hero;
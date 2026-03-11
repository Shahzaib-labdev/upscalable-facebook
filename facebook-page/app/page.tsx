import React from "react";
import Header from "@/src/components/Header";
import Hero from "@/src/components/Hero";
import WhoWeAre from "@/src/components/WhoWeAre";
import HowItWorks from "@/src/components/HowItWorks";
import Portfolio from "@/src/components/Portfolio";
import HomeCTA from "@/src/components/HomeCTA";
import PricingSection from "@/src/components/PricingSection";
import Testimonials from "@/src/components/Testimonials";

const Home = () => {
  return (
    <main>
      <Header />
      <Hero />
      <WhoWeAre />
      <HowItWorks />
      <Portfolio />
      <HomeCTA />
      <PricingSection />
      <Testimonials />
    </main>
  );
};

export default Home;

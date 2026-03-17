import React from "react";
import Header from "@/src/components/Header";
import Hero from "@/src/components/Hero";
import Copy from "@/src/components/Copy";
import Carousel from "@/src/components/Carousel";
import WhoWeAre from "@/src/components/WhoWeAre";
import PricingSection from "@/src/components/PricingSection";
import Testimonials from "@/src/components/Testimonials";

const Home = () => {
  return (
    <main>
      <Header />
      <Hero />
      <Copy />
      <Carousel />
      <WhoWeAre />
    </main>
  );
};

export default Home;

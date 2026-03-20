import Header from "@/src/components/Header";
import Hero from "@/src/components/Hero";
import Banner from "@/src/components/Banner";
import ZigZag from "@/src/components/ZigZag";
import Timeline from "@/src/components/Timeline";
import Cards from "@/src/components/Cards";

const Home = () => {
  return (
    <main>
      <Header />
      <Hero />
      <Banner />
      <ZigZag />
      <Timeline />
      <Cards />
    </main>
  );
};

export default Home;

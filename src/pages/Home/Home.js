import React from "react";
import ParallaxSection from "../../components/ParallaxSection/ParallaxSection";
import MobileFeatured from "../../components/MobileFeatured";
import ProductCard from "../../components/ProductCard/ProductCard";
import HeroSection from "../../components/HeroSection/HeroSection";
const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <ProductCard />
      <ParallaxSection />
      <MobileFeatured />
    </div>
  );
};

export default Home;

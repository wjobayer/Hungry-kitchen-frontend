import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import MobileFeatured from "../../components/MobileFeatured";
import ProductCard from "../../components/ProductCard/ProductCard";
const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <ProductCard />
      <MobileFeatured />
    </div>
  );
};

export default Home;

import React from "react";
import ParallaxSection from "../../components/ParallaxSection/ParallaxSection";
import MobileFeatured from "../../components/MobileFeatured";
import ProductCard from "../../components/ProductCard/ProductCard";
import HeroSection from "../../components/HeroSection/HeroSection";
import PartnerSection from "../../components/PartnerSection/PartnerSection";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <ProductCard />
      <ParallaxSection />
      <PartnerSection />
      <NewsLetter />
      <MobileFeatured />
    </div>
  );
};

export default Home;

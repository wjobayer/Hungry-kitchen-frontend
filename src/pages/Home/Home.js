import React from "react";
import ParallaxSection from "../../components/ParallaxSection/ParallaxSection";
import MobileFeatured from "../../components/MobileFeatured";
import ProductCard from "../../components/ProductCard/ProductCard";
const Home = () => {
  return (
    <div>
      <ProductCard />
      <ParallaxSection />
      <MobileFeatured />
    </div>
  );
};

export default Home;

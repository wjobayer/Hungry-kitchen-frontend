import React from "react";
import ParallaxSection from "../../components/ParallaxSection/ParallaxSection";
import MobileFeatured from "../../components/MobileFeatured";
import ProductCard from "../../components/ProductCard/ProductCard";
import HeroSection from "../../components/HeroSection/HeroSection";
import PartnerSection from "../../components/PartnerSection/PartnerSection";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import ReactSlick from "../../components/ReactSlick/ReactSlick";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
const Home = () => {
  return (
    <div>
      <Header></Header>
      <HeroSection></HeroSection>
      <ProductCard />
      <ParallaxSection />
      <PartnerSection />
      <NewsLetter />
      <MobileFeatured />
      <ReactSlick></ReactSlick>
      <Footer></Footer>
    </div>
  );
};

export default Home;

import React from "react";
import Footer from "../../common/Footer";
import Header from "../../common/Header";
import FoodTime from "../../components/FoodTime/FoodTime";
import HeroSection from "../../components/HeroSection/HeroSection";
import HomePageOffer from "../../components/HomePageOffer";
import LatestFoods from "../../components/LatestFoods";
import MobileFeatured from "../../components/MobileFeatured";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import ParallaxSection from "../../components/ParallaxSection/ParallaxSection";
import PartnerSection from "../../components/PartnerSection/PartnerSection";
import ProductCard from "../../components/ProductCard/ProductCard";
import ReactSlick from "../../components/ReactSlick/ReactSlick";
// import PopularResturants from "../../components/PopularResturants/PopularResturants";
import ResturantSlider from "../../components/ResturantSlider/ResturantSlider";
import useFirebase from "../../Hooks/useFirebase";
const Home = () => {
  const { role } = useFirebase();
  console.log("my role of the website:" + role);
  return (
    <div>
      <Header></Header>

      <HeroSection></HeroSection>
      <HomePageOffer />
      {/* <OfferModal /> */}
      <ResturantSlider />
      <FoodTime />

      {/* <PopularResturants /> */}
      <ProductCard />
      <ParallaxSection />
      <PartnerSection />
      <NewsLetter />
      <MobileFeatured />
      <LatestFoods />
      <ReactSlick />
      <Footer />
    </div>
  );
};

export default Home;
import React from "react";
import Footer from "../common/Footer";
import HeaderBlack from "../common/HeaderBlack";
import AboutUs from "../components/AboutUs/AboutUs";
import OurChefs from "../components/AboutUs/OurChefs";
import ReviewContent from "../components/Review/ReviewContent";

const AboutPage = () => {
  return (
    <>
      <HeaderBlack />
      <AboutUs />
      <OurChefs />
      <ReviewContent />
      <Footer />
    </>
  );
};

export default AboutPage;

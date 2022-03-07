import React from "react";
import Footer from "../common/Footer";
import HeaderBlack from "../common/HeaderBlack";
import AboutUs from "../components/AboutUs/AboutUs";
import OurChefs from "../components/AboutUs/OurChefs";
import ReactSlick from "../components/ReactSlick/ReactSlick";

const AboutPage = () => {
  return (
    <>
      <HeaderBlack />
      <AboutUs />
      <OurChefs />
      <ReactSlick />
      <Footer />
    </>
  );
};

export default AboutPage;

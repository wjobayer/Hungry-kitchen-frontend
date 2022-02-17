import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./common/Footer";
import Header from "./common/Header";
import CourierForm from "./components/PartnerSection/CourierForm";
import Home from "./pages/Home/Home";

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="courierForm" element={<CourierForm />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;

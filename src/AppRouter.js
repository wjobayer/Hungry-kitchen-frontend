import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./common/Footer";
import Header from "./common/Header";
import FoodCategories from "./components/FoodCategories/FoodCategories";
import FoodDetails from "./components/FoodDetails/FoodDetails";
import Home from "./pages/Home/Home";
import CourierPartner from "./pages/CourierPartner/CourierPartner";
import ResturantPartner from "./pages/ResturantPartner/ResturantPartner";

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<FoodDetails />} />
        <Route path="/courierpartner" element={<CourierPartner />} />
        <Route path="/resturantpartner" element={<ResturantPartner />} />
        <Route path="/details/:id" element={<FoodDetails />} />
        <Route path="category" element={<FoodCategories />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;

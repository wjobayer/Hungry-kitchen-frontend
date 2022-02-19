import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./common/Footer";
import Header from "./common/Header";
import CourierForm from "./components/PartnerSection/CourierForm";
import RestaurantForm from "./components/PartnerSection/RestaurantForm";
import FoodCategories from "./components/FoodCategories/FoodCategories";
import FoodDetails from "./components/FoodDetails/FoodDetails";
import Home from "./pages/Home/Home";
import Sidebar from '../src/components/Sidebar';
import Dashboard from '../src/pages/Dashboard';
import Settings from '../src/pages/Settings';
import Tables from '../src/pages/Tables';
import Maps from '../src/pages/Maps';
import DashboardMain from "./pages/DashboardMain";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="courierForm" element={<CourierForm />} />
        <Route path="restaurantForm" element={<RestaurantForm />} />
        <Route path="/home" element={<Home />} />
        <Route path="details" element={<FoodDetails />} />
        <Route path="details/:id" element={<FoodDetails />} />
        {/* <Sidebar /> */}
        <Route path="/dashboard/*" element={<DashboardMain/>} />
        <Route path="/" element={<Dashboard/>} />
        <Route path="/settings" element={<Settings/>} />
        <Route path="/tables" element={<Tables/>} />
        <Route path="/maps" element={<Maps/>} />
        <Route path="category" element={<FoodCategories />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;

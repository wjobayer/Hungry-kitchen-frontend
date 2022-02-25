import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FoodCategories from "./components/FoodCategories/FoodCategories";
import FoodDetails from "./components/FoodDetails/FoodDetails";
import Home from "./pages/Home/Home";
import Login from "./pages/LoginRegister/Login";
import Register from "./pages/LoginRegister/Register";
// import Sidebar from "../src/components/Sidebar";
import Dashboard from "../src/pages/Dashboard";
import Settings from "../src/pages/Settings";
import Tables from "../src/pages/Tables";
import Maps from "../src/pages/Maps";
import DashboardMain from "./pages/DashboardMain";
import AddFood from "./components/AddFood/AddFood";
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<FoodDetails />} />
        <Route path="/addFood" element={<AddFood />} />
        {/* <Route path="/courierpartner" element={<CourierPartner />} />
        <Route path="/resturantpartner" element={<ResturantPartner />} /> */}
        <Route path="/details/:id" element={<FoodDetails />} />
        <Route path="/home" element={<Home />} />
        <Route path="/details" element={<FoodDetails />} />
        <Route path="/details/:id" element={<FoodDetails />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* <Sidebar /> */}
        <Route path="/dashboard/*" element={<DashboardMain />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/tables" element={<Tables />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="category" element={<FoodCategories />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;

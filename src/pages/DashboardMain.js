import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Settings from "../pages/Settings";
import Maps from "../pages/Maps";
import Tables from "../pages/Tables";
import Dashboard from "./Dashboard";
import Footer from "../common/Footer";
import AddFood from "../components/AddFood/AddFood";
import Rider from "../pages/Rider";

// Tailwind CSS Style Sheet
import "../assets/styles/tailwind.css";
import UserProfile from "./UserProfile";
import RiderProfile from "./RiderProfile";
const DashboardMain = () => {
  return (
    <div>
      <Sidebar></Sidebar>
      <div className="md:ml-64">
        <Routes>
          <Route path="settings" element={<Settings></Settings>} />
          <Route path="rider" element={<Rider></Rider>} />
          <Route path="addFood" element={<AddFood></AddFood>} />
          <Route path="tables" element={<Tables></Tables>} />
          <Route path="maps" element={<Maps></Maps>} />
          <Route path="userProfile" element={<UserProfile />} />
          <Route path="riderProfile" element={<RiderProfile />} />
          <Route path="/" element={<Dashboard></Dashboard>} />
        </Routes>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default DashboardMain;

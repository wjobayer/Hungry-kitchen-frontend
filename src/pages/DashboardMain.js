import React from "react";
import { Route, Routes } from "react-router-dom";
// Tailwind CSS Style Sheet
import "../assets/styles/tailwind.css";
import Footer from "../common/Footer";
import AddFood from "../components/AddFood/AddFood";
import Sidebar from "../components/Sidebar";
import UpdateFood from "../components/UpdateFood/UpdateFood";
import Maps from "../pages/Maps";
import Rider from "../pages/Rider";
import Settings from "../pages/Settings";
import Tables from "../pages/Tables";
import Dashboard from "./Dashboard";
import MakeAdmin from "./MakeAdmin";
import RiderProfile from "./RiderProfile";
import UserProfile from "./UserProfile";



const DashboardMain = () => {
  return (
    <div>
      <Sidebar></Sidebar>
      <div className="md:ml-64">
        <Routes>
            <Route path='settings' element={<Settings></Settings>}/>
            <Route path='rider' element={<Rider></Rider>}/>
            <Route path='addFood' element={<AddFood></AddFood>}/>
            <Route path='addFood/:id' element={<UpdateFood></UpdateFood>}/>
            <Route path='tables' element={<Tables></Tables>}/>
            <Route path='maps' element={<Maps></Maps>}/>
            <Route path="userProfile" element={<UserProfile />} />
            <Route path="riderProfile" element={<RiderProfile />} />
            <Route path='admin' element={<MakeAdmin></MakeAdmin>}/>
            <Route path='/' element={<Dashboard></Dashboard>}/>
        </Routes>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default DashboardMain;

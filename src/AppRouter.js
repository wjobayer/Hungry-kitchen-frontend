import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./common/Footer";
import Header from "./common/Header";
import FoodCategories from "./components/FoodCategories/FoodCategories";
import FoodDetails from "./components/FoodDetails/FoodDetails";
import Home from "./pages/Home/Home";
<<<<<<< HEAD
import Login from "./pages/LoginRegister/Login";
import Register from "./pages/LoginRegister/Register";
=======
import Sidebar from '../src/components/Sidebar';
import Dashboard from '../src/pages/Dashboard';
import Settings from '../src/pages/Settings';
import Tables from '../src/pages/Tables';
import Maps from '../src/pages/Maps';
import DashboardMain from "./pages/DashboardMain";
>>>>>>> 187030addb4a21eacab85131a0a12c80416dc0fd

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="details" element={<FoodDetails />} />
        <Route path="details/:id" element={<FoodDetails />} />
<<<<<<< HEAD
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
=======
        {/* <Sidebar /> */}
        <Route path="/dashboard/*" element={<DashboardMain/>} />
        <Route path="/" element={<Dashboard/>} />
        <Route path="/settings" element={<Settings/>} />
        <Route path="/tables" element={<Tables/>} />
        <Route path="/maps" element={<Maps/>} />
        <Route path="category" element={<FoodCategories />} />
>>>>>>> 187030addb4a21eacab85131a0a12c80416dc0fd
      </Routes>
    </Router>
  );
};

export default AppRouter;

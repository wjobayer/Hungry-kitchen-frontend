import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "../src/pages/Dashboard";
import Maps from "../src/pages/Maps";
import Settings from "../src/pages/Settings";
import Tables from "../src/pages/Tables";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
// import Footer from "./common/Footer";
// import Header from "./common/Header";
import FoodCategories from "./components/FoodCategories/FoodCategories";
import FoodDetails from "./components/FoodDetails/FoodDetails";
import NotFound from "./components/NotFound/NotFound";
import SearchResult from "./components/SearchResult";
import TestCompo from "./components/TestCompo";
import DashboardMain from "./pages/DashboardMain";
import Home from "./pages/Home/Home";
import Login from "./pages/LoginRegister/Login";
import Register from "./pages/LoginRegister/Register";
import Rider from "./pages/Rider";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
// import Sidebar from '../src/components/Sidebar';
// import CourierForm from "./components/PartnerSection/CourierForm";
// import RestaurantForm from "./components/PartnerSection/RestaurantForm";
// // import ReviewPage from "./pages/ReviewPage";
import AboutPage from "./pages/AboutPage";
// // import UserProfile from "./pages/UserProfile";
// import PopularResturants from "./components/PopularResturants/PopularResturants";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/details" element={<FoodDetails />} />
        <Route path="/details/:id" element={<FoodDetails />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* <Route path="/search" element={<Srch />} /> */}
        <Route path="/search" element={<SearchResult />} />
        <Route path="/search/:searchText" element={<SearchResult />} />
        <Route path="/about" element={<AboutUs />} />
        <Route
          path="/contact"
          element={
            <PrivateRoute>
              <ContactUs />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
        {/* <Sidebar /> */}

        <Route path="/test" element={<TestCompo />} />
        <Route path="/dashboard/*" element={<DashboardMain />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/rider" element={<Rider />} />
        <Route path="/tables" element={<Tables />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="/category/:mealTime" element={<FoodCategories />} />
        <Route path="category" element={<FoodCategories />} />
        {/* <Route path="/reviewPage" element={<ReviewPage />} /> */}
        <Route path="/aboutPage" element={<AboutPage />} />
        {/* <Route path="/userProfile" element={<UserProfile />} /> */}
      </Routes>
    </Router>
  );
};

export default AppRouter;

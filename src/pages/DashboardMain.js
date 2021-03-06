import React from 'react';
import { Route, Routes } from 'react-router-dom';
// Tailwind CSS Style Sheet
import '../assets/styles/tailwind.css';
import Footer from '../common/Footer';
import AddFood from "../components/AddFood/AddFood";
import Sidebar from '../components/Sidebar';
import Maps from '../pages/Maps';
import Rider from "../pages/Rider";
import Settings from '../pages/Settings';
import Tables from '../pages/Tables';
import Dashboard from './Dashboard';

const DashboardMain = () => {
    return (
        <div>
        <Sidebar></Sidebar>
        <div className="md:ml-64">
        <Routes>
            <Route path='settings' element={<Settings></Settings>}/>
            <Route path='rider' element={<Rider></Rider>}/>
            <Route path='addFood' element={<AddFood></AddFood>}/>
            <Route path='tables' element={<Tables></Tables>}/>
            <Route path='maps' element={<Maps></Maps>}/>
            <Route path='riderprofile' element={<Maps></Maps>}/>
            <Route path='userprofile' element={<Maps></Maps>}/>
            <Route path='/' element={<Dashboard></Dashboard>}/>
        </Routes>
        <Footer></Footer>
        </div>
        </div>
    );
};

export default DashboardMain;
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import AdminNavbar from '../components/AdminNavbar';
import {MdDashboard} from 'react-icons/md';
import {AiOutlineLogin,AiFillSetting} from 'react-icons/ai';
import {BsTable} from 'react-icons/bs';
import {FaPager,FaMapMarkedAlt} from 'react-icons/fa';
import {GiArchiveRegister} from 'react-icons/gi';
import {CgProfile} from 'react-icons/cg';

import H6 from '@material-tailwind/react/Heading6';

export default function Sidebar() {
    const [showSidebar, setShowSidebar] = useState('-left-64');
    return (
        <>
            <AdminNavbar
                showSidebar={showSidebar}
                setShowSidebar={setShowSidebar}
            />
            <div
                className={`h-screen fixed top-0 md:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-white w-64 z-10 py-4 px-6 transition-all duration-300`}
            >
                <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
                <NavLink
                                    to="/dashboard"
                                    exact
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                > <H6 color="gray"><img src="https://i.ibb.co/1sSL7XT/mainLogo.png" alt="" /></H6>
                                </NavLink>
                    <div className="flex flex-col">
                        <hr className="my-4 min-w-full" />

                        <ul className="flex-col min-w-full flex list-none">
                            <li className="rounded-lg ">
                                <NavLink
                                    to="/dashboard"
                                    exact
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                > <MdDashboard />dashboard
                                </NavLink>
                            </li>
                            <li className="rounded-lg ">
                                <NavLink
                                    to="/dashboard/settings"
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                    <AiFillSetting/>
                                    Settings
                                </NavLink>
                            </li>
                            <li className="rounded-lg  ">
                                <NavLink
                                    to="/dashboard/tables"
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                    <BsTable/>
                                    Tables
                                </NavLink>
                            </li>
                            <li className="rounded-lg  text-gray-700">
                                <NavLink
                                    to="/dashboard/maps"
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                    <FaMapMarkedAlt/>
                                    Maps
                                </NavLink>
                            </li>
                            <li className="rounded-lg  text-gray-700">
                                <NavLink
                                    to="/dashboard/maps"
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                    <AiOutlineLogin/>
                                    Login
                                </NavLink>
                            </li>
                            <li className="rounded-lg  text-gray-700">
                                <NavLink
                                    to="/dashboard/maps"
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                     <GiArchiveRegister/>
                                    Register
                                </NavLink>
                            </li>
                            <li className="rounded-lg  text-gray-700">
                                <NavLink
                                    to="/dashboard/maps"
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                    <FaPager/>
                                    Landing Page
                                </NavLink>
                            </li>
                            <li className="rounded-lg  text-gray-700">
                                <NavLink
                                    to="/dashboard/maps"
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                    <CgProfile/>
                                    Profile Page
                                </NavLink>
                            </li>
                        </ul>

                        <ul className="flex-col min-w-full flex list-none absolute bottom-0">
                            <li className="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 px-4 rounded-lg text-white mb-2">
                            <NavLink
                                    to="/dashboard/maps"
                                    className="flex items-center justify-center gap-4 text-sm font-light py-3"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >About Us
                                </NavLink>
                            </li>
                            <li className="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 px-4 rounded-lg text-white mb-2 ">
                            <NavLink
                                    to="/dashboard/maps"
                                    className="flex items-center justify-center gap-4 text-sm font-light py-3"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                    
                                    Get Our Apps
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

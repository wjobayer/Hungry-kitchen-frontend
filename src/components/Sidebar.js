import H6 from "@material-tailwind/react/Heading6";
import { useState } from "react";
import { AiFillSetting } from "react-icons/ai";
import { BsTable } from "react-icons/bs";
import { FaMapMarkedAlt } from "react-icons/fa";
import { GiArchiveRegister } from "react-icons/gi";
import { IoFastFoodOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { MdDashboard, MdDeliveryDining } from "react-icons/md";
import { NavLink } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";

export default function Sidebar() {
  const [color, setColor] = useState("restaurant");
  const [showSidebar, setShowSidebar] = useState("-left-64");
  const handleFilter = (index) => {
    setColor(index);
  };
  return (
    <>
      <AdminNavbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div
        className={`h-screen fixed top-0 md:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-white w-64 z-10 py-4 px-6 transition-all duration-300`}
      >
        <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
          <NavLink
            to="/dashboard"
            exact
            className="flex items-center gap-4 text-xl text-gray-700 font-light px-4 py-3 rounded-lg"
            activeclassname="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
          >
            {" "}
            <H6 color="gray">
              <img src="https://i.ibb.co/1sSL7XT/mainLogo.png" alt="" />
            </H6>
          </NavLink>
          <div className="flex flex-col">
            <hr className="my-4 min-w-full" />

            <ul className="flex-col min-w-full flex list-none">
              <li className="rounded-lg ">
                <NavLink
                  to="/dashboard"
                  exact
                  className={
                    color === "restaurant"
                      ? "flex items-center gap-4 text-xl text-white font-light px-4 py-3 rounded-lg bg-blue-500 outline-none ring ring-violet-300"
                      : "flex items-center gap-4 text-xl text-black font-light px-4 py-3 rounded-lg "
                  }
                  onClick={() => handleFilter("restaurant")}
                >
                  {" "}
                  <MdDashboard />
                  Restaurant
                </NavLink>
              </li>
              <li className="rounded-lg ">
                <NavLink
                  to="/dashboard/rider"
                  exact
                  className={
                    color === "rider"
                      ? "flex items-center gap-4 text-xl text-white font-light px-4 py-3 rounded-lg bg-blue-500 outline-none ring ring-violet-300"
                      : "flex items-center gap-4 text-xl text-black font-light px-4 py-3 rounded-lg "
                  }
                  onClick={() => handleFilter("rider")}
                >
                  {" "}
                  <MdDeliveryDining />
                  Rider
                </NavLink>
              </li>
              <li className="rounded-lg ">
                <NavLink
                  to="/dashboard/admin"
                  exact
                  className={
                    color === "admin"
                      ? "flex items-center gap-4 text-xl text-white font-light px-4 py-3 rounded-lg bg-blue-500 outline-none ring ring-violet-300"
                      : "flex items-center gap-4 text-xl text-black font-light px-4 py-3 rounded-lg "
                  }
                  onClick={() => handleFilter("admin")}
                >
                  {" "}
                  <AiOutlineUser />
                  Make Admin
                </NavLink>
              </li>

              <li className="rounded-lg ">
                <NavLink
                  to="/dashboard/userProfile"
                  className={
                    color === "userProfile"
                      ? "flex items-center gap-4 text-xl text-white font-light px-4 py-3 rounded-lg bg-blue-500 outline-none ring ring-violet-300"
                      : "flex items-center gap-4 text-xl text-black font-light px-4 py-3 rounded-lg "
                  }
                  onClick={() => handleFilter("userProfile")}
                >
                  <AiFillSetting />
                  User Profile
                </NavLink>
              </li>
              <li className="rounded-lg ">
                <NavLink
                  to="/dashboard/settings"
                  className={
                    color === "settings"
                      ? "flex items-center gap-4 text-xl text-white font-light px-4 py-3 rounded-lg bg-blue-500 outline-none ring ring-violet-300"
                      : "flex items-center gap-4 text-xl text-black font-light px-4 py-3 rounded-lg "
                  }
                  onClick={() => handleFilter("settings")}
                >
                  <AiFillSetting />
                  Rest.. Profile
                </NavLink>
              </li>
              <li className="rounded-lg ">
                <NavLink
                  to="/dashboard/riderProfile"
                  className={
                    color === "riderProfile"
                      ? "flex items-center gap-4 text-xl text-white font-light px-4 py-3 rounded-lg bg-blue-500 outline-none ring ring-violet-300"
                      : "flex items-center gap-4 text-xl text-black font-light px-4 py-3 rounded-lg "
                  }
                  onClick={() => handleFilter("riderProfile")}
                >
                  <AiFillSetting />
                  Rider Profile
                </NavLink>
              </li>
              <li className="rounded-lg  ">
                <NavLink
                  to="/dashboard/tables"
                  className={
                    color === "foodMenu"
                      ? "flex items-center gap-4 text-xl text-white font-light px-4 py-3 rounded-lg bg-blue-500 outline-none ring ring-violet-300"
                      : "flex items-center gap-4 text-xl text-black font-light px-4 py-3 rounded-lg "
                  }
                  onClick={() => handleFilter("foodMenu")}
                >
                  <BsTable />
                  Food Menu
                </NavLink>
              </li>
              <li className="rounded-lg  text-gray-700">
                <NavLink
                  to="/dashboard/maps"
                  className={
                    color === "maps"
                      ? "flex items-center gap-4 text-xl text-white font-light px-4 py-3 rounded-lg bg-blue-500 outline-none ring ring-violet-300"
                      : "flex items-center gap-4 text-xl text-black font-light px-4 py-3 rounded-lg "
                  }
                  onClick={() => handleFilter("maps")}
                >
                  <FaMapMarkedAlt />
                  Maps
                </NavLink>
              </li>
              <li className="rounded-lg  text-gray-700">
                <NavLink
                  to="/dashboard/addFood"
                  className={
                    color === "addFood"
                      ? "flex items-center gap-4 text-xl text-white font-light px-4 py-3 rounded-lg bg-blue-500 outline-none ring ring-violet-300"
                      : "flex items-center gap-4 text-xl text-black font-light px-4 py-3 rounded-lg "
                  }
                  onClick={() => handleFilter("addFood")}
                >
                  <IoFastFoodOutline />
                  Add Food
                </NavLink>
              </li>
              <li className="rounded-lg  text-gray-700">
                <NavLink
                  to="/dashboard/maps"
                  className={
                    color === "register"
                      ? "flex items-center gap-4 text-xl text-white font-light px-4 py-3 rounded-lg bg-blue-500 outline-none ring ring-violet-300"
                      : "flex items-center gap-4 text-xl text-black font-light px-4 py-3 rounded-lg "
                  }
                  onClick={() => handleFilter("register")}
                >
                  <GiArchiveRegister />
                  Register
                </NavLink>
              </li>
            </ul>

            <ul className="flex-col min-w-full flex list-none absolute bottom-0">
              <li className="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 px-4 rounded-lg text-white mb-2">
                <NavLink
                  to="/dashboard/maps"
                  className="flex items-center justify-center gap-4 text-xl font-light py-3"
                  activeclassname="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                >
                  About Us
                </NavLink>
              </li>
              <li className="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 px-4 rounded-lg text-white mb-2 ">
                <NavLink
                  to="/dashboard/maps"
                  className="flex items-center justify-center gap-4 text-xl font-light py-3"
                  activeclassname="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
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

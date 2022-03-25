import H6 from "@material-tailwind/react/Heading6";
import { useEffect, useState } from "react";
import { AiFillSetting, AiOutlineUser } from "react-icons/ai";
import { BiHome, BiLogOutCircle } from "react-icons/bi";
import { BsTable } from "react-icons/bs";
import { FaMapMarkedAlt } from "react-icons/fa";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdDashboard, MdDeliveryDining } from "react-icons/md";
import { Link, NavLink, useNavigate } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";
import useFirebase from "../Hooks/useFirebase";

export default function Sidebar() {
  const { role } = useFirebase();
  const [admin, setAdmin] = useState([]);

  const { user } = useFirebase();

  useEffect(() => {
    fetch(`https://hungry-kitchen-app.herokuapp.com/users`)
      .then((res) => res.json())
      .then((data) => {
        setAdmin(data);
      });
  }, []);

  const userData = admin?.filter((td) => td?.email === user?.email);
  const usersData = userData[0];

  const { logout } = useFirebase();
  const navigate = useNavigate();
  const logoutClickHandler = () => {
    logout();
    navigate("/");
  };

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
            to="/"
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

            {usersData?.role === "admin" ? (
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
              </ul>
            ) : (
              <ul className="flex-col min-w-full flex list-none">
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
              </ul>
            )}

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
            <div className="justify-center pt-20 mt-20 border-t-2 logout__wrapper">
              <Link to="/">
                <button className="flex px-8 py-2 mx-auto mb-4 text-white rounded bg-blue-600">
                  <BiHome
                    className="w-5 h-5 mr-2 text-white"
                    aria-hidden="true"
                  />
                  Home
                </button>
              </Link>

              <button
                className="flex px-8 py-2 mx-auto text-white bg-red-600 rounded"
                onClick={logoutClickHandler}
              >
                <BiLogOutCircle
                  className="w-5 h-5 mr-2 text-white"
                  aria-hidden="true"
                />
                Log out
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

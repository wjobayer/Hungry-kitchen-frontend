import { Menu, Transition } from "@headlessui/react";
import React from "react";
import { AiOutlineBell, AiOutlineShoppingCart } from "react-icons/ai";
import { FaHamburger } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import useFirebase from "../Hooks/useFirebase";
import Drawer from "./Drawer";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const addToCart = useSelector((state) => state.addToCart);
  const { user, admin, isLoading, authError, registerUser, loginUser, logout } =
    useFirebase();
  console.log(user.email);

  return (
    <div className="header">
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3  mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <NavLink
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-black"
              to="/"
            >
              <img
                src="https://i.ibb.co/4MHt1jq/Untitled-design-3-removebg-preview.png"
                className="text-white"
                alt=""
                srcSet=""
              />
            </NavLink>
            <button
              className="text-orange-500 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FaHamburger />
            </button>
          </div>

          <div
            className={
              "heroSection1 lg:flex flex-grow items-center sm:p-5 rounded-sm" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto items-center">
              <li className="nav-item">
                <NavLink
                  to="/dashboard"
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                >
                  <span className="ml-2">Home</span>
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/dashboard"
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                >
                  <span className="ml-2">All Items</span>
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/dashboard"
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                >
                  <span className="ml-2">All Restaurant</span>
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/dashboard"
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                >
                  <span className="ml-2">Restaurant Search</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <button
                  className=" text-white rounded px-2 py-1"
                  onClick={() => setIsOpen(true)}
                >
                  <span className="text-2xl">
                    <AiOutlineShoppingCart />
                  </span>
                </button>
                <span className="text-white align-top ">
                  {addToCart.length}{" "}
                </span>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/cart"
                  className="px-3 py-2 flex items-center font-bold leading-snug text-white hover:opacity-75"
                  activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 shadow-md"
                >
                  <span className="text-2xl ">
                    <AiOutlineBell />
                  </span>
                </NavLink>
              </li>

              <li className="nav-item">
                {user.email ? (
                  <div className="flex items-center justify-center py-2 px-4">
                    <div className="relative inline-block text-left">
                      <Menu>
                        {({ open }) => (
                          <>
                            <span className="rounded-md shadow-sm">
                              <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 transition duration-150 ease-in-out bg-black text-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800">
                                <span>{user.displayName}</span>
                                <svg
                                  className="w-5 h-5 ml-2 -mr-1"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </Menu.Button>
                            </span>

                            <Transition
                              show={open}
                              enter="transition ease-out duration-100"
                              enterFrom="transform opacity-0 scale-95"
                              enterTo="transform opacity-100 scale-100"
                              leave="transition ease-in duration-75"
                              leaveFrom="transform opacity-100 scale-100"
                              leaveTo="transform opacity-0 scale-95"
                            >
                              <Menu.Items
                                static
                                className="absolute right-0 w-56 mt-2 origin-top-right bg-black border border-gray-500 divide-y divide-gray-800 text-white rounded-md shadow-lg outline-none"
                              >
                                <div className="px-4 py-3">
                                  <p className="text-sm leading-5">
                                    Signed in as
                                  </p>
                                  <p className="text-sm font-medium leading-5 text-white">
                                    {user.email}
                                  </p>
                                </div>

                                <div className="py-1">
                                  <Menu.Item>
                                    {({ active }) => (
                                      <Link
                                        to="/dashboard"
                                        className="text-white flex justify-between w-full px-4 py-2 text-sm leading-5 text-left hover:bg-gray-200 hover:text-black"
                                        // className={`${active
                                        //   ? "bg-gray-100 text-gray-900"
                                        //   : "text-white"
                                        //   } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                                      >
                                        Dashboard
                                      </Link>
                                    )}
                                  </Menu.Item>
                                  <Menu.Item>
                                    {({ active }) => (
                                      <a
                                        href="#support"
                                        className="text-white flex justify-between w-full px-4 py-2 text-sm leading-5 text-left hover:bg-gray-200 hover:text-black"
                                        // className={`${active
                                        //   ? "bg-gray-100 text-gray-900"
                                        //   : "text-gray-700"
                                        //   } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                                      >
                                        Support
                                      </a>
                                    )}
                                  </Menu.Item>
                                </div>

                                <div className="py-1">
                                  <Menu.Item>
                                    {({ active }) => (
                                      <a
                                        href="#sign-out"
                                        className="text-white flex justify-between w-full px-4 py-2 text-sm leading-5 text-left hover:bg-gray-400 hover:text-black"
                                        // className={`${active
                                        //   ? "bg-gray-100 text-gray-900"
                                        //   : "text-gray-700"
                                        //   } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                                      >
                                        Sign out
                                      </a>
                                    )}
                                  </Menu.Item>
                                </div>
                              </Menu.Items>
                            </Transition>
                          </>
                        )}
                      </Menu>
                    </div>
                  </div>
                ) : (
                  <a
                    className="px-3 py-2 flex  items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                    href="/login"
                  >
                    <NavLink
                      to="/register"
                      className="leading-lg rounded text-black bg-yellow-400 px-5 py-3 hover:bg-transparent hover:outline hover:text-white hover:outline-offset-2 hover:outline-2"
                    >
                      <strong className="animate-pulse">Login/Register</strong>
                    </NavLink>
                  </a>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}></Drawer>
    </div>
  );
};

export default Header;

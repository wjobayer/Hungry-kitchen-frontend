import React from "react";
import { FaHamburger } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

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
              "heroSection lg:flex flex-grow items-center rounded-sm" +
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
                  <i className="fab fa-pinterest text-lg leading-lg text-black opacity-75"></i>
                  <span className="ml-2">Home</span>
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/dashboard"
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-black opacity-75"></i>
                  <span className="ml-2">All Items</span>
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/dashboard"
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-black opacity-75"></i>
                  <span className="ml-2">All Restaurant</span>
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/dashboard"
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-black opacity-75"></i>
                  <span className="ml-2">Restaurant Search</span>
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/dashboard"
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-black opacity-75"></i>
                  <span className="ml-2">Dashboard</span>
                </NavLink>
              </li>

              <li className="nav-item">
                <a
                  className="px-3 py-2 flex  items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                  href="#pablo"
                >
                  <NavLink to='/register' className="leading-lg rounded text-black bg-yellow-400 px-5 py-3 hover:bg-transparent hover:outline hover:text-white hover:outline-offset-2 hover:outline-2">
                    <strong className="animate-pulse">Login/Register</strong>
                  </NavLink>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

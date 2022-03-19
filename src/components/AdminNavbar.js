import Button from "@material-tailwind/react/Button";
import Dropdown from "@material-tailwind/react/Dropdown";
import DropdownItem from "@material-tailwind/react/DropdownItem";
import { FaWindowClose } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink, useLocation } from "react-router-dom";
import useFirebase from "../Hooks/useFirebase";

export default function AdminNavbar({ showSidebar, setShowSidebar }) {
  const { user } = useFirebase();
  const location = useLocation().pathname;
  return (
    <nav className="bg-blue-500 md:ml-64 py-6 px-3">
      <div className="container max-w-full mx-auto flex items-center justify-between md:pr-8 md:pl-10">
        <div className="md:hidden">
          <Button
            color="transparent"
            buttonType="link"
            size="lg"
            iconOnly
            rounded
            ripple="light"
            onClick={() => setShowSidebar("left-0")}
          >
            <GiHamburgerMenu />
          </Button>
          <div
            className={`absolute top-2 md:hidden ${
              showSidebar === "left-0" ? "left-64" : "-left-64"
            } z-50 transition-all duration-300`}
          >
            <Button
              color="transparent"
              buttonType="link"
              size="lg"
              iconOnly
              rounded
              ripple="light"
              onClick={() => setShowSidebar("-left-64")}
            >
              <FaWindowClose />
            </Button>
          </div>
        </div>

        <div className="flex justify-between items-center w-full">
          <NavLink
            to="/home"
            className="uppercase text-white text-sm tracking-wider mt-1"
            activeclassname="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
          >
            <h4 className="text-lg hover:text-orange-300">Back...</h4>
          </NavLink>
          <h4 className="uppercase text-white text-sm tracking-wider mt-1">
            {location === "/"
              ? "DASHBOARD"
              : location.toUpperCase().replace("/", "")}
          </h4>

          <div className="flex">
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-2 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Search"
              />
            </div>

            <div className="-mr-4 ml-6">
              <Dropdown
                color="transparent"
                buttonText={
                  <div className="w-12">
                    {/* <Image src={user.photoURL} rounded /> */}
                    <img
                      src={user.photoURL}
                      className=" rounded-full"
                      alt=""
                      srcSet=""
                    />
                  </div>
                }
                rounded
                style={{
                  padding: 0,
                  color: "transparent",
                }}
              >
                <DropdownItem>Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem>Something Else</DropdownItem>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

import React from "react";
import { Link } from "react-router-dom";
const ParallaxSection = () => {
  return (
    <div className="py-20">
      <div
        className="py-9 px-5 w-full lg:h-[40rem] bg-no-repeat bg-cover bg-fixed "
        style={{
          backgroundImage: `url("https://marketplace.foodotawp.com/wp-content/uploads/2021/05/promo-11.png")`,
        }}
      >
        <div className="lg:h-[40rem] flex items-center sm:px-5">
          <div className="container mx-auto ">
            <p className="text-yellow-300 font-semibold">TASTY BURGER</p>
            <p className="lg:text-5xl mt-5 font-semibold">
              Explore The Best Food <br />
              Places Near You
            </p>
            <div className="mt-5">
              <span>
                <hr
                  style={{
                    width: "60px",
                    background: "black",
                    border: "none",
                    height: "3px",
                    display: "inline-block",
                  }}
                />
              </span>
              <span className="ml-1 font-bold">...</span>
            </div>

            <p className="lg:text-3xl mt-5 font-semibold">
              Largest Business Restaurant Food Theme in the World.
            </p>
            <p className="lg:text-2xl mt-5">
              Make Your Own Educational Institute listing website including{" "}
              <br /> academies schools pre schools certifications and many
              more...
            </p>
            <button className="rounded ... px-6 bg-yellow-400 hover:bg-black hover:text-white   font-bold  p-4 mt-7 ">
              Read More
            </button>
            <span className="ml-7">
              <Link to='/search'>
                <button className=" px-6  bg-black p-4 hover:bg-yellow-400 hover:text-black text-white font-bold rounded">
                  Search Now
                </button>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParallaxSection;

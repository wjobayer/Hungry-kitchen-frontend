import React from "react";
import partner1 from "../../assets/images/partner1.jpg";
import partner2 from "../../assets/images/partner2.jpg";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
const PartnerSection = () => {
  return (
    <>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative partner">
            <div className="w-full">
              <img src={partner1} className="w-full rounded-lg" alt="partner" />
            </div>
            <div className="absolute left-5 right-5 bottom-6 md:bottom-14 flex items-center justify-between">
              <h2 className="font-semibold sm:text-3xl md:text-4xl text-white hover:text-[#ffcc00] transition-all duration-300 ease-in-out">
                <Link to="/courierpartner">Get paid as a courier partner</Link>
              </h2>
              <span className="hidden md:block text-3xl text-white p-3 border-2 border-white rounded-full cursor-pointer">
                <AiOutlineArrowRight />
              </span>
            </div>
          </div>
          <div className="relative partner">
            <div className="w-full">
              <img src={partner2} className="w-full rounded-lg" alt="partner" />
            </div>
            <div className="absolute left-5 right-5 bottom-6 md:bottom-14 flex items-center justify-between">
              <h2 className="font-semibold sm:text-3xl md:text-4xl text-white hover:text-[#ffcc00] transition-all duration-300 ease-in-out">
                <Link to="/resturantpartner">Become a restaurant partner</Link>
              </h2>
              <span className="hidden md:block text-3xl text-white p-3 border-2 border-white rounded-full cursor-pointer">
                <AiOutlineArrowRight />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnerSection;

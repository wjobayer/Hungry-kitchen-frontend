import React from "react";
import partner1 from "../../assets/images/partner1.jpg";
import partner2 from "../../assets/images/partner2.jpg";
import { AiOutlineArrowRight } from "react-icons/ai";
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
              <h2 className="sm:text-3xl md:text-4xl text-white font-semibold hover:text-blue-900 transition-all duration-300 ease-in-out">
                <a href="#">Get paid as a courier partner</a>
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
              <h2 className="sm:text-3xl md:text-4xl text-white font-semibold hover:text-blue-900 transition-all duration-300 ease-in-out">
                <a href="#">Become a restaurant partner</a>
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

/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { MdWatchLater } from "react-icons/md";
import { FaShippingFast } from "react-icons/fa";

const LatestFood = ({ latestFood }) => {
  const {
    foodName,
    foodDescription,
    foodImage,
    resturantImage,
    resturantName,
    resturantOpen,
    resturantClose,
  } = latestFood;
  return (
    <>
      <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 bg-white">
        <div className="">
          <div className="relative">
            <a href="#">
              <img src={foodImage} alt="" className="" />
            </a>
            <div className="text-3xl bg-gray-300 p-2 rounded-full text-gray-500 absolute top-6 right-6">
              <FaShippingFast />
            </div>
            <div className="flex absolute text-yellow-500 -mt-8 left-4">
              <AiFillStar className="text-xl" />
              <AiFillStar className="text-xl" />
              <AiFillStar className="text-xl" />
              <AiFillStar className="text-xl" />
              <AiFillStar className="text-xl" />
            </div>
          </div>
          <div className="">
            <div className="p-5">
              <div className="">
                <a href="#">
                  <h3 className="text-3xl font-bold mb-3">{foodName}</h3>
                </a>
                <div className="">
                  <p className="text-base">{foodDescription}</p>
                </div>
              </div>
            </div>
            <div className="flex gap-3 p-5">
              <div className="">
                <a href="#">
                  <img src={resturantImage} alt="" className="w-14 h-14" />
                </a>
              </div>
              <div className="">
                <div className="flex items-center gap-1">
                  <MdWatchLater className="text-green-600" />
                  <span className="text-red-600">
                    {resturantOpen} - {resturantClose}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="">
                    <img
                      src="https://marketplace.foodotawp.com/wp-content/themes/foodota/libs/images/map.png"
                      alt=""
                      className=""
                    />
                  </span>
                  <span>{resturantName}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestFood;

import React from "react";
import { useNavigate } from "react-router-dom";
const FoodTime = () => {
  const navigate = useNavigate();
  const handleClick = (mealTime) => {
    // go to category page
    navigate(`/category/${mealTime}`);
  };
  return (
    <div className="bg-orange-100 py-16 my-4">
      <div className="container">
        <div className="food-courses">
          <div className="breakfast food-time-card">
            <div>
              <h2 className="font-bold text-3xl mt-2">Breakfast</h2>
              <p>See our breakfast menu</p>
              <p
                className="cursor-pointer mt-12 text-xl py-4 text-red-500 details-btn duration-200"
                onClick={() => handleClick("breakfast")}
              >
                Details{" "}
                <span className="details-span text- duration-200">&#8594;</span>
              </p>
            </div>
            <div className="image-section">
              <div className="img-back w-52 h-52 rounded rounded-[50%] bg-yellow-400 "></div>
              <img
                className="-mt-44 z-50"
                src="https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/09/h1_banner1-1.png"
                alt=""
              />
            </div>
          </div>
          <div className="breakfast food-time-card bg-amber-600">
            <div>
              <h2 className="font-bold text-3xl mt-2 text-white">Lunch</h2>
              <p className="text-white">See our Lunch menu</p>
              <p
                className="cursor-pointer mt-12 text-xl py-4 text-white details-btn duration-200"
                onClick={() => handleClick("breakfast")}
              >
                Details{" "}
                <span className="details-span text- duration-200">&#8594;</span>
              </p>
            </div>
            <div className="image-section">
              <div className="img-back w-52 h-52 rounded rounded-[50%] bg-white "></div>
              <img
                className="-mt-44 z-50"
                src="https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/09/h1_banner2-2.png"
                alt=""
              />
            </div>
          </div>
          <div className="breakfast food-time-card">
            <div>
              <h2 className="font-bold text-3xl mt-2">Dinner</h2>
              <p>See our dinner menu</p>
              <p
                className="cursor-pointer mt-12 text-xl py-4 text-red-500 details-btn duration-200"
                onClick={() => handleClick("breakfast")}
              >
                Details{" "}
                <span className="details-span text- duration-200">&#8594;</span>
              </p>
            </div>
            <div className="image-section">
              <div className="img-back w-52 h-52 rounded rounded-[50%] bg-yellow-400 "></div>
              <img
                className="-mt-52 z-50 w-52 h-52 object-contain"
                src="https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/09/category-22.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodTime;

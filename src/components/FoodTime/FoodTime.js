import React from "react";
import { useNavigate } from "react-router-dom";
const FoodTime = () => {
  const navigate = useNavigate();
  const handleClick = (mealTime) => {
    // go to category page
    navigate(`/category/${mealTime}`);
  };
  return (
    <div className="container">
      <div className="food-courses">
        <div className="breakfast food-time-card">
          <div>
            <h2>See Our Breakfast Menu</h2>
            <button
              className="p-3 text-xl mt-4 rounded bg-yellow-400 hover:bg-black hover:text-white font-bold"
              onClick={() => handleClick("breakfast")}
            >
              Order now
            </button>
          </div>
          <div>
            <img
              src="https://laboom.sk-web-solutions.com/images/product1.png"
              alt=""
            />
          </div>
        </div>
        <div className="breakfast food-time-card">
          <div>
            <h2>See Our Lunch Menu Items</h2>
            <button
              className="p-3 text-xl mt-4 rounded bg-yellow-400 hover:bg-black hover:text-white font-bold"
              onClick={() => handleClick("lunch")}
            >
              Order now
            </button>
          </div>
          <div>
            <img
              src="https://laboom.sk-web-solutions.com/images/product2.png"
              alt=""
            />
          </div>
        </div>
        <div className="breakfast food-time-card">
          <div>
            <h2>See Our Dinner Menu</h2>
            <button
              className="p-3 text-xl mt-4 rounded bg-yellow-400 hover:bg-black hover:text-white font-bold"
              onClick={() => handleClick("dinner")}
            >
              Order now
            </button>
          </div>
          <div>
            <img
              src="https://laboom.sk-web-solutions.com/images/product3.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodTime;

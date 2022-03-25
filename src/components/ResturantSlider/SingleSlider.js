import React from "react";
import { useNavigate } from "react-router-dom";

const SingleSlider = ({ resturant }) => {
  const navigate = useNavigate();
  const handleClick = (mealTime) => {
    navigate(`/category/${mealTime}`);
  };
  return (
    <div className="resturant-slider">
      <div>
        <img className="slider-img" src={resturant.resturantImage} alt="" />
      </div>
      <div>
        <p className="font-bold text-lg">{resturant.resturantName}</p>
        <p>4/5 Dhanmondi, Dhaka, Bangladesh </p>
        <button
          className="px-3 py-2 mt-2 bg-yellow-400 rounded rounded-lg hover:bg-black hover:text-white duration-200"
          onClick={() => handleClick("breakfast")}
        >
          Order Foods
        </button>
      </div>
    </div>
  );
};

export default SingleSlider;

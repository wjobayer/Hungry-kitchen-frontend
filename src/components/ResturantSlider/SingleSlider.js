import React from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
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
          className="rounded ... px-4 bg-yellow-400 hover:bg-black hover:text-white   font-bold  p-2 duration-100 my-2 flex items-center"
          onClick={() => handleClick("breakfast")}
        >
          <AiOutlineShoppingCart className="text-lg mr-1" /> Order now
        </button>
      </div>
    </div>
  );
};

export default SingleSlider;

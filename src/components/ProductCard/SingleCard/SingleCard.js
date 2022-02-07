import { React, useState } from "react";
import "./SingleCard.css";
const SingleCard = ({ foods }) => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="single-card border rounded-lg border-gray-200 p-7  hover:shadow-lg hover:bg-orange-50">
      <img
        className="rounded-full p-2.5"
        src={foods.strMealThumb}
        alt={foods.strMeal}
      />
      <h3 className="text-xl font-bold"> {foods.strMeal}</h3>
      <p className="my-3.5 text-gray-600">
        {foods.strMeal}. The food is very popular here.
      </p>
      <div className="flex justify-between">
        <div className="flex">
          <div
            className="rounded-full bg-orange-400 p-0 px-2.5 mr-1 cursor-pointer"
            onClick={() => setCounter((prev) => counter - 1)}
          >
            -
          </div>
          <p>{counter}</p>
          <div
            className="rounded-full bg-orange-400 p-0 px-2 ml-1 cursor-pointer"
            onClick={() => setCounter((prev) => counter + 1)}
          >
            +
          </div>
        </div>
        <p className="text-xl font-bold text-red-500">${foods.idMeal}</p>
      </div>

      <div className="flex justify-center">
        <button className="bg-red-500 text-white font-bold px-7 py-2 rounded-3xl duration-500 hover:bg-orange-400">
          VIEW OPTIONS
        </button>
      </div>
    </div>
  );
};

export default SingleCard;

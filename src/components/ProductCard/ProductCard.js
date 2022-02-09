import { React, useState, useEffect } from "react";
import SingleCard from "./SingleCard/SingleCard";

const ProductCard = () => {
  const [food, setFood] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian")
      .then((res) => res.json())
      .then((data) => setFood(data.meals));
  }, []);
  console.log(food);
  return (
    <div className="container mx-auto">
      <h2 className="text-center my-5 font-bold">Popular Right Now!</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
        {food.map((foods) => (
          <SingleCard key={foods.idMeal} foods={foods}></SingleCard>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;

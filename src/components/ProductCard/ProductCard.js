import { React, useState, useEffect } from "react";
import SingleCard from "./SingleCard/SingleCard";

const ProductCard = () => {
  const [country, setCountry] = useState("India");
  const handleFilter = (id) => {
    setCountry(id);
  };
  const [food, setFood] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`
      )
        .then((res) => res.json())
        .then((data) => setFood(data.meals));
      setLoading(false);
    };
    fetchBlogs();
  }, []);
  console.log(country);
  if (loading) {
    return (
      <div className="flex justify-center my-5">
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
        {food.map((foods) => (
          <SingleCard key={foods.idMeal} foods={foods}></SingleCard>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;

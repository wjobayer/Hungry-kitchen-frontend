import React, { useState } from "react";
import ProductCard from "../ProductCard";

const ProductSection = () => {
  const [country, setCountry] = useState("India");
  const handleFilter = (id) => {
    setCountry(id);
  };
  return (
    <div className="container px-4 mx-auto">
      <h2>This is product card</h2>
      <div className="my-5 flex justify-center">
        <div className="w-96">
          <p className="text-red-500 font-bold text-sm text-center">
            FRESH FROM OUR VENDORS
          </p>
          <h3 className="font-bold text-3xl  text-center">
            We Offer People Best Way To Eat Best Food
          </h3>
        </div>
      </div>
      <div className="flex justify-center">
        <div>
          <button className="bg-red-500 text-sm text-white font-bold px-6 py-2 rounded-3xl duration-500 hover:bg-orange-400 mr-4 my-4">
            Canada
          </button>
          <button
            className="bg-red-500 text-sm text-white font-bold px-6 py-2 rounded-3xl duration-500 hover:bg-orange-400 mr-4 my-4"
            onClick={() => handleFilter("India")}
          >
            India
          </button>
          <button className="bg-red-500 text-sm text-white font-bold px-6 py-2 rounded-3xl duration-500 hover:bg-orange-400 mr-4 my-4">
            Italy
          </button>
        </div>
      </div>
      <ProductCard country={country} />
    </div>
  );
};

export default ProductSection;

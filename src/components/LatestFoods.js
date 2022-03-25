import React, { useEffect, useState } from "react";
import LatestFood from "./LatestFood";


const LatestFoods = () => {
  const [latestFoods, setLatestFoods] = useState([]);
  console.log("latestFoods", latestFoods);
  useEffect(() => {
    fetch("https://hungry-kitchen-app.herokuapp.com/foods")
      .then((res) => res.json())
      .then((data) => setLatestFoods(data));
  }, []);
  return (
    <div className="bg-gray-200 py-24">
      <div className="container">
        <div className="text-center mb-20">
          <p className="sub-title">Our Latest Food</p>
          <h1 className="text-5xl font-bold">Latest Food</h1>
        </div>
        <div className="grid grid-cols-12 gap-6">
          {latestFoods.slice(0, 3).map((latestFood) => (
            <LatestFood latestFood={latestFood} key={latestFood._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestFoods;

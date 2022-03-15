import React from "react";
import { useSelector } from "react-redux";
import CartCard from "../../common/CartCard";

const PopularResturants = () => {
  const cartProducts = useSelector((state) => state.addToCart);
  return (
    <div className="container">
      <h2>Popular Resturants</h2>

      <h2
        className="w-full
      "
      >
        {cartProducts.map((cart) => (
          <CartCard cart={cart} />
        ))}
      </h2>
    </div>
  );
};

export default PopularResturants;

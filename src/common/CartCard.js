import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/slices/foodSlice";

const CartCard = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.addToCart);
  const [counter, setCounter] = useState(1);
  const handleSetCounter = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

//   const onRemove = (cart, e) => {
//     dispatch(removeFromCart(cart))

//     e.preventdefault();
// }
  return (
    <div>
      {cartProducts.map((cart) => (
        <div>
          <div className="flex border rounded m-2 p-2 items-center">
            <div>
              <img
                src={cart.strMealThumb}
                alt=""
                className="w-32 rounded-full mr-4"
              />
            </div>
            <div>
              <p>{cart.strMeal}</p>
              <p className="text-red-500 mb-2">$11.99</p>
              <div className="flex items-center">
                <div className="flex justify-between mr-3">
                  <div className="flex quantity-section">
                    <div className="quantity-btn" onClick={handleSetCounter}>
                      -
                    </div>
                    <p className="quantity-counter">{counter}</p>
                    <div
                      className="quantity-btn"
                      onClick={() => setCounter((prev) => counter + 1)}
                    >
                      +
                    </div>
                  </div>
                </div>
                <button className="py-2 px-4 border rounded mr-3 font-bold bg-yellow-400 hover:bg-black hover:text-white duration-100 flex items-center">
                  <MdDelete onClick={()=>dispatch(removeFromCart(cart))} /> Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartCard;

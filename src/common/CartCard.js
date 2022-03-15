import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  addToCart,
  cartQuantity,
  removeFromCart,
} from "../redux/slices/foodSlice";

const CartCard = ({ cart }) => {
  const dispatch = useDispatch();
  // const cartProducts = useSelector((state) => state.addToCart);
  const [counter, setCounter] = useState(cart.cartQuantity);
  const decreaseCounter = () => {
    if (counter > 1) {
      setCounter(counter - 1);
      dispatch(cartQuantity({ ...cart, cartQuantity: cart.cartQuantity - 1 }));
    }
  };
  const increaseCounter = () => {
    setCounter((prev) => counter + 1);
    dispatch(cartQuantity({ ...cart, cartQuantity: cart.cartQuantity + 1 }));
  };
  const onRemove = (cart) => {
    dispatch(removeFromCart(cart));
  };
  return (
    <div>
      <div className="flex border rounded m-2 p-2 items-center">
        <div>
          <img src={cart.foodImage} alt="" className="w-32 rounded-full mr-4" />
        </div>
        <div>
          <p>{cart.foodName.slice(0, 40)}</p>
          <p className="text-red-500 mb-2">
            {(cart.price * cart.cartQuantity).toFixed(2)}
          </p>
          <div className="flex items-center">
            <div className="flex justify-between mr-3">
              <div className="flex quantity-section">
                <div className="quantity-btn" onClick={decreaseCounter}>
                  -
                </div>
                <p className="quantity-counter">{counter}</p>
                <div className="quantity-btn" onClick={increaseCounter}>
                  +
                </div>
              </div>
            </div>

            <button className="py-2 px-4 border rounded mr-3 font-bold bg-yellow-400 hover:bg-black hover:text-white duration-100 flex items-center">
              <MdDelete onClick={() => onRemove(cart)} /> Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;

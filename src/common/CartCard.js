import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { cartQuantity, removeFromCart } from "../redux/slices/foodSlice";

const CartCard = ({ cart }) => {
  const Swal = require("sweetalert2");
  const dispatch = useDispatch();
  // const cartProducts = useSelector((state) => state.addToCart);
  const decreaseCounter = () => {
    if (cart.cartQuantity > 1) {
      dispatch(cartQuantity({ ...cart, cartQuantity: cart.cartQuantity - 1 }));
    }
  };
  const increaseCounter = () => {
    dispatch(cartQuantity({ ...cart, cartQuantity: cart.cartQuantity + 1 }));
  };
  const removeHandler = (cart) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(removeFromCart(cart));
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  return (
    <div>
      <div className="flex border rounded m-2 p-2 items-center">
        <div>
          <img
            src={cart.foodImage}
            alt=""
            className="w-32 h-32 object-cover rounded-full mr-4"
          />
        </div>
        <div>
          <p>{cart.foodName.slice(0, 40)}</p>
          <p className="text-red-500 mb-2">
            {cart.cartQuantity === 1
              ? `$ ${cart.price}`
              : ` $ ${cart.price} x ${cart.cartQuantity} = 
            $ ${(cart.price * cart.cartQuantity).toFixed(2)}`}
          </p>
          <div className="flex items-center">
            <div className="flex justify-between mr-3">
              <div className="flex quantity-section">
                <div className="quantity-btn" onClick={decreaseCounter}>
                  -
                </div>
                <p className="quantity-counter">{cart.cartQuantity}</p>
                <div className="quantity-btn" onClick={increaseCounter}>
                  +
                </div>
              </div>
            </div>

            <button
              className="py-2 px-4 border rounded mr-3 font-bold bg-yellow-400 hover:bg-black hover:text-white duration-100 flex items-center"
              onClick={() => removeHandler(cart)}
            >
              <MdDelete /> Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;

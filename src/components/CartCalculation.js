import React, { useState } from "react";
import { useSelector } from "react-redux";

const CartCalculation = () => {
  const cartProducts = useSelector((state) => state.addToCart);

  let subTotal = cartProducts.reduce(function (prev, current) {
    return prev + +current.totalPrice;
  }, 0);
  const [deleveryFee, setDeleveryFee] = useState(0);
  const total = deleveryFee + subTotal;
  return (
    <div className="container pb-4 pt-2 bg-white ]">
      <hr className="my-2" />
      <div className="flex justify-between">
        <p className="text-lg font-bold">Subtotal</p>
        <p className="text-lg font-bold">${subTotal.toFixed(2)}</p>
      </div>

      <table className="table-auto border-collapse border my-3">
        <tbody>
          <tr>
            <td className="border px-10">
              <p>Shipping</p>
            </td>
            <td className="border p-4 w-full">
              <form className="col-span-2">
                <div className="flex justify-between items-center">
                  <label htmlFor="home_delevery" className="mr-4">
                    Home delevery: $ 5
                  </label>
                  <input
                    onClick={() => setDeleveryFee(5)}
                    type="radio"
                    name="home_delevery"
                    id=""
                  />
                </div>
                <div className="flex justify-between items-center">
                  <label className="mr-4" htmlFor="home_delevery">
                    Local pickup: Free
                  </label>
                  <input
                    onClick={() => setDeleveryFee(0)}
                    type="radio"
                    name="home_delevery"
                    id=""
                    defaultChecked
                  />
                </div>
              </form>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-between">
        <p className="text-lg font-bold">Total</p>
        <p className="text-lg font-bold">${total.toFixed(2)}</p>
      </div>
      <div className="flex justify-center">
        <button className="py-2 px-4 border rounded mr-3 font-bold bg-yellow-400 hover:bg-black hover:text-white duration-100 flex items-center">
          Proceed to checkout
        </button>
      </div>
    </div>
  );
};

export default CartCalculation;

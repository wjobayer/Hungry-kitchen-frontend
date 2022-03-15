import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeAllFromCart } from "../redux/slices/foodSlice";

const CartCalculation = () => {
  //state of latitude and longitude
  // const [latitude, setLatitude] = useState();
  // const [longitude, setLongitude] = useState();
  //end state of latitude and longitude
  const cartProducts = useSelector((state) => state.addToCart);
  const dispatch = useDispatch();
  let subTotal = cartProducts.reduce(function (prev, current) {
    return prev + +current.totalPrice;
  }, 0);
  const [deleveryFee, setDeleveryFee] = useState(0);
  const total = deleveryFee + subTotal;

  const handleCheckout = () => {
   //Location tracking from order

  //  function getLocation() {
  //    if (navigator.geolocation) {
  //      navigator.geolocation.getCurrentPosition(showPosition);
  //    } 
  //  }
   
  //  function showPosition(position) {
  //    setLatitude (position.coords.latitude);
  //    setLongitude(position.coords.longitude);
  //    console.log(position)
  //  }
  //  getLocation();

   //end Location tracking from order
    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(cartProducts),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("success!");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    alert("data added succesfully");
    dispatch(removeAllFromCart(cartProducts));
  };
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
        <button
          className="py-2 px-4 border rounded mr-3 font-bold bg-yellow-400 hover:bg-black hover:text-white duration-100 flex items-center"
          onClick={handleCheckout}
        >
          Proceed to checkout
        </button>
      </div>
    </div>
  );
};

export default CartCalculation;

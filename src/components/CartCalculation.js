import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const CartCalculation = () => {
  const cartProducts = useSelector((state) => state.addToCart);
  const dispatch = useDispatch();
  let subTotal = cartProducts.reduce(function (prev, current) {
    return prev + +current.totalPrice;
  }, 0);
  const [deleveryFee, setDeleveryFee] = useState(0);
  const total = deleveryFee + subTotal;
  console.log(total);
  const navigate = useNavigate(); 
  const handleCheckout = () => {
    Swal.fire({
      title: "Do you want to conferm order?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Conferm!",
      denyButtonText: `Order Letter`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        navigate('/payment');
        // fetch("https://hungry-kitchen-app.herokuapp.com/orders", {
        //   method: "POST",
        //   headers: {
        //     "content-type": "application/json",
        //   },
        //   body: JSON.stringify(cartProducts),
        // })
        //   .then((res) => res.json())
        //   .then((data) => {})
        //   .catch((error) => {
        //     console.error("Error:", error);
        //   });
        // dispatch(removeAllFromCart(cartProducts));
        // Swal.fire("Ordered successfully!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Order is not placed!", "", "info");
      }
    });
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
                  <label htmlFor="home_delevery">Home delevery: $ 5</label>
                  <input
                    onClick={() => setDeleveryFee(5)}
                    type="radio"
                    name="home_delevery"
                    className="w-10"
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
                    className="w-10"
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
        {cartProducts.length === 0 ? (
          <button className="py-2 px-4 border rounded mr-3 font-bold bg-gray-100 hover:bg-gray-200 text-gray-400 border-gray-300 duration-100 flex items-center">
            Proceed to checkout
          </button>
        ) : (
          <button
            className="py-2 px-4 border rounded mr-3 font-bold bg-yellow-400 hover:bg-black hover:text-white duration-100 flex items-center"
            onClick={handleCheckout}
          >
            Proceed to checkout
          </button>
        )}
        
        <NavLink
                      to="/scheduleOrder"
                      className="py-2 px-4 border rounded mr-3 font-bold bg-yellow-400 hover:bg-black hover:text-white duration-100 flex items-center"
                    >Schedule Order</NavLink>
      </div>
      
    </div>
  );
};

export default CartCalculation;

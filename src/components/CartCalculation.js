import React from "react";

const CartCalculation = () => {
  return (
    <div className="container pb-4 pt-2 bg-white drop-shadow-[0_15px_15px_gray]">
      {/* <hr className="my-2" /> */}
      <div className="flex justify-between">
        <p className="text-lg font-bold">Subtotal</p>
        <p className="text-lg font-bold">$00.00</p>
      </div>

      <table className="table-auto border-collapse border my-3">
        <tbody>
          <tr>
            <td className="border px-10">
              <p>Shipping</p>
            </td>
            <td className="border p-4 w-full">
              <form className="col-span-2">
                <div className="flex justify-end">
                  <label htmlFor="home_delevery" className="mr-4">
                    Home delevery:$5
                  </label>
                  <input type="radio" name="home_delevery" id="" />
                </div>
                <div className="flex justify-end">
                  <label className="mr-4" htmlFor="home_delevery">
                    Local pickup: Free
                  </label>
                  <input type="radio" name="home_delevery" id="" />
                </div>
              </form>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-between">
        <p className="text-lg font-bold">Total</p>
        <p className="text-lg font-bold">$00.00</p>
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

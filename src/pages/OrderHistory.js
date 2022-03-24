import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../common/Footer";
import HeaderBlack from "../common/HeaderBlack";
import useFirebase from "../Hooks/useFirebase";

const OrderHistory = () => {
  const { user } = useFirebase();
  const [history, setHistory] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/orders/pay/${user.email}`)
      .then((res) => res.json())
      .then((data) => setHistory(data));
  }, [user.email]);
  console.log(history);
  return (
    <div>
      <HeaderBlack></HeaderBlack>
      <h1 className="text-4xl text-center border-stone-400 text-orange-600 mb-16">Payment History</h1>
      <div className="bg-[url('https://i.ibb.co/stVRZMb/Untitled-design-3.png')] bg-no-repeat	bg-cover bg-center">
      <div className="flex justify-center"></div>
      <div class="container flex justify-center mx-auto">
        <div class="flex flex-col">
          <div class="w-full mt-8 mb-16 ">
            <div class="border-b border-gray-200 shadow">
              <table class="divide-y divide-gray-300 drop-shadow-2xl">
                <thead class="bg-gray-50">
                  <tr>
                    <th class="px-6 py-2 text-xs text-gray-500">SL</th>
                    <th class="px-6 py-2 text-xs text-gray-500">Food Name</th>
                    <th class="px-6 py-2 text-xs text-gray-500">Food Image</th>
                    <th class="px-6 py-2 text-xs text-gray-500">Price</th>
                    <th class="px-6 py-2 text-xs text-gray-500">Quantity</th>
                    <th class="px-6 py-2 text-xs text-gray-500">Payment</th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-300">
                  {history.map((history,index) => (
                    <tr class="whitespace-nowrap hover:bg-gray-100 active:bg-gray-200 focus:outline-none focus:ring focus:ring-gray-300">
                      <td class="px-6 py-4 text-sm text-gray-500">{index+1}</td>
                      <td class="px-6 py-4">
                        <div class="text-sm text-gray-900">
                          {history.foodName}
                        </div>
                      </td>
                      <td class="px-6 py-4">
                        <div class="text-sm text-gray-500">
                          <img
                            className="w-32"
                            src={history.foodImage}
                            alt="Food"
                          />
                        </div>
                      </td>
                      <td class="px-6 py-4 text-sm text-gray-500">{history.price}</td>
                      <td class="px-6 py-4">
                        <div class="text-sm text-gray-900">
                          {history.cartQuantity}
                        </div>
                      </td>
                      <td class="px-6 py-4">{history.payment?'paid':<Link to={`/orderhistory/${history._id}`}><button class="px-4 py-1 text-sm text-white bg-blue-600 rounded-full"> Pay {history.price} </button></Link>}
                       
                      </td>
                      
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default OrderHistory;

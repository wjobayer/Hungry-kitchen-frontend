import Card from "@material-tailwind/react/Card";
import CardBody from "@material-tailwind/react/CardBody";
import CardHeader from "@material-tailwind/react/CardHeader";
import Image from "@material-tailwind/react/Image";
import axios from "axios";
import { useEffect, useState } from "react";
import { GiCampCookingPot } from "react-icons/gi";
import Swal from "sweetalert2";
export default function TrafficCard() {
  const [product, setProduct] = useState([]);
  const [control, setControl] = useState(false);
  useEffect(async () => {
    const response = await axios.get(`http://localhost:5000/orders`);
    const orderAcceptedFood = response.data.filter(
      (food) => food.orderStatus === "Accepted"
    );
    setProduct(orderAcceptedFood);
  }, [control]);

  const handleDeliverd = async (product) => {
    product.orderStatus = "Deliverd";
    const response = await axios.put(
      `http://localhost:5000/orders/${product._id}`,
      product
    );
    if (response.data.modifiedCount) {
      Swal.fire("Order Deliverd", "Your Order Deliverd Successfull", "success");
      setControl(!control);
    }
  };
  return (
    <Card>
      <CardHeader className="bg-purple-500" contentPosition="none">
        <div className="w-full flex items-center justify-between">
          <div className="inline-flex">
            <h2 className="text-white text-2xl">Cooking</h2>
            <h2 className="text-white text-2xl ml-8">
              <GiCampCookingPot />
            </h2>
          </div>
        </div>
      </CardHeader>
      <CardBody>
        <div className="overflow-x-auto">
          <table className="items-center w-full bg-transparent border-collapse">
            <thead className="thead-light">
              <tr>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Cooking
                </th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Send To
                </th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left w-56">
                  Status
                </th>
              </tr>
            </thead>
            {product?.map((product) => (
              <tbody className="hover:bg-gray-200" key={product._id}>
                <tr>
                  <th className="border-b border-gray-200 align-middle font-light text-lg whitespace-nowrap px-2 py-4 text-left">
                    {product.foodName}
                    <div className="flex">
                      <div className="w-24 h-24 rounded-full border-2 border-white">
                        <Image src={product.foodImage} rounded alt="foodImage" />
                      </div>
                    </div>
                  </th>
                  <th className="border-b border-gray-200 align-middle font-light text-lg whitespace-nowrap px-2 py-4 text-left"></th>
                  <th className="border-b border-gray-200 align-middle font-light text-lg whitespace-nowrap px-2 py-4 text-left">
                    <button
                      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => handleDeliverd(product)}
                    >
                      {product.orderStatus}
                    </button>
                  </th>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </CardBody>
    </Card>
  );
}

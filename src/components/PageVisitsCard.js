import Card from "@material-tailwind/react/Card";
import CardBody from "@material-tailwind/react/CardBody";
import CardHeader from "@material-tailwind/react/CardHeader";
import Image from "@material-tailwind/react/Image";
import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlineAlert } from "react-icons/ai";
import Swal from "sweetalert2";
export default function PageVisitsCard() {
  const [product, setProduct] = useState([]);
  const [control, setControl] = useState(false);
  useEffect(async () => {
    const response = await axios.get(`https://hungry-kitchen-app.herokuapp.com/orders`);
    const pendingOrder = response.data.filter(food => food.orderStatus === "pending")
    setProduct(pendingOrder);
  }, [control]);

  const handleUpdate = async (product) => {
    product.orderStatus = "Accepted";
    product.riderStatus = "Pending";
    const response = await axios.put(
      `https://hungry-kitchen-app.herokuapp.com/orders/${product._id}`,
      product
    );
    console.log(response)
    if (response.data.modifiedCount) {
      Swal.fire("Order Accepted", "Your Order Accepted", "success");
      setControl(!control);
    }
  };

  const handleDelete = async (id) => {
    const response = await axios.delete(`https://hungry-kitchen-app.herokuapp.com/orders/${id}`);
    console.log(response.data);
    if(response.data.acknowledged){
      Swal.fire("Order Delete", "Order delete successfull", "success");
      setControl(!control);
    }
  };
  return (
    <Card>
      <CardHeader className="bg-blue-600" color="blue" contentPosition="none">
        <div className="w-full flex items-center justify-between">
          <div className="inline-flex">
            <h2 className="text-white text-2xl">Incomming Orders</h2>
            <h2 className="text-white text-2xl ml-8">
              <AiOutlineAlert />
            </h2>
          </div>
        </div>
      </CardHeader>
      <CardBody>
        <div className="overflow-x-auto">
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Food Name
                </th>
                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Image
                </th>
                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Price
                </th>
                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Want To
                </th>
              </tr>
            </thead>
            {product?.map((product) => (
              <tbody className="hover:bg-gray-200" key={product._id}>
                <tr>
                  <th className="w-1/3 border-b border-gray-200 align-middle font-light text-lg whitespace-nowrap px-2 py-4 text-left">
                    {product.foodName}
                  </th>
                  <th className="border-b border-gray-200 align-middle font-light text-lg whitespace-nowrap px-2 py-4 text-left">
                    <div className="flex">
                      <div className="w-24 h-24 rounded-full border-2 border-white">
                        <Image
                          src={product.foodImage}
                          rounded
                          alt="food image"
                        />
                      </div>
                    </div>
                  </th>
                  <th className="border-b border-gray-200 align-middle font-light text-lg whitespace-nowrap px-2 py-4 text-left">
                    {product.price}
                  </th>

                  <th className="border-b border-gray-200 align-middle font-light text-lg whitespace-nowrap px-2 py-4 text-left">
                    <button
                      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => handleUpdate(product)}
                    >
                      {product.orderStatus}
                    </button>
                    <button
                      class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
                      onClick={() => handleDelete(product._id)}
                    >
                      Delete
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

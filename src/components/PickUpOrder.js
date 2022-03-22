import Card from "@material-tailwind/react/Card";
import CardBody from "@material-tailwind/react/CardBody";
import CardHeader from "@material-tailwind/react/CardHeader";
import Image from "@material-tailwind/react/Image";
import { useEffect, useState } from "react";
import { AiFillDelete, AiOutlineAlert } from "react-icons/ai";
import { FiCheck } from "react-icons/fi";
import { MdMyLocation } from "react-icons/md";
import MapExample from "./MapExample";
import axios from "axios";
import Swal from "sweetalert2";
export default function PickUpOrder() {
  const [product, setProduct] = useState([]);
  const [control, setControl] = useState(false);
  const [Accept, setAccept] = useState(false);
  useEffect(async () => {
    const response = await axios.get(`https://hungry-kitchen-app.herokuapp.com/orders`);
    const acceptedOrder = response.data.filter(
      (food) => food.riderStatus === "Pending"
    );
    setProduct(acceptedOrder);
  }, [control]);
  const handleUpdate = async (product) => {
    product.riderStatus = "Accepted";
    const response = await axios.put(
      `https://hungry-kitchen-app.herokuapp.com/orders/${product._id}`,
      product
    );
    if (response.data.modifiedCount) {
      Swal.fire("Rider Order Accepted", "Your Order Rider Accepted", "success");
      setControl(!control);
    }
  };

  const handleDelete = async (product) => {
    product.riderStatus = "Not Accepted";
    const response = await axios.put(
      `https://hungry-kitchen-app.herokuapp.com/orders/${product._id}`,
      product
    );
    if (response.data.modifiedCount) {
      Swal.fire(
        "Rider not Accepted",
        "Rider not Accepted Your Order",
        "success"
      );
      setControl(!control);
    }
  };
  return (
    <>
      <Card>
        <CardHeader className="bg-blue-500" color="blue" contentPosition="none">
          <div className="w-full flex items-center justify-between">
            <div className="inline-flex">
              <h2 className="text-white text-2xl">Pick Up Order</h2>
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
                    Want To
                  </th>
                </tr>
              </thead>
              {product?.map((product) => (
                <tbody className="hover:bg-gray-200" key={product._id}>
                  <tr>
                    <th className="border-b border-gray-200 align-middle font-light text-lg whitespace-nowrap px-2 py-4 text-left">
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
                      <button
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => setAccept(true)}
                      >
                        <MdMyLocation />
                      </button>
                      <button
                        class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mx-16"
                        onClick={() => handleUpdate(product)}
                      >
                        <FiCheck />
                      </button>
                      <button
                        class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => handleDelete(product)}
                      >
                        <AiFillDelete />
                      </button>
                      {Accept ? (
                        <>
                          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                            <div className="relative  my-6 mx-auto max-w-8xl">
                              {/*content*/}
                              <div className="border-0 rounded-xl  shadow-inner shadow-cyan-500/50 relative flex flex-col w-full bg-gradient-to-r from-white to-gray-200 outline-none focus:outline-none">
                                <div className="px-3 md:px-8 h-auto pt-8">
                                  <div className="container mx-auto max-w-full">
                                    <h3 className="text-2xl text-center mb-4">
                                      This Is Customer Location
                                    </h3>
                                    <div className="grid grid-cols-0  h-[600px]">
                                      <MapExample />
                                    </div>
                                  </div>
                                </div>
                                {/*body*/}

                                {/*footer*/}
                                <div className="flex items-center justify-end mx-96 py-6">
                                  <button
                                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => setAccept(false)}
                                  >
                                    Close
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      ) : null}
                    </th>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </CardBody>
      </Card>
    </>
  );
}

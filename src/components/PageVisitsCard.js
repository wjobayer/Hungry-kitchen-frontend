import Card from "@material-tailwind/react/Card";
import CardBody from "@material-tailwind/react/CardBody";
import CardHeader from "@material-tailwind/react/CardHeader";
import Image from "@material-tailwind/react/Image";
import { useEffect, useState } from "react";
import { AiOutlineAlert } from "react-icons/ai";
export default function PageVisitsCard() {
  const [product, setProduct] = useState([]);
  const [control, setControl] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [Accept, setAccept] = useState(false);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Italian")
      .then((res) => res.json())
      .then((data) => setProduct(data.meals));
  }, [control]);

  const handleDelete = (id) => {
    fetch(`https://aqueous-falls-64682.herokuapp.com/deleteproduct/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          window.confirm("Do you really want to Delete?");
          setControl(!control);
        }
      });
    console.log(id);
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
          {/* <Button
                        color="transparent"
                        buttonType="link"
                        size="lg"
                        style={{ margin:1 }}
                    >
                        See More
                    </Button> */}
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
            {product?.map((product, index) => (
              <tbody className="hover:bg-gray-200">
                <tr>
                  <th className="border-b border-gray-200 align-middle font-light text-lg whitespace-nowrap px-2 py-4 text-left">
                    {product.strMeal}
                  </th>
                  {/* <th className="border-b border-gray-200 align-middle font-light text-lg whitespace-nowrap px-2 py-4 text-left">
                                    Italian
                                </th> */}
                  <th className="border-b border-gray-200 align-middle font-light text-lg whitespace-nowrap px-2 py-4 text-left">
                    <div className="flex">
                      <div className="w-24 h-24 rounded-full border-2 border-white">
                        <Image src={product.strMealThumb} rounded alt="..." />
                      </div>
                    </div>
                  </th>
                  <th className="border-b border-gray-200 align-middle font-light text-lg whitespace-nowrap px-2 py-4 text-left">
                    11 $
                  </th>

                  <th className="border-b border-gray-200 align-middle font-light text-lg whitespace-nowrap px-2 py-4 text-left">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => setAccept(true)}
                    >
                      Accept
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
                      onClick={() => setShowModal(true)}
                    >
                      Delete
                    </button>
                    {Accept ? (
                      <>
                        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                          <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-md shadow-gray-400 relative flex flex-col w-full bg-white outline-none focus:outline-none">
                              {/*header*/}
                              <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                <h3 className="text-3xl font-semibold">
                                  Ready To Cook Now!
                                </h3>
                                <button
                                  className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                  onClick={() => setAccept(false)}
                                >
                                  <span className=" text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                    X
                                  </span>
                                </button>
                              </div>
                              {/*body*/}

                              {/*footer*/}
                              <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                <button
                                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                  type="button"
                                  onClick={() => setAccept(false)}
                                >
                                  Ok
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="fixed inset-0 z-40 bg-gray-50 bg-opacity-5"></div>
                      </>
                    ) : null}
                    {showModal ? (
                      <>
                        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                          <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-md shadow-gray-400 relative flex flex-col w-full bg-white outline-none focus:outline-none">
                              {/*header*/}
                              <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                <h3 className="text-3xl font-semibold">
                                  To Confirm Delete
                                </h3>
                                <button
                                  className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                  onClick={() => setShowModal(false)}
                                >
                                  <span className=" text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                    X
                                  </span>
                                </button>
                              </div>
                              {/*body*/}
                              <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                                <div className="mb-4">
                                  <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    for="username"
                                  >
                                    Plaese Input This Food Code To Confirm
                                  </label>
                                  <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="username"
                                    type="text"
                                    placeholder="Food Code"
                                  />
                                </div>
                              </form>

                              {/*footer*/}
                              <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                <button
                                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                  type="button"
                                  onClick={() => setShowModal(false)}
                                >
                                  Close
                                </button>
                                <button
                                  className="bg-red-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                  type="button"
                                  onClick={() => setShowModal(false)}
                                >
                                  Delete
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="fixed inset-0 z-40 bg-gray-50 bg-opacity-5"></div>
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
  );
}

import Card from "@material-tailwind/react/Card";
import CardBody from "@material-tailwind/react/CardBody";
import CardHeader from "@material-tailwind/react/CardHeader";
import Image from "@material-tailwind/react/Image";
import { useEffect, useState } from "react";
import { getFoods } from "../redux/actions/foodAction";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";

export default function CardTable() {
  const [showModal, setShowModal] = useState(false);
  const [isDelete, setIsDelete] = useState(null);
  const dispatch = useDispatch();
  const { loading, foods } = useSelector((state) => state);

  // get all food
  useEffect(() => {
    dispatch(getFoods());
  }, [isDelete]);
  const handleDelete = async (id) => {
    const response = await axios.delete(
      `http://localhost:5000/foods/${id}`
    );
    if (response.status) {
      Swal.fire({
        icon: "success",
        title: "food delete successfull",
        showConfirmButton: true,
      });
      setIsDelete(true)
    }else{
      setIsDelete(false)
    }
  };

  return (
    <Card>
      <CardHeader
        className="bg-gradient-to-b from-purple-400 to-purple-600"
        contentPosition="left"
      >
        <h2 className="text-white text-2xl">Food Menu</h2>
      </CardHeader>
      <CardBody>
        <div className="overflow-x-auto">
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-lg whitespace-nowrap font-light text-left">
                  Food Code
                </th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-lg whitespace-nowrap font-light text-left">
                  Food Name
                </th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-lg whitespace-nowrap font-light text-left">
                  Food Category
                </th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-lg whitespace-nowrap font-light text-left">
                  Price
                </th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-lg whitespace-nowrap font-light text-left">
                  Food Image
                </th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-lg whitespace-nowrap font-light text-left">
                  Want To
                </th>
              </tr>
            </thead>
            {loading
              ? "Loading"
              : foods?.map((food) => (
                  <tbody className="hover:bg-gray-200" key={food._id}>
                    <tr>
                      <th className="border-b border-gray-200 align-middle font-light text-lg whitespace-nowrap px-2 py-4 text-left">
                        {food._id}
                      </th>
                      <th className="border-b border-gray-200 align-middle font-light text-lg whitespace-nowrap px-2 py-4 text-left">
                        {food.foodName}
                      </th>
                      <th className="border-b border-gray-200 align-middle font-light text-lg whitespace-nowrap px-2 py-4 text-left">
                        {food.category}
                      </th>
                      <th className="border-b border-gray-200 align-middle font-light text-lg whitespace-nowrap px-2 py-4 text-left">
                        {food.type}
                      </th>
                      <th className="border-b border-gray-200 align-middle font-light text-lg whitespace-nowrap px-2 py-4 text-left">
                        <div className="flex">
                          <div className="w-24 h-24 rounded-full border-2 border-white">
                            <Image src={food.foodImage} rounded alt="..." />
                          </div>
                        </div>
                      </th>
                      <th className="border-b border-gray-200 align-middle font-light text-lg whitespace-nowrap px-2 py-4 text-left">
                        <button
                          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                          onClick={() => console.log(food._id)}
                        >
                          Edit
                        </button>
                        <button
                          class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
                          onClick={() => handleDelete(food._id)}
                        >
                          Delete
                        </button>
                        
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
                                  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                                    <div class="mb-4">
                                      <label
                                        class="block text-gray-700 text-sm font-bold mb-2"
                                        for="username"
                                      >
                                        Plaese Input This Food Code To Confirm
                                      </label>
                                      <input
                                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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

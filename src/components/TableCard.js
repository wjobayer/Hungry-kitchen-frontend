import Card from "@material-tailwind/react/Card";
import CardBody from "@material-tailwind/react/CardBody";
import CardHeader from "@material-tailwind/react/CardHeader";
import Image from "@material-tailwind/react/Image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFoods } from "../redux/actions/foodAction";
import {useNavigate} from "react-router-dom"
import Swal from "sweetalert2";
export default function CardTable() {
  const [control, setControl] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, foods } = useSelector((state) => state);
  useEffect(() => {
    dispatch(getFoods());
  }, [control]);

  // handle delete
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/foods/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          Swal.fire("Food Delete!", "Food successfully Delete!", "success");
          setControl(!control);
        }
      });
    console.log(id);
  };

  // handle update
  const handleUpdate = async (id) => {
    navigate(`/dashboard/addFood/${id}`)
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
                  <tbody className="hover:bg-gray-200">
                    <tr>
                      <th className="border-b border-gray-200 align-middle font-light text-lg whitespace-nowrap px-2 py-4 text-left">
                        {food.foodName}
                      </th>
                      <th className="border-b border-gray-200 align-middle font-light text-lg whitespace-nowrap px-2 py-4 text-left">
                        {food.category}
                      </th>
                      <th className="border-b border-gray-200 align-middle font-light text-lg whitespace-nowrap px-2 py-4 text-left">
                        {food.price}
                      </th>
                      <th className="border-b border-gray-200 align-middle font-light text-lg whitespace-nowrap px-2 py-4 text-left">
                        <div className="flex">
                          <div className="w-24 h-24 rounded-full flex">
                            <Image
                              className="self-center"
                              src={food.foodImage}
                              alt="..."
                            />
                          </div>
                        </div>
                      </th>
                      <th className="border-b border-gray-200 align-middle font-light text-lg whitespace-nowrap px-2 py-4 text-left">
                        <button
                          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                          onClick={() => handleUpdate(food._id)}
                        >
                          Edit
                        </button>
                        <button
                          class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
                          onClick={() => handleDelete(food._id)}
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

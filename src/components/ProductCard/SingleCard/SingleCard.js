import { React, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoMdCart } from "react-icons/io";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useFirebase from "../../../Hooks/useFirebase";
import { addToCart } from "../../../redux/slices/foodSlice";

const SingleCard = ({ food, loading, layout }) => {
  //Location tracking from order
  const offer = 15;
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    }
  }

  function showPosition(position) {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
    console.log(position);
  }
  const [closeTimeOut, setCloseTimeOut] = useState(0);
  if (closeTimeOut === 0) {
    setTimeout(() => {
      getLocation();
      setCloseTimeOut(1);
    }, 100);
  }

  const [counter, setCounter] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleDetails = (id) => {
    //push id to the useparams
    navigate(`/details/${id}`);
  };
  const { user } = useFirebase();
  const handleAddCart = (food) => {
    const newFood = {
      ...food,
      userEmail: user.email,
      latitude: latitude,
      longitude: longitude,
    };
    dispatch(addToCart(newFood));
    Swal.fire({
      position: "cneter",
      icon: "success",
      title: "Food added to the cart",
      showConfirmButton: false,
      timer: 1500,
    });
    setCounter(1);
  };
  if (loading) {
    return (
      <div className="single-card border rounded-lg border-gray-200 p-7  hover:shadow-lg hover:bg-orange-50">
        <div className="rounded-full object-cover p-20 w-40 mx-auto mb-4 skeleton" />
        <div>
          <div className="skeleton skeleton-text"></div>
          <div className="skeleton skeleton-text"></div>
        </div>

        <div className="my-5">
          <div className="skeleton skeleton-text"></div>
          <div className="skeleton skeleton-text"></div>
          <div className="skeleton skeleton-text"></div>
          <div className="skeleton skeleton-text"></div>
        </div>

        <div className="flex justify-between">
          <div className="flex w-5"></div>
          <div className="w-10 h-2 rounded-full bg-red-200 "></div>
        </div>
      </div>
      // <div className="flex justify-center mb-32">
      //   <p className="py-36 px-10 text-red-500 font-bold flex items-center text-xl bg-red-50 rounded-lg p-7 border border-gray-200">
      //     <BiLoaderCircle className="mr-2" /> Loading...
      //   </p>
      // </div>
    );
  }
  return (
    <div
      className={
        layout === "horizontal"
          ? "single-card single-card-horizontal "
          : "single-card"
      }
    >
      <div className="bg-red-500 text-white font-bold absolute -right-4 top-4 px-2 py-1">
        -{offer}%
      </div>
      <div className="w-full">
        <img
          className="rounded rounded-[50%] object-cover h-60 p-2 w-60 mx-auto"
          src={food.foodImage}
          alt="food pic"
        />
      </div>
      {/* ........................................................ */}
      <div>
        <h3 className="text-xl font-bold"> {food.foodName.slice(0, 40)}</h3>
        <p className="my-3.5 text-gray-600">
          {food.foodDescription.slice(0, 150)}...
        </p>
        {/* counter design  */}
        <div className="flex justify-between items-center">
          <div
            onClick={() => handleAddCart({ ...food, cartQuantity: counter })}
            className="rounded cursor-pointer ... px-4 bg-yellow-400 hover:bg-black hover:text-white   font-bold  p-2 duration-100 my-2 flex items-center"
          >
            <AiOutlineShoppingCart className="text-lg mr-2" /> Order now !
          </div>
          <div>
            <p className="text-xl text-gray-400">
              <del> ${food.price} </del>
            </p>
            <p className="text-xl font-bold text-red-500">
              ${(food.price - (food.price * offer) / 100).toFixed(2)}
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <button onClick={() => handleDetails(food._id)}>
            <p className="flex items-center">
              <IoMdCart className="mr-1" /> VIEW OPTIONS
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;

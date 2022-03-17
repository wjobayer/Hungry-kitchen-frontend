import React, { useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import HeaderBlack from "../../common/HeaderBlack";
import useFirebase from "../../Hooks/useFirebase";
import { addToCart } from "../../redux/slices/foodSlice";
import OfferModal from "../OfferModal";
import PaginationCompo from "../ProductCard/PaginationCompo";
import SingleCard from "../ProductCard/SingleCard/SingleCard";
import Footer from "./../../common/Footer";
const FoodDetails = () => {
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

  setTimeout(() => {
    getLocation();
  }, 100);
  // counter
  const [counter, setCounter] = useState(1);
  const handleSetCounter = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };
  const { user } = useFirebase();
  const Swal = require("sweetalert2");
  const [food, setFood] = useState([]);
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    fetch(`https://hungry-kitchen-app.herokuapp.com/foods/${id}`)
      .then((res) => res.json())
      .then((data) => setFood(data));
  }, [id]);

  //---------------------------related products filter //starts:------------------------------
  //pagination stuff-----------------------------------
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(4);

  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFoods = async () => {
      setLoading(true);

      const response = await fetch(
        `https://hungry-kitchen-app.herokuapp.com/foods/`
      );
      const json = await response.json();
      setFoods(json);
      setLoading(false);
    };
    fetchFoods();
    setCurrentPage(1);
  }, []);

  // Get Current Posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentFoods = foods.slice(indexOfFirstPost, indexOfLastPost);
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  //---------------------related products filter //ends:--------------------------

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

  return (
    <>
      <HeaderBlack />
      <OfferModal />
      <div className="container">
        <div className="grid grid-cols md:grid-cols-2">
          <div>
            <img className="rounded-3xl pr-3" src={food.foodImage} alt="" />
          </div>
          {/* details grid section  */}
          <div className="h-full">
            <h3 className="text-3xl font-bold">{food.foodName}</h3>
            <div className="flex">
              <p className="text-3xl text-gray-400 mr-4">
                <del> ${food.price} </del>
              </p>
              <p className="text-3xl font-bold text-red-500 mr-4">
                ${(food.price - (food.price * offer) / 100).toFixed(2)}
              </p>
              <p className="text-red-500 font-bold">(-{offer}% off)</p>
            </div>
            <div className="flex my-2">
              <p className="text-2xl mr-3">
                <span className="font-bold">Category:</span> {food.type}
              </p>
              <p className="text-2xl mr-3">
                <span className="font-bold">Area:</span> {food.category}
              </p>
            </div>
            <hr />
            <p className="text-lg mt-4">{food.foodDescription}</p>
            {/* counter design  */}
            <div className="flex justify-between mt-4">
              <div className="flex quantity-section">
                <div className="quantity-btn" onClick={handleSetCounter}>
                  -
                </div>
                <p className="quantity-counter">{counter}</p>
                <div
                  className="quantity-btn"
                  onClick={() => setCounter((prev) => counter + 1)}
                >
                  +
                </div>
              </div>
              <p className="text-xl font-bold text-red-500">${food.price}</p>
            </div>

            <button
              onClick={() => handleAddCart({ ...food, cartQuantity: counter })}
              className=" rounded ... px-6 bg-yellow-400 hover:bg-black hover:text-white   font-bold  p-4 duration-100 my-4 flex items-center"
            >
              <AiOutlineShoppingCart className="text-lg mr-2" /> Add to cart
            </button>
          </div>
        </div>
        {/* ------------------More related products----------- */}
        <hr className="my-4" />
        <h2 className="text-3xl font-bold my-4">Related Foods</h2>
        <div className="grid grid-cols sm:grid-cols md:grid-cols-3 lg:grid-cols-4 gap-10">
          {currentFoods.map((food) => (
            <SingleCard
              key={food._id}
              food={food}
              loading={loading}
            ></SingleCard>
          ))}
        </div>
        <PaginationCompo
          postPerPage={postPerPage}
          totalPosts={foods.length}
          paginate={paginate}
        />
      </div>
      <Footer />
    </>
  );
};

export default FoodDetails;

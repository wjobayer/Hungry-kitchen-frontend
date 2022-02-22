import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PaginationCompo from "../ProductCard/PaginationCompo";
import SingleCard from "../ProductCard/SingleCard/SingleCard";
import Header from "./../../common/Header";
import Footer from "./../../common/Footer";

const FoodDetails = () => {
  const [food, setFood] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((data) => setFood(data.meals[0]));
  }, [food]);

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
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=Italian`
      );
      const json = await response.json();
      setFoods(json.meals);
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

  return (
    <>
      <Header />
      <div className="container">
        <div className="grid grid-cols md:grid-cols-2">
          <div>
            <img className="rounded-3xl pr-3" src={food.strMealThumb} alt="" />
          </div>
          {/* details grid section  */}
          <div>
            <h3 className="text-3xl font-bold">{food.strMeal}</h3>
            <h3 className="text-3xl font-bold my-3 text-red-500">$9.99</h3>
            <div className="flex my-2">
              <p className="text-2xl mr-3">
                <span className="font-bold">Category:</span> {food.strCategory}
              </p>
              <p className="text-2xl mr-3">
                <span className="font-bold">Area:</span> {food.strArea}
              </p>
            </div>
            <hr />
            <p className="text-lg mt-4">{food.strInstructions}</p>
            <button className="rounded ... px-6 bg-yellow-400 hover:bg-black hover:text-white   font-bold  p-4 mt-7 duration-100 my-4">
              Add to cart
            </button>
          </div>
        </div>
        {/* ------------------More related products----------- */}
        <hr className="my-4" />
        <h2 className="text-3xl font-bold my-4">Related Foods</h2>
        <div className="grid grid-cols sm:grid-cols md:grid-cols-3 lg:grid-cols-4 gap-10">
          {currentFoods.map((food) => (
            <SingleCard
              key={food.idMeal}
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

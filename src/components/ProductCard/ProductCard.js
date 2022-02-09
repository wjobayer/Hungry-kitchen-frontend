import { React, useState, useEffect } from "react";
import SingleCard from "./SingleCard/SingleCard";
import { BiLoaderCircle } from "react-icons/bi";
import PaginationCompo from "./PaginationCompo";

const ProductCard = () => {
  const [country, setCountry] = useState("Indian");
  const handleFilter = (id) => {
    setCountry(id);
  };
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`
      )
        .then((res) => res.json())
        .then((data) => setFoods(data.meals));
      setLoading(false);
    };
    fetchBlogs();
  }, [country]);
  console.log(country);
  //pagination stuff-----------------------------------
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(8);
  // Get Current Posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentFoods = foods.slice(indexOfFirstPost, indexOfLastPost);
  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container px-7 mx-auto">
      <h2>This is product card</h2>
      <div className="my-5 flex justify-center">
        <div className="w-96">
          <p className="text-red-500 font-bold text-sm text-center tracking-wider">
            FRESH FROM OUR VENDORS
          </p>
          <h3 className="font-bold text-3xl  text-center">
            We Offer People Best Way To Eat Best Foods
          </h3>
        </div>
      </div>

      {/* -------------filter/query buttons ------------- */}
      <div className="flex justify-center flex-wrap">
        <button
          className="bg-red-500 text-sm text-white font-bold px-6 py-2 rounded-3xl duration-500 hover:bg-orange-400 mr-4 my-4 hover:shadow-xl active:shadow-none"
          onClick={() => handleFilter("Chinese")}
        >
          Chinese
        </button>
        <button
          className="bg-red-500 text-sm text-white font-bold px-6 py-2 rounded-3xl duration-500 hover:bg-orange-400 mr-4 my-4 hover:shadow-xl active:shadow-none "
          onClick={() => handleFilter("Indian")}
        >
          India
        </button>
        <button
          className="bg-red-500 text-sm text-white font-bold px-6 py-2 rounded-3xl duration-500 hover:bg-orange-400 mr-4 my-4 hover:shadow-xl active:shadow-none"
          onClick={() => handleFilter("Italian")}
        >
          Italian
        </button>
        <button
          className="bg-red-500 text-sm text-white font-bold px-6 py-2 rounded-3xl duration-500 hover:bg-orange-400 mr-4 my-4 hover:shadow-xl active:shadow-none"
          onClick={() => handleFilter("Canadian")}
        >
          Canadian
        </button>
        <button
          className="bg-red-500 text-sm text-white font-bold px-6 py-2 rounded-3xl duration-500 hover:bg-orange-400 mr-4 my-4 hover:shadow-xl active:shadow-none"
          onClick={() => handleFilter("Portuguese")}
        >
          Portuguese
        </button>
      </div>
      {/* ----------------------------------------------------------------------------------------- */}
      <div className="flex justify-center ">
        <div className="flex bg-red-50 p-3 rounded-3xl  mb-4">
          <h3 className="font-bold ">Here are all</h3>
          <h3 className="font-bold border-b-2 mx-2 border-red-500 text-red-500 ">
            {country}
          </h3>
          <h3 className="font-bold">foods from us</h3>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
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
  );
};

export default ProductCard;

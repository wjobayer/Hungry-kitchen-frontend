import { React, useState, useEffect } from "react";
import SingleCard from "./SingleCard/SingleCard";
// import { BiLoaderCircle } from "react-icons/bi";
import PaginationCompo from "./PaginationCompo";
import { RiLayoutGridFill } from "react-icons/ri";
import { FaListAlt } from "react-icons/fa";
const ProductCard = () => {
  const [country, setCountry] = useState("Italian");
  const [layout, setLayout] = useState("vertical");

  //pagination stuff-----------------------------------
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(8);

  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleFilter = (index) => {
    setCountry(index);
  };
  useEffect(() => {
    const fetchFoods = async () => {
      setLoading(true);

      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`
      );
      const json = await response.json();
      setFoods(json.meals);
      // .then((res) => res.json())
      // .then((data) => setFoods(data.meals));
      setLoading(false);
    };
    fetchFoods();
    setCurrentPage(1);
  }, [country]);
  console.log(country);

  // Get Current Posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentFoods = foods.slice(indexOfFirstPost, indexOfLastPost);
  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container px-7 mx-auto">
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
          className={
            country === "Italian" ? "product-btn-active" : "product-btn"
          }
          onClick={() => handleFilter("Italian")}
        >
          Italian
        </button>
        <button
          className={
            country === "Chinese" ? "product-btn-active" : "product-btn"
          }
          onClick={() => handleFilter("Chinese")}
        >
          Chinese
        </button>
        <button
          className={
            country === "Indian" ? "product-btn-active" : "product-btn"
          }
          onClick={() => handleFilter("Indian")}
        >
          Indian
        </button>

        <button
          className={
            country === "Canadian" ? "product-btn-active" : "product-btn"
          }
          onClick={() => handleFilter("Canadian")}
        >
          Canadian
        </button>
        <button
          className={
            country === "Portuguese" ? "product-btn-active" : "product-btn"
          }
          onClick={() => handleFilter("Portuguese")}
        >
          Portuguese
        </button>
      </div>
      {/* ----------------------------------------------------------------------------------------- */}
      <div className="flex justify-between">
        <div className="flex justify-center ">
          <div className="flex  p-3 rounded-lg  mb-4">
            <h3 className="font-bold ">Here are all</h3>
            <h3 className="font-bold border-b-2 mx-2 border-yellow-500 text-yellow-500 ">
              {country}
            </h3>
            <h3 className="font-bold">foods from us</h3>
          </div>
        </div>
        <div className="flex">
          <div
            className={
              layout == "vertical"
                ? "text-4xl mr-2 text-yellow-400"
                : "text-4xl mr-2"
            }
            onClick={() => setLayout("vertical")}
          >
            <RiLayoutGridFill />
          </div>
          <div
            className={
              layout == "horizontal"
                ? "text-4xl mr-2 text-yellow-400"
                : "text-4xl mr-2"
            }
            onClick={() => setLayout("horizontal")}
          >
            <FaListAlt />
          </div>
        </div>
      </div>

      <div
        className={
          layout == "horizontal"
            ? "grid grid-cols sm:grid-cols md:grid-cols-2 lg:grid-cols-2 gap-10"
            : "grid grid-cols sm:grid-cols md:grid-cols-3 lg:grid-cols-4 gap-10"
        }
      >
        {currentFoods.map((food) => (
          <SingleCard
            key={food.idMeal}
            food={food}
            loading={loading}
            layout={layout}
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

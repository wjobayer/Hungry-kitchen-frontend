import React, { useEffect, useState } from "react";
import { AiOutlineFileSearch } from "react-icons/ai";
import { FaListAlt } from "react-icons/fa";
import { RiLayoutGridFill } from "react-icons/ri";
import Footer from "../common/Footer";
import HeaderBlack from "../common/HeaderBlack";
import PaginationCompo from "./ProductCard/PaginationCompo";
import SingleCard from "./ProductCard/SingleCard/SingleCard";
import SearchFood from "./SearchFood";

const SearchResult = () => {
  const [loading, setLoading] = useState(true);
  const [searchResult, setSearchResult] = useState([]);
  const [searchQuery, setSearchQuery] = useState("chicken");
  //pagination stuff-----------------------------------
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(12);
  const [layout, setLayout] = useState("vertical");

  useEffect(() => {
    const fetchFoods = async () => {
      setLoading(true);

      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`
      );
      const json = await response.json();
      setSearchResult(json.meals);
      setLoading(false);
    };
    fetchFoods();
    setCurrentPage(1);
  }, [searchQuery]);

  //   const handleFilter = (index) => {
  //     setCategory(index);
  //   };

  // Get Current Posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentFoods = searchResult
    ? searchResult.slice(indexOfFirstPost, indexOfLastPost)
    : null;

  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  if (currentFoods === null) {
    return (
      <>
        <HeaderBlack />
        <div className="container">
          <SearchFood setSearchQuery={setSearchQuery} />
          <div className="h-full py-20 flex flex-col items-center justify-center">
            <AiOutlineFileSearch className="text-[100px]" />
            <p className="text-2xl font-bold py-4">Sorry! No Result Found</p>
            <p className="text-lg text-center">
              Your keyword <b>"{searchQuery}"</b> dosen't match with our
              database.
            </p>
          </div>
        </div>
        <Footer />
      </>
    );
  }
  return (
    <>
      <HeaderBlack/>
      <div className="container">
        <SearchFood setSearchQuery={setSearchQuery} />
        <div className="flex my-2">
          <div
            className={
              layout === "vertical" ? "layout layout-active" : "layout"
            }
            onClick={() => setLayout("vertical")}
          >
            <RiLayoutGridFill />
          </div>
          <div
            className={
              layout === "horizontal" ? "layout layout-active" : "layout"
            }
            onClick={() => setLayout("horizontal")}
          >
            <FaListAlt />
          </div>
        </div>
        <p className="text-xl py-3">
          Showing <b>{searchResult.length} </b> Result
        </p>
        <div
          className={
            layout === "horizontal"
              ? "grid grid-cols sm:grid-cols md:grid-cols lg:grid-cols gap-10"
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
        <div className="flex justify-center my-4">
          <PaginationCompo
            postPerPage={postPerPage}
            totalPosts={searchResult.length}
            paginate={paginate}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SearchResult;

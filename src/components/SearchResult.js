import React, { useEffect, useState } from "react";
import { AiOutlineFileSearch } from "react-icons/ai";
import { FaListAlt } from "react-icons/fa";
import { RiLayoutGridFill } from "react-icons/ri";
import { useParams } from "react-router-dom";
import Footer from "../common/Footer";
import HeaderBlack from "../common/HeaderBlack";
import PaginationCompo from "./ProductCard/PaginationCompo";
import SingleCard from "./ProductCard/SingleCard/SingleCard";
import SearchFood from "./SearchFood";

const SearchResult = () => {
  const { searchText } = useParams();
  console.log(searchText);
  const [loading, setLoading] = useState(true);
  const [allFoods, setAllFoods] = useState([]);
  const [searchQuery, setSearchQuery] = useState(searchText || "chicken");

  useEffect(() => {
    const fetchFoods = async () => {
      setLoading(true);

      const response = await fetch(
        `https://hungry-kitchen-app.herokuapp.com/foods`
      );
      const json = await response.json();
      setAllFoods(json);
      setLoading(false);
    };
    fetchFoods();
    setCurrentPage(1);
  }, [searchQuery]);

  const searchResult = allFoods.filter((result) => {
    if (searchQuery === "") {
      return result;
    } else if (
      result.foodName.toLowerCase().includes(searchQuery.toLocaleLowerCase())
    ) {
      return result;
    }
  });
  //pagination stuff-----------------------------------
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(12);
  const [layout, setLayout] = useState("vertical");

  // Get Current Posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentFoods = searchResult
    ? searchResult.slice(indexOfFirstPost, indexOfLastPost)
    : null;

  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  if (currentFoods.length === 0) {
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
      <HeaderBlack />
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
          Showing result of <b>"{searchQuery}"</b> and found{" "}
          <b>{searchResult.length} </b> Result
        </p>
        <div
          className={
            layout === "horizontal"
              ? "grid grid-cols sm:grid-cols md:grid-cols-2 lg:grid-cols-2 gap-10"
              : "grid grid-cols sm:grid-cols md:grid-cols-3 lg:grid-cols-4 gap-10"
          }
        >
          {currentFoods.map((food) => (
            <SingleCard
              key={food._id}
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

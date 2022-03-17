import { React, useState } from "react";

const SearchFood = ({ setSearchQuery }) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(search);
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSearch} className=" flex">
        <input
          type="text"
          name=""
          id=""
          value={search}
          className="placeholder:italic placeholder:text-slate-400 border border-gray-300 px-7 py-3 rounded w-96"
          placeholder="search here"
          onChange={(event) => setSearch(event.target.value)}
        />
        <input
          type="submit"
          value="search"
          className="bg-yellow-400 px-7 py-3 duration-200 rounded w-48 hover:text-white hover:bg-black"
        />
      </form>
    </div>
  );
};

export default SearchFood;

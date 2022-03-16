import { React, useState } from "react";

const SearchFood = ({ setSearchQuery }) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(search);
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSearch} className="w-1/2 flex">
        <input
          type="text"
          name=""
          id=""
          value={search}
          className="placeholder:italic placeholder:text-slate-400 border border-gray-300 px-7 py-3 rounded "
          placeholder="search here"
          onChange={(event) => setSearch(event.target.value)}
        />
        <input
          type="submit"
          value="search"
          className="bg-yellow-400 px-7 py-3 duration-200 rounded w-60 hover:text-white hover:bg-black"
        />
      </form>
    </div>
  );
};

export default SearchFood;

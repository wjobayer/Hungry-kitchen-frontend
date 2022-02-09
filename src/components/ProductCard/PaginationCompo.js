import React from "react";

const PaginationCompo = ({ postPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <nav>
        <div className="flex justify-center">
          <div className="flex mt-5">
            {pageNumbers.map((number) => (
              <div
                key={number}
                className="mr-3 rounded-full p-3 pr-5 pl-5 bg-red-100 cursor-pointer shadow-md hover:shadow-lg"
              >
                <p
                  onClick={() => paginate(number)}
                  className="text-red-500 font-bold"
                >
                  {number}
                </p>
              </div>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default PaginationCompo;

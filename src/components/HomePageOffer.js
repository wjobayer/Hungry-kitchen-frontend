import React from "react";
import { useNavigate } from "react-router-dom";

const HomePageOffer = () => {
  const navigate = useNavigate();
  return (
    <div className="container flex justify-center mt-12">
      <div className="md:flex lg:flex">
        <div className="mr-4 mb-4">
          <img
            onClick={() => navigate("category/breakfast")}
            className="cursor-pointer"
            src="https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/03/add01.jpg"
            alt=""
          />
        </div>

        <div>
          <div className="md:flex lg:flex">
            <img
              onClick={() => navigate("category/breakfast")}
              className="mr-4 mb-4 cursor-pointer"
              src="https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/03/add02.jpg"
              alt=""
            />
            <img
              className="mb-4 cursor-pointer"
              src="https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/03/add03.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              onClick={() => navigate("category/breakfast")}
              className="cursor-pointer"
              src="https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/03/add04.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageOffer;

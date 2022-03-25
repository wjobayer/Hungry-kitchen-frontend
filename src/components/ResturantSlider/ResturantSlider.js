import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import SingleSlider from "./SingleSlider";
export default function ResturantSlider() {
  const [resturants, setResturants] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/resturants")
      .then((res) => res.json())
      .then((data) => setResturants(data));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container my-8">
      <div className="my-5 flex justify-center">
        <div className="w-96">
          <p className="text-red-500 font-bold text-sm text-center tracking-wider">
            GET FOOD FROM OUR BEST RESTURANT
          </p>
          <h3 className="font-bold text-3xl  text-center">
            We are connected with the best resturant
          </h3>
        </div>
      </div>
      <Slider {...settings}>
        {resturants.map((resturant) => (
          <SingleSlider key={resturant._id} resturant={resturant} />
        ))}
      </Slider>
    </div>
  );
}

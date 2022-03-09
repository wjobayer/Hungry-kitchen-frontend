/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { IoMdQuote } from "react-icons/io";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const PreviousBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <FaLongArrowAltLeft className="p-2 text-4xl font-extrabold text-white rounded-full shadow-lg" />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <FaLongArrowAltRight className="p-2 text-4xl text-white rounded-full shadow-lg" />
    </div>
  );
};

const carouselProperties = {
  prevArrow: <PreviousBtn />,
  nextArrow: <NextBtn />,
  slidesToShow: 3,
  centerMode: true,
  centerPadding: "200px",
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        centerMode: false,
      },
    },
    {
      breakpoint: 2000,
      settings: {
        slidesToShow: 2,
        centerMode: false,
        slidesToScroll: 1,
      },
    },
  ],
};

const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("/reviewdata.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <>
      <div className="container">
        <div className="mt-12">
          <span className="text-center block uppercase text-red-600 relative mb-4">
            our all testimonials
          </span>
          <h2 className="uppercase text-center text-gray-900 text-6xl font-bold mb-5">
            testimonials
          </h2>
        </div>
        <div className="container mx-auto carousel section-padding">
          <Slider {...carouselProperties}>
            {reviews.map((item, index) => (
              <Card key={index} item={item} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

const Card = ({ item }) => {
  return (
    <div className="single-review-item">
      <ul className="single-review-item__ratting">
        <li>
          <AiOutlineStar />
        </li>
        <li>
          <AiOutlineStar />
        </li>
        <li>
          <AiOutlineStar />
        </li>
        <li>
          <AiOutlineStar />
        </li>
        <li>
          <AiOutlineStar />
        </li>
      </ul>
      <p>{item.description}</p>
      <div className="single-review-item__info">
        <img src={item.img} alt="image" />
        <h3>{item.name}</h3>
        <span>{item.title}</span>
      </div>
      <div className="single-review-item__quote-icon">
        <ul>
          <li>
            <IoMdQuote />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Review;

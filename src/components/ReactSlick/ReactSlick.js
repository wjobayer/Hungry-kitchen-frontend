import React from 'react';
import Slider from "react-slick";
const ReactSlick = () => {
    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      focusOnSelect: false,
      cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <div className='py-16 container'>
        <Slider {...settings}>
          <div className='focus:outline-none'>
            <img className='mx-auto w-3/4' src="https://marketplace.foodotawp.com/wp-content/uploads/2021/05/04.png" alt="" />
          </div>
          <div className='focus:outline-none'>
            <img className='mx-auto w-3/4' src="https://marketplace.foodotawp.com/wp-content/uploads/2021/05/02.png" alt="" />
          </div>
          <div className='focus:outline-none'>
            <img className='mx-auto w-3/4' src="https://marketplace.foodotawp.com/wp-content/uploads/2021/05/01.png" alt="" />
          </div>
          <div className='focus:outline-none'>
            <img className='mx-auto w-3/4' src="https://marketplace.foodotawp.com/wp-content/uploads/2021/05/03.png" alt="" />
          </div>
          <div className='focus:outline-none'>
           <img className='mx-auto w-3/4' src="https://marketplace.foodotawp.com/wp-content/uploads/2021/05/06.png" alt="" />
          </div>
          <div className='focus:outline-none'>
          <img className='mx-auto w-3/4' src="https://marketplace.foodotawp.com/wp-content/uploads/2021/05/04.png" alt="" />
          </div>
          <div className='focus:outline-none'>
          <img className='mx-auto w-3/4' src="https://marketplace.foodotawp.com/wp-content/uploads/2021/05/02.png" alt="" />
          </div>
          <div className='focus:outline-none'>
          <img className='mx-auto w-3/4' src="https://marketplace.foodotawp.com/wp-content/uploads/2021/05/01.png" alt="" />
          </div>
        </Slider>
      </div>
    );
};

export default ReactSlick;
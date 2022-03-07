import React from "react";
import { AiOutlineMinus } from "react-icons/ai";

const AboutUs = () => {
  return (
    <>
      <div className="about-us">
        <div className="about-us__header">
          <div className="about-us__header__wrapper">
            <h2 className="about-us__header__wrapper__title">About Us</h2>
            <p className="about-us__header__wrapper__subtitle">
              <span>Home</span>
              <AiOutlineMinus />
              <span>About</span>
            </p>
          </div>
        </div>

        <div className="about-us__content">
          <div className="about-us__content__wrapper">
            <div className="">
              <div className="grid grid-cols-12 gap-4">
                <div className="md:col-span-8 col-span-12">
                  <div className="">
                    <div className="grid grid-cols-12 gap-6">
                      <div className="sm:col-span-6 col-span-12">
                        <div className="">
                          <img
                            src="http://my-templates.online/deli-taste/assets/images/resources/abt1.jpg"
                            alt=""
                            className="w-full"
                          />
                        </div>
                      </div>
                      <div className="sm:col-span-6 col-span-12">
                        <div className="">
                          <img
                            src="http://my-templates.online/deli-taste/assets/images/resources/abt2.jpg"
                            alt=""
                            className="w-full"
                          />
                        </div>
                      </div>
                    </div>
                    <h4 className="about-us__content__subtitle">
                      We deliver food as soon as possible. Our team works seven
                      days a week and is always ready to answer any of your
                      questions.
                    </h4>
                    <p className="about-us__content__description">
                      We are a team of hardworking and friendly people who work
                      every day on a common goal for more than 5 years. Each
                      ctro at us begins with coffee. Together we develop, grow
                      and relax. More than 50 restaurants and cafes cooperate
                      with us. More than 250 employees are working to improve
                      our service. We always work for our beloved customers and
                      try to be on top. We have a favorable system of discounts
                      for regular customers and good conditions for cooperation
                      with partners.
                    </p>
                  </div>
                </div>
                <div className="md:col-span-4 col-span-12">
                  <div className="p-4">
                    <div className="mb-12">
                      <div className="flex gap-6 items-center mb-5">
                        <div className="flex justify-center ">
                          <img
                            src="http://my-templates.online/deli-taste/assets/images/icons/discount.svg"
                            alt=""
                            className="block w-10 h-10"
                          />
                        </div>
                        <h3 className="font-semibold text-lg capitalize">
                          discount system
                        </h3>
                      </div>
                      <p className="text-gray-600">
                        We have a favorable discount system for our regular
                        customers delivery to any location of your city.
                      </p>
                    </div>
                    <div className="mb-12">
                      <div className="flex gap-6 items-center mb-5">
                        <div className="flex justify-center ">
                          <img
                            src="http://my-templates.online/deli-taste/assets/images/icons/delivery.svg"
                            alt=""
                            className="block w-10 h-10"
                          />
                        </div>
                        <h3 className="font-semibold text-lg capitalize">
                          50+ Restaurants
                        </h3>
                      </div>
                      <p className="text-gray-600">
                        Large selection of restaurants and cafes throughout the
                        country delivery to any location of your city.
                      </p>
                    </div>
                    <div className="mb-12">
                      <div className="flex gap-6 items-center mb-5">
                        <div className="flex justify-center ">
                          <img
                            src="http://my-templates.online/deli-taste/assets/images/icons/food.svg"
                            alt=""
                            className="block w-10 h-10"
                          />
                        </div>
                        <h3 className="font-semibold text-lg capitalize">
                          discount system
                        </h3>
                      </div>
                      <p className="text-gray-600">
                        We have a favorable discount system for our regular
                        customers delivery to any location of your city.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;

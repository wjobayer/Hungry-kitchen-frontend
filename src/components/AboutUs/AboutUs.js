// import React from "react";
// import { AiOutlineMinus } from "react-icons/ai";
// import { Link } from "react-router-dom";

// const AboutUs = () => {
//   return (
//     <>
//       <div className="about-us">
//         <div className="about-us__header">
//           <div className="about-us__header__wrapper">
//             <h2 className="about-us__header__wrapper__title">About Us</h2>
//             <p className="about-us__header__wrapper__subtitle">
//               <span>
//                 <Link to="/">Home</Link>
//               </span>
//               <AiOutlineMinus />
//               <span>About Us</span>
//             </p>
//           </div>
//         </div>

//         <div className="about-us__content">
//           <div className="about-us__content__wrapper">
//             <div className="">
//               <div className="grid grid-cols-12 gap-4">
//                 <div className="md:col-span-8 col-span-12">
//                   <div className="">
//                     <div className="grid grid-cols-12 gap-6">
//                       <div className="sm:col-span-6 col-span-12">
//                         <div className="">
//                           <img
//                             src="http://my-templates.online/deli-taste/assets/images/resources/abt1.jpg"
//                             alt=""
//                             className="w-full"
//                           />
//                         </div>
//                       </div>
//                       <div className="sm:col-span-6 col-span-12">
//                         <div className="">
//                           <img
//                             src="http://my-templates.online/deli-taste/assets/images/resources/abt2.jpg"
//                             alt=""
//                             className="w-full"
//                           />
//                         </div>
//                       </div>
//                     </div>
//                     <h4 className="about-us__content__subtitle">
//                       We deliver food as soon as possible. Our team works seven
//                       days a week and is always ready to answer any of your
//                       questions.
//                     </h4>
//                     <p className="about-us__content__description">
//                       We are a team of hardworking and friendly people who work
//                       every day on a common goal for more than 5 years. Each
//                       ctro at us begins with coffee. Together we develop, grow
//                       and relax. More than 50 restaurants and cafes cooperate
//                       with us. More than 250 employees are working to improve
//                       our service. We always work for our beloved customers and
//                       try to be on top. We have a favorable system of discounts
//                       for regular customers and good conditions for cooperation
//                       with partners.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="md:col-span-4 col-span-12">
//                   <div className="p-4">
//                     <div className="mb-12">
//                       <div className="flex gap-6 items-center mb-5">
//                         <div className="flex justify-center ">
//                           <img
//                             src="http://my-templates.online/deli-taste/assets/images/icons/discount.svg"
//                             alt=""
//                             className="block w-10 h-10"
//                           />
//                         </div>
//                         <h3 className="font-semibold text-lg capitalize">
//                           discount system
//                         </h3>
//                       </div>
//                       <p className="text-gray-600">
//                         We have a favorable discount system for our regular
//                         customers delivery to any location of your city.
//                       </p>
//                     </div>
//                     <div className="mb-12">
//                       <div className="flex gap-6 items-center mb-5">
//                         <div className="flex justify-center ">
//                           <img
//                             src="http://my-templates.online/deli-taste/assets/images/icons/delivery.svg"
//                             alt=""
//                             className="block w-10 h-10"
//                           />
//                         </div>
//                         <h3 className="font-semibold text-lg capitalize">
//                           Express Delivery
//                         </h3>
//                       </div>
//                       <p className="text-gray-600">
//                         Large selection of restaurants and cafes throughout the
//                         country delivery to any location of your city.
//                       </p>
//                     </div>
//                     <div className="mb-12">
//                       <div className="flex gap-6 items-center mb-5">
//                         <div className="flex justify-center ">
//                           <img
//                             src="http://my-templates.online/deli-taste/assets/images/icons/food.svg"
//                             alt=""
//                             className="block w-10 h-10"
//                           />
//                         </div>
//                         <h3 className="font-semibold text-lg capitalize">
//                           50+ Restaurantss
//                         </h3>
//                       </div>
//                       <p className="text-gray-600">
//                         We have a favorable discount system for our regular
//                         customers delivery to any location of your city.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AboutUs;
import React from "react";
import Footer from "../../common/Footer";
import HeaderBlack from "../../common/HeaderBlack";

const AboutUs = () => {
  return (
    <div>
      <HeaderBlack></HeaderBlack>
      <div
        style={{
          backgroundImage: `url("https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/themes/panpie/assets/img/banner.png") `,
          backgroundRepeat: "no-repeat",
          height: "50vh",
          marginTop: "-250px",
        }}
        className="lg:pb-44 sm:pb-40 "
      ></div>
      <h2
        style={{ marginTop: "-150px", marginBottom: "150px" }}
        className="text-3xl font-bold flex justify-center"
      >
        ABout Us
      </h2>

      <div className="flex container  justify-center">
        <img
          src="https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/01/about01.jpg"
          alt=""
        />
        <div className="ml-20">
          <p style={{ color: "#F43127" }} className="text-1xl font-bold mb-5">
            PANPIE HISTORY
          </p>
          <p className="text-3xl font-bold mb-5">
            Order Food, Get Instant Delivery
            <br />
            <span style={{ color: "#FDB702" }}>AnyTime 24/7</span>
          </p>
          <p style={{ color: "#646464" }} className="text-1xl">
            Our Pizzahen an unknown printer took a galley type and scrambled
            make type <br /> specimen book. It has survived not only five
            centuries, but also the leap into <br />
            electronic typesetting, remaining essentially unchanged. It was{" "}
            <br /> popularisedsheets containing.
          </p>
        </div>
      </div>
      <div
        style={{ alignItems: "flex-end" }}
        className="flex justify-evenly mt-8 mb-20"
      >
        <img
          src="https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/01/shape24.png"
          alt=""
        />
        <img
          src="https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/01/about02.jpg"
          alt=""
        />
        <img
          src="https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/01/about03.jpg"
          alt=""
        />
        <img
          src="https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/01/shape23.png"
          alt=""
        />
      </div>

      <Footer></Footer>
    </div>
  );
};

export default AboutUs;

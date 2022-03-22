import React from "react";
import { useForm } from "react-hook-form";
import Header from "../../common/Header";

const CourierForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    console.log(data);
  };
  return (
    <div className="courier-featured">
      <Header />
      <div className="container">
        <h2 className="text-center sm:text-3xl md:text-4xl pb-12">
          DELIVERY <span className="sub-title">Rider Info</span>
        </h2>
        <div className="courier-featured__wrapper">
          <div className="courier-featured__form-area p-8 bg-gray-200 hover:shadow-2xl rounded-lg transition-all duration-300 ease-in-out">
            <form className="mx-auto" onSubmit={handleSubmit(submitHandler)}>
              <label>
                <span className="block mt-5">Name</span>
                <input
                  type="text"
                  name="name"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "You must enter name",
                    },
                  })}
                  className={`${
                    errors.name ? "ring-2 ring-red-500" : null
                  } "block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-md shadow"`}
                  placeholder="Enter Your Full name"
                />
                <span className="py-2 text-sm text-red-400">
                  {errors?.name?.message}
                </span>
              </label>
              <label>
                <span className="block mt-5">Email</span>
                <input
                  type="email"
                  name="Email"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "You must enter email address",
                    },
                    minLength: {
                      value: 8,
                      message: "This is not long enough to be an email",
                    },
                    maxLength: {
                      value: 120,
                      message: "This is too long",
                    },
                    pattern: {
                      value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                      message: "invalid email address",
                    },
                  })}
                  className={`${
                    errors.email ? "ring-2 ring-red-500" : null
                  } "block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-md shadow"`}
                  placeholder="Enter Your Email"
                />
                <span className="py-2 text-sm text-red-400">
                  {errors?.email?.message}
                </span>
              </label>
              <label>
                <span className="block mt-5 ">Address</span>
                <input
                  type="text"
                  name="address"
                  {...register("address", {
                    required: {
                      value: true,
                      message: "You must enter address",
                    },
                  })}
                  className={`${
                    errors.address ? "ring-2 ring-red-500" : null
                  } "block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-md shadow"`}
                  placeholder="Enter Your Address"
                />
                <span className="py-2 text-sm text-red-400">
                  {errors?.address?.message}
                </span>
              </label>
              <label>
                <span className="block mt-5">Phone Number</span>
                <input
                  type="number"
                  name="Phone"
                  {...register("phone", {
                    required: {
                      value: true,
                      message: "You must enter phone Number",
                    },
                  })}
                  className={`${
                    errors.phone ? "ring-2 ring-red-500" : null
                  } "block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-md shadow"`}
                  placeholder="Enter Your Phone Number"
                />
                <span className="py-2 text-sm text-red-400">
                  {errors?.phone?.message}
                </span>
              </label>

              <span className="w-full mx-auto">
                <input
                  type="submit"
                  className="w-full mt-5 font-bold p-4 text-gray-900 rounded btn-brand"
                  value="Submit Form"
                />
              </span>
            </form>
          </div>
          <div className="courier-featured__image">
            <div className="flex justify-center hover:shadow-2xl transition-all duration-300 ease-in-out">
              <img src="https://i.ibb.co/2Y69mCt/delivery.jpg" alt="2913" />
              {/* https://i.ibb.co/V33Lh5r/food-delivery.jpg */}
              {/* https://i.ibb.co/2Y69mCt/delivery.jpg */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourierForm;

import React from "react";
import { useForm } from "react-hook-form";

const RestaurantForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    console.log(data);
  };
  return (
    <div className="container bg-gray-900 py-32">
      <h2 className="text-center sm:text-3xl md:text-4xl text-white">
        Restaurant Info
      </h2>
      <form className="w-2/4 mx-auto" onSubmit={handleSubmit(submitHandler)}>
        <label>
          <span className="block mt-5 text-white">Name</span>
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
          <span className="block mt-5 text-white">Email</span>
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
          <span className="block mt-5 text-white">Restaurant Name</span>
          <input
            type="text"
            name="restaurant"
            {...register("name", {
              required: {
                value: true,
                message: "You must enter restaurant",
              },
            })}
            className={`${
              errors.name ? "ring-2 ring-red-500" : null
            } "block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-md shadow"`}
            placeholder="Enter Your Restaurant Name"
          />
          <span className="py-2 text-sm text-red-400">
            {errors?.name?.message}
          </span>
        </label>
        <label>
          <span className="block mt-5 text-white">Address</span>
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
          <span className="block mt-5 text-white">Phone Number</span>
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
              errors.address ? "ring-2 ring-red-500" : null
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
  );
};

export default RestaurantForm;

/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import {
  unstable_HistoryRouter,
  useLocation,
  useNavigate,
} from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";

const Login = () => {
  const {
    user,
    admin,
    isLoading,
    authError,
    loginWithGoogle,
    registerUser,
    loginUser,
    logout,
  } = useFirebase();

  const location = useLocation();
  const navigate = useNavigate();
  const redirect_uri = location.state?.from || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data, e) => {
    e.target.reset();
    console.log(data);

    const { email, password } = data;

    loginUser(email, password, location, navigate);
  };

  const handleGoogleLogin = () => {
    loginWithGoogle().then((result) => {
      console.log("google login done");
      navigate(redirect_uri);
    });
  };

  console.log(errors);
  // console.log(authError);

  return (
    <div className="">
      <div className="w-full flex flex-wrap">
        {/* <!-- Login Section --> */}
        <div className="w-full md:w-1/2 lg:mb-32 flex flex-col">
          <div className="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24">
            {/* <a href="#" className="bg-black text-white font-bold text-xl p-4" >Logo</a> */}
          </div>

          <div className="flex flex-col justify-center md:justify-start mt-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
            <p className="text-center text-3xl">Welcome!</p>

            {/* form */}
            <form
              className="flex flex-col pt-3 md:pt-8"
              onSubmit={handleSubmit(onSubmit)}
            >
              {/* Email */}
              <div className="flex flex-col pt-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  for="email"
                >
                  Email <span className="text-red-500 text-xs">*</span>
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="text"
                  placeholder="email"
                  {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                />
              </div>

              <div className="pt-4 ">
                <div className="w-full mr-2">
                  <label for="password" className="text-lg">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    {...register("password", { required: true, maxLength: 6 })}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
              </div>

              <input
                type="submit"
                value="Log In"
                className="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8"
              />
            </form>

            <div className="text-center pt-12 pb-12">
              <p>
                Already have an account? <br />{" "}
                <a href="#" className="underline font-semibold">
                  Register here.
                </a>
              </p>
            </div>
          </div>

          <div className="mb-5">
            <div className="w-1/2 mx-auto flex items-center justify-between py-5">
              <hr className="w-1/2 bg-gray-400" />
              <p className="text-base font-medium leading-4 px-2.5 ">OR </p>
              <hr className="w-1/2 bg-gray-400  " />
            </div>

            <div className="text-center mb-5">
              <br />{" "}
              <strong className=" text-center text-decoration-line: underline">
                Easy login
              </strong>
            </div>

            {/* Social login */}
            <div className="flex justify-center px-5">
              <button
                aria-label="Continue with google"
                role="button"
                className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-80 mr-5"
                onClick={handleGoogleLogin}
              >
                <FcGoogle />
                <p className="text-base font-medium ml-4 text-gray-700">
                  with Google
                </p>
              </button>

              <button
                aria-label="Continue with google"
                role="button"
                className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-80 "
              >
                <FaFacebookF className="fill-blue-700" />
                <p className="text-base font-medium ml-4 text-gray-700">
                  with Facebook
                </p>
              </button>
            </div>
          </div>

          <p className="text-center text-gray-500 text-xs">
            &copy;2022 Hungry Kitchen Ltd. All rights reserved.
          </p>
        </div>

        {/* image section */}
        <div className="w-1/2 shadow-2xl">
          <img
            className="object-cover w-full h-screen hidden md:block"
            src="https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;

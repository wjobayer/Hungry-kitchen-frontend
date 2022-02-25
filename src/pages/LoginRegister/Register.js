import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useFirebase from "../../Hooks/useFirebase";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const {
    user,
    isLoading,
    authError,
    loginWithGoogle,
    registerUser,
    loginUser,
    logout,
  } = useFirebase();

  // register
  const onSubmit = (data, e) => {
    e.target.reset();
    console.log(data);

    const { name, email, password, retypePassword } = data;

    if (password !== retypePassword) {
      // console.log('not matched')
      alert("Your password did not match");
    } else {
      console.log("matched");
      registerUser(name, email, password, navigate);
    }
  };

  // useNavigate usage
  const location = useLocation();
  const navigate = useNavigate();
  const redirect_uri = location.state?.from || "/";

  // Google login
  const handleGoogleLogin = () => {
    loginWithGoogle().then((result) => {
      console.log("google login done");
      navigate(redirect_uri);
    });
  };

  return (
    <div className="">
      <div className="w-full flex flex-wrap">
        {/* <!-- Login Section --> */}
        <div className="w-full md:w-1/2 flex flex-col">
          <div className="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24">
            {/* <a href="#" className="bg-black text-white font-bold text-xl p-4" >Logo</a> */}
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
                Continue with Google
              </p>
            </button>

            <button
              aria-label="Continue with google"
              role="button"
              className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-80 "
            >
              <FaFacebookF className="fill-blue-700" />
              <p className="text-base font-medium ml-4 text-gray-700">
                Continue with Facebook
              </p>
            </button>
          </div>
        </div>

        <p className="text-center text-gray-500 text-xs">
          &copy;2022 Hungry Kitchen Ltd. All rights reserved.
        </p>
      </div>

      {/* <!-- Image Section --> */}
      <div className="w-1/2 shadow-2xl">
        <img
          className="object-cover w-full h-screen hidden md:block"
          src="https://images.unsplash.com/photo-1641301547846-2cf73f58fdca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=881&q=80"
        />
      </div>
    </div>
  );
};

export default Register;

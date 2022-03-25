import React, { useState } from "react";

const UserProfileForm = () => {
  const [foodInfo, setFoodInfo] = useState({
    foodName: "",
    foodPrice: "",
    foodCategory: "",
    foodArea: "",
    foodDescription: "",
  });

  const [foodPic, setFoodPic] = useState();
  const handleChange = (e) => {
    setFoodInfo({ ...foodInfo, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    setFoodPic(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!foodPic) {
      return;
    }

    const { foodName, foodArea, foodCategory, foodDescription, foodPrice } =
      foodInfo;

    const formData = new FormData();
    formData.append("foodName", foodName);
    formData.append("foodPrice", foodPrice);
    formData.append("foodCategory", foodCategory);
    formData.append("foodArea", foodArea);
    formData.append("foodDescription", foodDescription);
    formData.append("foodPic", foodPic);
    // await axios.post("https://hungry-kitchen-app.herokuapp.com/food", formData)
    //     .then(res => console.log(res.data))
  };
  return (
    <div>
      <h1 className="rider__wrapper__area__title">
        Provide Your Update User Profile Info
      </h1>
      <form className="rider__wrapper__area__form">
        <label for="grid-first-name">User Name</label>
        <input
          className=""
          id="grid-first-name"
          type="text"
          placeholder="Your User Name"
        />
        <p className="text-gray-600 text-xs italic mb-4">
          Please fill out this field.
        </p>

        <div className="mb-3 w-full">
          <label for="formFile">User Image</label>
          <input type="file" id="formFile" />
        </div>
        <p className="text-gray-600 text-xs italic mb-4">
          Please fill out this field.
        </p>
        <label for="grid-number">Phone Number</label>
        <input
          className=""
          id="number"
          type="number"
          placeholder="Your Phone Number"
        />
        <p className="text-gray-600 text-xs italic mb-4">
          Please fill out this number.
        </p>
        <label for="grid-password">Password</label>
        <input
          className=""
          id="grid-password"
          type="password"
          placeholder="******************"
        />
        <p className="text-gray-600 text-xs italic  mb-4">
          Make it as long and as crazy as you'd like
        </p>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label for="grid-city">City</label>
            <input
              className=""
              id="grid-city"
              type="text"
              placeholder="Dhaka City"
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label for="grid-state">Area</label>
            <div className="relative mb-3">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
              >
                <option>Banani</option>
                <option>Gulshan</option>
                <option>Mohakhali</option>
                <option>Bashubdhara</option>
                <option>Mohammadpur</option>
                <option>Uttara</option>
                <option>Magbazar</option>
                <option>Shahbag</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label for="grid-zip">Zip</label>
            <input className="" id="grid-zip" type="text" placeholder="90210" />
          </div>
        </div>
        {/* <div className="md:flex md:items-center mt-8 mb-6">
          <label className="">
            <input className="mr-2 leading-tight text-center" type="checkbox" />
            <span className="text-md">Send me your Rider Update!</span>
          </label>
        </div> */}
        <div className="w-full text-center mt-6">
          <button className="w-full btn-brand-secondary rounded">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default UserProfileForm;

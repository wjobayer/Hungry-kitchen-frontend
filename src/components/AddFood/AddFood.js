import React, { useState } from "react";
// import axios from "axios";
const AddFood = () => {
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

  const handleImage =  (e) => {
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
    // await axios.post("http://localhost:5000/food", formData)
    //     .then(res => console.log(res.data))
  };

  return (
    <div className="container">
      <div class="flex justify-center items-center h-screen w-full">
        <div class="w-1/2 bg-white rounded shadow-2xl p-8 m-4">
          <h1 class="block w-full text-center text-gray-800 text-2xl font-bold mb-6">
            Add your food
          </h1>
          <form
            onSubmit={handleSubmit}
            enctype="multipart/form-data"
          >
            <div class="flex flex-col mb-2">
              <label class="add-food-label" htmlFor="foodName">
                Food Name
              </label>
              <input
                class="add-food-input"
                type="text"
                name="foodName"
                id="foodName"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div class="flex flex-col mb-2">
              <label class="add-food-label" htmlFor="foodPrice">
                Food Price
              </label>
              <input
                class="add-food-input"
                type="number"
                name="foodPrice"
                id="foodPrice"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div class="flex flex-col mb-2">
              <label
                class="mb-2 font-bold text-lg text-gray-900"
                htmlFor="foodCategory"
              >
                Food Category
              </label>
              <select
                name="foodCategory"
                id="category"
                className="add-food-input"
                onChange={(e) => handleChange(e)}
              >
                <option value="category">category</option>
                <option value="Chicken">Chicken</option>
                <option value="Pasta">Pasta</option>
                <option value="Dessert">Dessert</option>
              </select>
            </div>
            <div class="flex flex-col mb-2">
              <label
                class="mb-2 font-bold text-lg text-gray-900"
                htmlFor="foodCategory"
              >
                Food Area
              </label>
              <select
                name="foodArea"
                id="Area"
                className="add-food-input"
                onChange={(e) => handleChange(e)}
              >
                <option value="Area">Area</option>
                <option value="Chinese">Chinese</option>
                <option value="Indian">Indian</option>
                <option value="Canadian">Canadian</option>
                <option value="Portuguese">Portuguese</option>
              </select>
            </div>
            <div class="flex flex-col mb-2">
              <label class="add-food-label" htmlFor="foodImage">
                Food Image
              </label>
              <input
                class="add-food-input"
                type="file"
                name="foodImage"
                id="foodImage"
                onChange={handleImage}
              />
            </div>
            <div class="flex flex-col mb-2">
              <label class="add-food-label" htmlFor="foodDescription">
                Food Description
              </label>
              <textarea
                className="add-food-input"
                name="foodDescription"
                id="foodDescription"
                cols="30"
                rows="5"
                onChange={(e) => handleChange(e)}
              ></textarea>
            </div>
            <button
              class="block bg-teal-400 hover:bg-teal-600 text-white uppercase text-lg mx-auto p-4 rounded"
              type="submit"
            >
              Add Food
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddFood;

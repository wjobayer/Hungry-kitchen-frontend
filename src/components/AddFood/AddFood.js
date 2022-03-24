import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";
const AddFood = () => {
  const [foodInfo, setFoodInfo] = useState({
    foodName: "",
    price: "",
    type: "",
    category: "",
    foodDescription: "",
    resturantName: "",
    resturantName: "",
    resturantOpen: "",
    resturantClose: "",
  });

  const [foodImage, setFoodImage] = useState();
  const handleChange = (e) => {
    setFoodInfo({ ...foodInfo, [e.target.name]: e.target.value });
  };
  const {
    foodName,
    category,
    type,
    foodDescription,
    price,
    resturantName,
    resturantClose,
    resturantOpen,
  } = foodInfo;
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!foodImage) {
      return;
    }
    await axios
      .post("http://localhost:5000/foods", {
        foodName,
        type,
        category,
        foodDescription,
        price,
        foodImage,
        resturantName,
        resturantOpen,
        resturantClose
      })
      .then((res) => {
        if (res.status === 200) {
          Swal.fire("Food Added!", "Food successfully Added!", "success");
        }
      })
      .catch((err) => console.log(err.message));
    e.target.reset();
  };

  const handleImage = (pics) => {
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "hungry-kitchen");
      data.append("cloud_name", "altdevs");
      axios
        .post("https://api.cloudinary.com/v1_1/altdevs/image/upload", data)
        .then(({ data }) => {
          setFoodImage(data.url.toString());
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="container">
      <div className="flex justify-center items-center h-screen w-full">
        <div className="w-1/2 bg-white rounded shadow-2xl p-8 m-4">
          <h1 className="block w-full text-center text-gray-800 text-2xl font-bold mb-6">
            Add your food
          </h1>
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="flex flex-col mb-2">
              <label className="add-food-label" htmlFor="foodName">
                Food Name
              </label>
              <input
                className="add-food-input"
                type="text"
                name="foodName"
                placeholder="Food Name"
                id="foodName"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="flex flex-col mb-2">
              <label className="add-food-label" htmlFor="foodName">
                Resturant Name
              </label>
              <input
                className="add-food-input"
                type="text"
                name="resturantName"
                placeholder="Resturant Name"
                id="resturantName"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="flex flex-col mb-2">
              <label className="add-food-label" htmlFor="foodPrice">
                Food Price
              </label>
              <input
                className="add-food-input"
                type="number"
                name="price"
                placeholder="Food Price"
                id="foodPrice"
                step="any"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="flex flex-col mb-2">
              <label
                className="mb-2 font-bold text-lg text-gray-900"
                htmlFor="foodCategory"
              >
                Food Type
              </label>
              <select
                name="type"
                id="type"
                className="add-food-input"
                onChange={(e) => handleChange(e)}
              >
                <option value="type">Type</option>
                <option value="Chicken">Chicken</option>
                <option value="Pasta">Pasta</option>
                <option value="Dessert">Dessert</option>
              </select>
            </div>
            <div className="flex flex-col mb-2">
              <label
                className="mb-2 font-bold text-lg text-gray-900"
                htmlFor="foodCategory"
              >
                Food Category
              </label>
              <select
                name="category"
                id="Area"
                className="add-food-input"
                onChange={(e) => handleChange(e)}
              >
                <option value="category">Category</option>
                <option value="Chinese">Chinese</option>
                <option value="Indian">Italian</option>
                <option value="Indian">Indian</option>
                <option value="Canadian">Canadian</option>
                <option value="Portuguese">Portuguese</option>
              </select>
            </div>
            <div className="flex flex-col mb-2">
              <label className="add-food-label" htmlFor="foodImage">
                Food Image
              </label>
              <input
                className="add-food-input"
                type="file"
                name="foodImage"
                id="foodImage"
                onChange={(e) => handleImage(e.target.files[0])}
              />
            </div>
            <div class="flex flex-col mb-2">
              <label class="add-food-label" htmlFor="foodPrice">
                Resturant Open
              </label>
              <input
                class="add-food-input"
                type="text"
                name="resturantOpen"
                placeholder="resturant Open"
                id="resturantOpen"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div class="flex flex-col mb-2">
              <label class="add-food-label" htmlFor="foodPrice">
                Resturant Close
              </label>
              <input
                class="add-food-input"
                type="text"
                name="resturantClose"
                placeholder="resturant Close"
                id="resturantClose"
                onChange={(e) => handleChange(e)}
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
                placeholder="Food Description"
                cols="30"
                rows="5"
                onChange={(e) => handleChange(e)}
              ></textarea>
            </div>
            <button
              className="block bg-teal-400 hover:bg-teal-600 text-white uppercase text-lg mx-auto p-4 rounded"
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

import React from "react";
import { useForm } from "react-hook-form";

const Review = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const submitHandler = () => {};

  return (
    <div>
      <div className="review">
        <div className="review__area">
          <div className="lg:col-span-5"></div>
          <div className="review__area__wrapper">
            <div className="review__area__wrapper__content">
              <h2 className="text-4xl text-white text-center font-bold pb-8">
                Add Review
              </h2>

              <form
                className="review__form"
                onSubmit={handleSubmit(submitHandler)}
              >
                <label>
                  <span>Name</span>
                  <input
                    type="text"
                    name="name"
                    {...register("name", {
                      required: {
                        value: true,
                        message: "You most enter name",
                      },
                    })}
                    className={`${errors.name ? "ring-2 ring-red-500" : null}`}
                    placeholder="Full name"
                  />
                  <span className="py-2 text-sm text-red-400">
                    {errors?.name?.message}
                  </span>
                </label>
                <label>
                  <span>Email</span>
                  <input
                    type="email"
                    name="Email"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "You most enter email address",
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
                    className={`${errors.email ? "ring-2 ring-red-500" : null}`}
                    placeholder="Email"
                  />
                  <span className="py-2 text-sm text-red-400">
                    {errors?.email?.message}
                  </span>
                </label>
                <label>
                  <span className="login__form__title">Image</span>
                  <span className="block">
                    <input
                      onChange={() => {}}
                      type="text"
                      name="img"
                      {...register("img", {})}
                      placeholder="Image URL"
                    />
                    <span className="py-2 text-sm text-red-400"></span>
                  </span>
                </label>
                <label>
                  <span>Description</span>
                  <input
                    type="text"
                    name="description"
                    {...register("description", {
                      required: {
                        value: true,
                        message: "You most enter description",
                      },
                    })}
                    className={`${
                      errors.description ? "ring-2 ring-red-500" : null
                    }`}
                    placeholder="Your Description"
                  />
                  <span className="py-2 text-sm text-red-400">
                    {errors?.description?.message}
                  </span>
                </label>
                <span className="w-full">
                  <input
                    type="submit"
                    className="w-full text-white rounded py-2 bg-blue-500"
                    value="Add Review"
                  />
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;

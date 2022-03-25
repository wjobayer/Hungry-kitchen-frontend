// import { Alert, Button, TextField } from "@mui/material";
import { Alert } from "@material-tailwind/react";
import React, { useState } from "react";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };

  const handleAdminSubmit = (e) => {
    const user = { email };

    fetch("https://hungry-kitchen-app.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setEmail("");
          setSuccess(true);
        }
      });

    e.preventDefault();
  };
  return (
    <div className="bg-[url('https://img.freepik.com/free-vector/cerulean-blue-curve-frame-template_53876-99029.jpg?t=st=1648065811~exp=1648066411~hmac=3f3861308d6f24a6cc640bcc207c10d9f6f7e38c99c8b2cbca455556a9958fa3&w=900')] bg-no-repeat bg-cover "style={{ height: '85vh' }}>
      <div className="py-24  w-3/5 mx-auto text-center">
        <h2 className="text-3xl font-bold mb-3 text-white">Make an Admin</h2>
        <form onSubmit={handleAdminSubmit}>
          <div className=" gap-4 items-center">
          <label className="mb-8 text-3xl block text-gray-700 font-bold" for="username">
        Provide Email To Make Admin
      </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              // sx={{ width: "75%", m: 1 }}
              onBlur={handleOnBlur}
              label="Email"
              name="email"
              type="email"
              variant="standard"
              placeholder=" Create Make Admin"
            />
            <button
              className="bg-yellow-600 hover:text-lg hover:text-black text-white rounded mt-4 px-4 py-2"
              type="submit"
              variant="contained"
            >
              Make Admin
            </button>
          </div>
        </form>
        {success && <Alert severity="success">Made admin succesfully!</Alert>}
      </div>
    </div>
  );
};

export default MakeAdmin;

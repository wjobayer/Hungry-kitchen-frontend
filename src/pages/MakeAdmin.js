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

    fetch("http://localhost:5000/users/admin", {
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
    <div className="bg-gray-900" style={{ height: "70vh" }}>
      <div className="py-24  w-3/5 mx-auto text-center">
        <h2 className="text-3xl font-bold mb-3 text-white">Make an Admin</h2>
        <form onSubmit={handleAdminSubmit}>
          <div className=" gap-4 items-center">
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

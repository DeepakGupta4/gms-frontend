import React, { useState } from "react";
import "./signup.css";
import Modal from "../modal/Modal";
import ForotPassword from "../forgotpassword/ForotPassword";
import axios from "axios";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";

const Signup = () => {
  const [forgotPassword, setForgotPassword] = useState(false);
  const [inputField, setInputField] = useState({
    gymName: "",
    email: "",
    userName: "",
    password: "",
    profilePic:
      "https://c4.wallpaperflare.com/wallpaper/199/924/33/muscle-muscle-bodybuilding-press-wallpaper-preview.jpg",
  });

  const [loaderImage, setLoaderImage] = useState(false);

  const handleClose = () => {
    setForgotPassword((prev) => !prev);
  };

  const handleOnchange = (event, name) => {
    setInputField({ ...inputField, [name]: event.target.value });
  };
  console.log(inputField);

  const uploadImage = async (event) => {
    setLoaderImage(true);
    console.log("image uploading..");
    const files = event.target.files;
    const data = new FormData();
    data.append("file", files[0]);

    // dyhn1jppi

    data.append("upload_preset", "gym-management");

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dyhn1jppi/image/upload",
        data
      );
      console.log(response);
      const imageUrl = response.data.url;
      setLoaderImage(false)
      setInputField({ ...inputField, ["profilePic"]: imageUrl });
    } catch (error) {
      console.log(error);
      setLoaderImage(false)
    }
  };

  return (
    <div className="customSinup w-1/3 p-10 mt-20 ml-20 bg-gray-100 bg-opacity-50 h-[450px] overflow-y-auto">
      <div className="font-semibold text-gray-600 text-center text-3xl">
        Register Your Gym
      </div>

      <input
        value={inputField.email}
        onChange={(event) => {
          handleOnchange(event, "email");
        }}
        type="text"
        className="w-full my-10 p-2 rounded-lg"
        placeholder="Enter email"
      />

      <input
        value={inputField.gymName}
        onChange={(event) => {
          handleOnchange(event, "gymName");
        }}
        type="text"
        className="w-full mb-10 p-2 rounded-lg"
        placeholder="Enter Gymname"
      />

      <input
        value={inputField.userName}
        onChange={(event) => {
          handleOnchange(event, "userName");
        }}
        type="text"
        className="w-full mb-10 p-2 rounded-lg"
        placeholder="Enter Username"
      />

      <input
        value={inputField.password}
        onChange={(event) => {
          handleOnchange(event, "password");
        }}
        type="password"
        className="w-full mb-10 p-2 rounded-lg"
        placeholder="Enter password"
      />

      <input
        type="file"
        onChange={(e) => {
          uploadImage(e);
        }}
        className="w-full mb-5 p-2 rounded-lg"
      />
      {loaderImage && (
        <Stack sx={{ width: "100%", color: "grey.500" }} spacing={2}>
          <LinearProgress color="secondary" />
        </Stack>
      )}
      <img
        src={inputField.profilePic}
        alt=""
        className="h-[180px] w-[200px] mb-8"
      />
      <div className="p-2 w-[80%] border-2 bg-slate-800 mx-auto rounded-lg text-white text-center text-lg hover:bg-white hover:text-black font-semibold cursor-pointer">
        Register
      </div>
      <div
        className="p-2 w-[80%] mt-5 border-2 bg-slate-800 mx-auto rounded-lg text-white text-center text-lg hover:bg-white hover:text-black font-semibold cursor-pointer"
        onClick={() => handleClose()}
      >
        Forget Password
      </div>
      {forgotPassword && (
        <Modal
          header="Forgot Password"
          handleClose={handleClose}
          content={<ForotPassword />}
        />
      )}
    </div>
  );
};

export default Signup;

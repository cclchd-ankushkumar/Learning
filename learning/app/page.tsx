"use client";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FiEyeOff } from "react-icons/fi";
import { FiEye } from "react-icons/fi";
import { apiCalling } from "./products/ApiCalling";
import  CommonButton  from "@/app/products/CommonButton";
import { useRouter } from "next/navigation";

let token = localStorage.getItem("user-token") ||null;
let LoginUser = JSON.parse(localStorage.getItem("user"));


const page = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [eye, setEye] = useState(false);
  const router = useRouter();

  const LoginData = async () => {
    const user = await apiCalling(
      "https://dummyjson.com/auth/login",
      "POST",
      {
        "Content-Type": "application/json",
      },
      JSON.stringify({
        username: email,
        password: pass,
      })
    );
    try {
      // console.log("ankus", user);
      localStorage.setItem("user-token",user.token)
      localStorage.setItem("user",JSON.stringify(user));
      user.message
        ? alert("Invalid credentials!")
        : alert("Login Successfully"),
        (window.location.href = "/products");
    } catch (error) {
      console.log(error);
    }
  };


  if(token){
    // console.log("ankush",LoginUser);

    alert(`Welcome ${LoginUser.firstName} ${LoginUser.lastName}`)
    router.push("/products");
  }

  const handleEye = () => {
    setEye(!eye);
  };

  type detail = {
    email: string;
    pass: string;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const userDetail: detail = {
      email,
      pass,
    };
    // console.log(userDetail)

    // getData(userDetail);
    LoginData();

    setEmail("");
    setPass("");
  };
  return (
    <div>
      <Toaster />
      <h1 className=" text-4xl text-blue-500 w-96 m-auto">
        Chaincode Login Form
      </h1>
      <form
        className="border shadow-xl p-5  max-w-md min-w-96  m-auto leading-10 rounded-md mt-5 text-center"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Enter Email"
          className="border border-grey-200 rounded-md w-11/12 pl-3 text-center"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <div className="relative">
          <input
            type={eye ? "text" : "password"}
            placeholder="Enter Password"
            className="border border-grey-200 rounded-md w-11/12 pl-3 mt-3 text-center"
            value={pass}
            required
            onChange={(e) => setPass(e.target.value)}
          />
          <i className="absolute right-7 top-6" onClick={handleEye}>
            {eye ? <FiEye color="grey" /> : <FiEyeOff color="grey" />}
          </i>
        </div>

        <br />
        <input
          type="submit"
          className="bg-blue-500 border border-black-500 text-white rounded-md w-2/4 m-auto pl-3 mt-3 hover:cursor-pointer"
        />
      </form>
    </div>
  );
};

export default page;

import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { db } from "../firebase";

import { Link, useNavigate } from "react-router";
import GoogleButton from "./GoogleButton";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isPasswordVisible, setIsPasswordisVisible] = useState(false);
  const { password, email, name } = formData;
  const navigate = useNavigate();

  function onChange(e) {
    setFormData((previous) => ({
      ...previous,
      [e.target.id]: e.target.value,
    }));
  }
  // Submit SIgbn up form
  async function onsubmit(e) {
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      updateProfile(auth.currentUser, {
        displayName: name,
      });
      const user = userCredential.user;

      const formDataCopy = { ...formData };
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();

      await setDoc(doc(db, "users", user.uid), formDataCopy);
      navigate("/");
      toast.success(" Sign up was Successful");
    } catch (error) {
      toast.error("something went wrong with registration");
    }
  }
  return (
    <section>
      <h1 className=" text-3xl text-center mt-6 font-bold ">Sign Up</h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto ">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img className="rounded-2xl w-full" src="/signimg.jpeg" alt="key" />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%]  ml-20">
          <form
            onSubmit={onsubmit}
            className="flex flex-col gap-3 items-center"
            action=""
          >
            <input
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition-all ease-in-out "
              type="text"
              id="name"
              value={name}
              onChange={onChange}
              placeholder="Enter Your Name"
            />
            <input
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition-all ease-in-out "
              type="email"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Email Address"
            />

            <div className="relative w-full">
              <input
                className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition-all ease-in-out "
                type={isPasswordVisible ? "text" : "password"}
                id="password"
                value={password}
                onChange={onChange}
                placeholder={isPasswordVisible ? "Password🔓" : "Password💀"}
              />
              {isPasswordVisible ? (
                <FaEyeSlash
                  onClick={() => setIsPasswordisVisible(!isPasswordVisible)}
                  className="  cursor-pointer size-5 absolute right-5 bottom-[30%] opacity-80"
                />
              ) : (
                <FaEye
                  onClick={() => setIsPasswordisVisible(!isPasswordVisible)}
                  className="  cursor-pointer size-5 absolute right-5 bottom-[30%] opacity-80"
                />
              )}
            </div>
            <div className="flex justify-between gap-x-7 whitespace-nowrap text-sm sm:text-lg">
              <p>
                have an account ?
                <Link
                  to="/signin"
                  className="text-red-600 hover:text-red-700 transition-all duration-200 ease-in-out ml-1"
                >
                  Sign in
                </Link>
              </p>
              <p>
                <Link
                  className="text-blue-600 hover:text-blue-700 transition-all ease-in-out duration-200"
                  to="/forgotpassword"
                >
                  Forgot Password
                </Link>
              </p>
            </div>
            <button
              className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase roundedn hover:shadow-lg active:bg-blue-800 shadow-md hover:bg-blue-700 transition-all duration-200 ease-in-out mt-3"
              type="submit"
            >
              Sign Up
            </button>
          </form>
          {/* SignIn Button */}

          {/* Or div */}
          <div className="my-4 before:border-t flex before:flex-1 items-center before:border-e-gray-300 after:flex-1 after:border-gray-300 after:border-t">
            <p className="text-center font-semibold mx-4">OR</p>
          </div>
          <GoogleButton />
        </div>
      </div>
    </section>
  );
}

export default SignUp;

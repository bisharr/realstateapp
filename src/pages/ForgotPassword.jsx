import React, { useState } from "react";

import { Link } from "react-router";
import GoogleButton from "./GoogleButton";
function ForgotPassword() {
  const [email, setEmail] = useState("");

  function onChange(e) {
    setEmail(e.target.value);
  }
  return (
    <section>
      <h1 className=" text-3xl text-center mt-6 font-bold ">
        Forgot Password!!
      </h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto ">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img className="rounded-2xl w-full" src="/signimg.jpeg" alt="key" />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%]  ml-20">
          <form className="flex flex-col gap-3 items-center" action="">
            <input
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition-all ease-in-out "
              type="email"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Email Address"
            />

            <div className="flex justify-between gap-x-7 whitespace-nowrap text-sm sm:text-lg">
              <p>
                Don't have an account ?{" "}
                <Link
                  to="/signup"
                  className="text-red-600 hover:text-red-700 transition-all duration-200 ease-in-out ml-1"
                >
                  Register
                </Link>
              </p>
              <p>
                <Link
                  className="text-blue-600 hover:text-blue-700 transition-all ease-in-out duration-200"
                  to="/signin"
                >
                  Sign In Instead
                </Link>
              </p>
            </div>
          </form>
          {/* SignIn Button */}
          <button
            className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase roundedn hover:shadow-lg active:bg-blue-800 shadow-md hover:bg-blue-700 transition-all duration-200 ease-in-out mt-3"
            type="submit"
          >
            Send Reset Email
          </button>
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

export default ForgotPassword;

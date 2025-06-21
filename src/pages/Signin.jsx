import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
function Signin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isPasswordVisible, setIsPasswordisVisible] = useState(false);
  const { password, email } = formData;

  function onChange(e) {
    setFormData((previous) => ({
      ...previous,
      [e.target.id]: e.target.value,
    }));
  }
  return (
    <section>
      <h1 className=" text-3xl text-center mt-6 font-bold ">Sign In</h1>
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
            <div className="relative w-full">
              <input
                className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition-all ease-in-out "
                type={isPasswordVisible ? "text" : "password"}
                id="password"
                value={password}
                onChange={onChange}
                placeholder=" Enter Password"
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
          </form>
        </div>
      </div>
    </section>
  );
}

export default Signin;

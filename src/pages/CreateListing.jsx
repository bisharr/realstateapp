import { type } from "@testing-library/user-event/dist/type";
import React, { useState } from "react";

function CreateListing() {
  const [formData, setFormdata] = useState({
    type: "rent",
    name: "",
    bedrooms: 1,
    bathrooms: 1,
  });
  const { type, name, bedrooms, bathrooms } = formData;

  function onchange() {
    setFormdata((prevS) => ({
      ...prevS,
      type: prevS.type === "rent" ? "sell" : "rent",
    }));
  }
  return (
    <main className="max-w-md px-2 mx-auto">
      <h1 className=" text-3xl text-center mt-6 font-bold">Create a Listing</h1>
      <form>
        <p className="text-lg mt-6 font-semibold">Sell / Rent</p>
        <div className="flex mt-2 items-center gap-2">
          <button
            type="button"
            id="type"
            value="sell"
            className={`px-7 py-3 font-medium text-sm  shadow-md uppercase rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition-all duration-150 ease-in-out w-full text-center ${
              type === "sell"
                ? "bg-white text-black"
                : "bg-slate-600 text-white"
            }`}
            onClick={onchange}
          >
            SELL
          </button>
          <button
            type="button"
            id="type"
            value="rent"
            className={`px-7 py-3 font-medium text-sm  shadow-md uppercase rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition-all duration-150 ease-in-out w-full text-center ${
              type === "rent"
                ? "bg-white text-black"
                : "bg-slate-600 text-white"
            }`}
            onClick={onchange}
          >
            RENT
          </button>
        </div>
        <div>
          <p className="text-lg mt-6 font-semibold">Name</p>
          <input
            type="text"
            id="name"
            placeholder="Name of the property"
            value={name || ""}
            maxLength="32"
            minLength="10"
            required
            onChange={(e) =>
              setFormdata((prevS) => ({
                ...prevS,
                name: e.target.value,
              }))
            }
            className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition-all ease-in-out mt-2 focus:textgray-700 focus:bg-white focus:border-slate-600 focus:outline-none disabled:bg-gray-100 disabled:cursor-not-allowed disabled:text-gray-400 disabled:border-gray-300 mb-6 "
          />
        </div>
        <div className="flex gap-6 mb-6 items-center">
          <div className="">
            <p className="text-lg font-semibold ">Beds</p>
            <input
              type="number"
              id="bedrooms"
              value={bedrooms}
              onchnage={onchange}
              min={1}
              required
              max={50}
              className="px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition-all ease-in-out mt-2 focus:textgray-700 focus:bg-white focus:border-slate-600 focus:outline-none disabled:bg-gray-100 disabled:cursor-not-allowed disabled:text-gray-400 disabled:border-gray-300 w-full"
            />
          </div>
          <div className="">
            <p className="text-lg font-semibold ">Bathrooms</p>
            <input
              type="number"
              id="bathrooms"
              value={bathrooms}
              onchnage={onchange}
              min={1}
              required
              max={50}
              className="px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition-all ease-in-out mt-2 focus:textgray-700 focus:bg-white focus:border-slate-600 focus:outline-none disabled:bg-gray-100 disabled:cursor-not-allowed disabled:text-gray-400 disabled:border-gray-300 w-full"
            />
          </div>
        </div>
      </form>
    </main>
  );
}

export default CreateListing;

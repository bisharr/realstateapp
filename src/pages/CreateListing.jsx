import { type } from "@testing-library/user-event/dist/type";
import React, { useState } from "react";

function CreateListing() {
  const [formData, setFormdata] = useState({
    type: "rent",
    name: "",
    bedrooms: 1,
    bathrooms: 1,
    parking: false,
    furnished: false,
    address: "",
    description: "",
    offer: false,
    regularPrice: 0,
    discountPrice: 0,
    image: [],
  });
  const {
    type,
    name,
    bedrooms,
    bathrooms,
    parking,
    furnished,
    address,
    description,
    offer,
    regularPrice,
    discountPrice,
    image,
  } = formData;

  function onchange() {
    setFormdata((prevS) => ({
      ...prevS,
      type: prevS.type === "rent" ? "sell" : "rent",
    }));
  }
  function onparking() {
    setFormdata((prevS) => ({
      ...prevS,
      parking: prevS.parking === false ? true : false,
    }));
  }
  function onfurnished() {
    setFormdata((prevS) => ({
      ...prevS,
      furnished: prevS.furnished === false ? true : false,
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
        <div className="flex gap-6 mb-6 space-x-6 ">
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
              className="px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition-all ease-in-out mt-2 focus:textgray-700 focus:bg-white focus:border-slate-600 focus:outline-none disabled:bg-gray-100 disabled:cursor-not-allowed disabled:text-gray-400 disabled:border-gray-300 w-full text-center"
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
              className="px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition-all ease-in-out mt-2 focus:textgray-700 focus:bg-white focus:border-slate-600 focus:outline-none disabled:bg-gray-100 disabled:cursor-not-allowed disabled:text-gray-400 disabled:border-gray-300 w-full text-center"
            />
          </div>
        </div>
        {/* parking */}
        <p className="text-lg mt-6 font-semibold">Parking Spot</p>
        <div className="flex mt-2 items-center gap-2">
          <button
            type="button"
            id="parking"
            value={parking}
            className={`px-7 py-3 font-medium text-sm  shadow-md uppercase rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition-all duration-150 ease-in-out w-full text-center ${
              parking === true
                ? "bg-slate-600 text-white"
                : "bg-white text-black"
            }`}
            onClick={onparking}
          >
            YES
          </button>
          <button
            type="button"
            id="no"
            value={parking}
            className={`px-7 py-3 font-medium text-sm  shadow-md uppercase rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition-all duration-150 ease-in-out w-full text-center ${
              parking === false
                ? "bg-slate-600 text-white"
                : "bg-white text-black"
            }`}
            onClick={onparking}
          >
            No
          </button>
        </div>
        {/* furnished */}
        <p className="text-lg mt-6 font-semibold">Furnished</p>
        <div className="flex mt-2 items-center gap-2">
          <button
            type="button"
            id="yes"
            value={furnished}
            className={`px-7 py-3 font-medium text-sm  shadow-md uppercase rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition-all duration-150 ease-in-out w-full text-center ${
              furnished === true
                ? "bg-slate-600 text-white"
                : "bg-white text-black"
            }`}
            onClick={onfurnished}
          >
            YES
          </button>
          <button
            type="button"
            id="no"
            value={furnished}
            className={`px-7 py-3 font-medium text-sm  shadow-md uppercase rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition-all duration-150 ease-in-out w-full text-center ${
              furnished === false
                ? "bg-slate-600 text-white"
                : "bg-white text-black"
            }`}
            onClick={onfurnished}
          >
            No
          </button>
        </div>
        {/* Address */}
        <p className="text-lg mt-6 font-semibold">Address</p>
        <div>
          <textarea
            id="address"
            placeholder="Address"
            value={address}
            required
            onChange={(e) =>
              setFormdata((prevS) => ({
                ...prevS,
                address: e.target.value,
              }))
            }
            className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition-all ease-in-out mt-2 focus:textgray-700 focus:bg-white focus:border-slate-600 focus:outline-none disabled:bg-gray-100 disabled:cursor-not-allowed disabled:text-gray-400 disabled:border-gray-300 mb-2 "
          />
        </div>
        {/* Description */}
        <p className="text-lg mt-3 font-semibold">Description</p>
        <div>
          <textarea
            id="description"
            placeholder="Description"
            value={description}
            required
            onChange={(e) =>
              setFormdata((prevS) => ({
                ...prevS,
                description: e.target.value,
              }))
            }
            className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition-all ease-in-out mt-2 focus:textgray-700 focus:bg-white focus:border-slate-600 focus:outline-none disabled:bg-gray-100 disabled:cursor-not-allowed disabled:text-gray-400 disabled:border-gray-300 mb-2 "
          />
        </div>
        {/* Offer */}
        <p className="text-lg mt-3 font-semibold">Offer</p>
        <div className="flex mt-2 items-center gap-2">
          <button
            type="button"
            id="yes"
            value={offer}
            className={`px-7 py-3 font-medium text-sm  shadow-md uppercase rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition-all duration-150 ease-in-out w-full text-center ${
              offer === true ? "bg-slate-600 text-white" : "bg-white text-black"
            }`}
            onClick={() =>
              setFormdata((prevS) => ({
                ...prevS,
                offer: !prevS.offer,
              }))
            }
          >
            YES
          </button>
          <button
            type="button"
            id="no"
            value={offer}
            className={`px-7 py-3 font-medium text-sm  shadow-md uppercase rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition-all duration-150 ease-in-out w-full text-center ${
              formData.offer === false
                ? "bg-slate-600 text-white"
                : "bg-white text-black"
            }`}
            onClick={() =>
              setFormdata((prevS) => ({
                ...prevS,
                offer: !prevS.offer,
              }))
            }
          >
            No
          </button>
        </div>
        {/* Regular Price */}
        <p className="text-lg mt-6 font-semibold">Regular Price</p>
        <div className="flex items-center gap-2">
          <input
            type="number"
            id="regularPrice"
            value={regularPrice}
            onChange={(e) =>
              setFormdata((prevS) => ({
                ...prevS,
                regularPrice: e.target.value,
              }))
            }
            min={1}
            max={750000000}
            required
            className="w-[30%] px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition-all ease-in-out mt-2 focus:textgray-700 focus:bg-white focus:border-slate-600 focus:outline-none disabled:bg-gray-100 disabled:cursor-not-allowed disabled:text-gray-400 disabled:border-gray-300 mb-6 "
          />
          <p className="text-xl text-gray-700">$ / Month</p>
        </div>
        {/* Discount Price */}
        <p className="text-lg mt-2 font-semibold">Discount Price</p>
        <div>
          <input
            type="number"
            id="discountPrice"
            value={discountPrice}
            onChange={(e) =>
              setFormdata((prevS) => ({
                ...prevS,
                discountPrice: e.target.value,
              }))
            }
            min={1}
            max={750000000}
            className="w-[30%] px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition-all ease-in-out mt-2 focus:textgray-700 focus:bg-white focus:border-slate-600 focus:outline-none disabled:bg-gray-100 disabled:cursor-not-allowed disabled:text-gray-400 disabled:border-gray-300 mb-6 "
          />
        </div>
        {/* Image Price */}
        <p className="text-lg mt-2 font-semibold">Image</p>
        <div>
          <input
            type="file"
            id="image"
            value={image}
            accept=".jpg,.png,.jpeg"
            onChange={(e) =>
              setFormdata((prevS) => ({
                ...prevS,
                image: e.target.files[0],
              }))
            }
            className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition-all ease-in-out mt-2 focus:textgray-700 focus:bg-white focus:border-slate-600 focus:outline-none disabled:bg-gray-100 disabled:cursor-not-allowed disabled:text-gray-400 disabled:border-gray-300 mb-6 "
          />
        </div>
      </form>
    </main>
  );
}

export default CreateListing;

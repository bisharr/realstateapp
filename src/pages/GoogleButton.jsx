import React from "react";
import { FcGoogle } from "react-icons/fc";

function GoogleButton() {
  return (
    <button
      className="w-full flex items-center justify-center text-center gap-1 bg-red-600 text-white px-7 py-3 text-sm font-medium uppercase roundedn hover:shadow-lg active:bg-red-800 shadow-md hover:bg-red-700 transition-all duration-200 ease-in-out mt-3"
      type="submit"
    >
      <FcGoogle />
      continue with Google
    </button>
  );
}

export default GoogleButton;

import React from "react";
import spinner from "../assets/svg/spinner.svg";

function Spinner() {
  return (
    <div className="bg-black bg-opacity-50 flex justify-center items-center fixed left-0 right-0 bottom-0 top-0 z-60">
      <div>
        <img src={spinner} alt="spinner" className="h-20" />
      </div>
    </div>
  );
}

export default Spinner;

import React from "react";
import { useNavigate } from "react-router";
import { useLocation } from "react-router";
function Header() {
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  function pathMatch(route) {
    if (route === location.pathname) return true;
  }

  return (
    <div className=" bg-white border-b shadow-sm sticky top-0 z-50">
      <header className=" flex items-center justify-between px-3 max-w-6xl mx-auto">
        <div>
          <img
            onClick={() => navigate("/")}
            className=" h-16 w-20 cursor-pointer"
            src="/logostate.png"
            alt="logo"
          />
        </div>
        <div>
          <ul className="flex space-x-10">
            <li
              onClick={() => navigate("/")}
              className={` cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatch("/") && "text-black border-b-red-500"
              } `}
            >
              Home
            </li>
            <li
              onClick={() => navigate("/offers")}
              className={` cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatch("/offers") && "text-black border-b-red-500"
              } `}
            >
              Offers
            </li>
            <li
              onClick={() => navigate("/signin")}
              className={` cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatch("/signin") && "text-black border-b-red-500"
              } `}
            >
              Sign in
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default Header;

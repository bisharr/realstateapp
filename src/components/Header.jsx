import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useLocation } from "react-router";
function Header() {
  const [pageState, setPageState] = useState("Sign In");
  const location = useLocation();
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setPageState("Profile");
      } else {
        setPageState("Sign in");
      }
    });
  }, [auth]);
  const navigate = useNavigate();
  function pathMatch(route) {
    return route === location.pathname;
  }
  console.log("Current path:", location.pathname);

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
                pathMatch("/")
                  ? "text-black border-b-red-500"
                  : "text-gray-400 border-b-transparent"
              } `}
            >
              Home
            </li>
            <li
              onClick={() => navigate("/offers")}
              className={` cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatch("/offers")
                  ? "text-black border-b-red-500"
                  : "text-gray-400 border-b-transparent"
              } `}
            >
              Offers
            </li>
            <li
              onClick={() => navigate("/profile")}
              className={` cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatch("/signin") ||
                (pathMatch("/profile") && "text-black border-b-red-500")
              } `}
            >
              {pageState}
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default Header;

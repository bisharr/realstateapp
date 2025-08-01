import React, { useState } from "react";
import { getAuth, updateProfile } from "firebase/auth";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router";
import { db } from "../firebase";
import { FcHome } from "react-icons/fc";
import { doc, updateDoc } from "firebase/firestore";
function Profile() {
  const auth = getAuth();
  const [formData, setFormdata] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });
  const [changeDetail, setChangeDetail] = useState(false);
  const { name, email } = formData;
  const navigate = useNavigate();

  async function handleSignOut() {
    try {
      await signOut(auth);
      toast.success("Sign out successfully");
      navigate("/");
    } catch (error) {
      toast.error(error);
    }
  }
  function onChange(e) {
    setFormdata((prevS) => ({
      ...prevS,
      [e.target.id]: e.target.value,
    }));
  }
  async function onSubmit() {
    try {
      if (auth.currentUser.displayName !== name) {
        // Update DisplayName in firebase auth
        await updateProfile(auth.currentUser, {
          displayName: name,
        });
        // update name in fireStore
        const docRef = doc(db, "users", auth.currentUser.uid);
        await updateDoc(docRef, {
          name,
        });
        toast.success("Profile Updated Successfully");
      }
    } catch (error) {
      toast.error("Could not Update Profile Details");
    }
  }
  return (
    <>
      <section className="max-w-6xl mx-auto flex justify-center items-center flex-col">
        <h1 className=" text-3xl text-center mt-6 font-bold mb-2 ">
          My Profile
        </h1>
        <div className="w-full md:w-[50%] mt-6 px-3">
          <form>
            {/* input of names and email */}
            <input
              type="text"
              id="name"
              value={name}
              disabled={!changeDetail}
              onChange={onChange}
              className={`w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition-all ease-in-out ${
                changeDetail && "bg-red-200 focus:bg-red-200"
              }`}
            />
            <input
              type="email"
              id="email"
              value={email}
              disabled
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition-all ease-in-out mt-6"
            />
            <div className=" mt-4 flex justify-between items-center whitespace-nowrap text-sm sm:text-lg">
              <p className="flex items-center gap-x-3">
                Do you want to change your name?
                <span
                  onClick={() => {
                    changeDetail && onSubmit();
                    setChangeDetail((prevSate) => !prevSate);
                  }}
                  className="text-red-600 hover:text-red-700 transition-all ease-in-out cursor-pointer duration-200 "
                >
                  {changeDetail ? "Apply Change" : "Edit"}
                </span>
              </p>
              <p
                onClick={handleSignOut}
                className="cursor-pointer text-blue-800 hover:text-blue-700 transition-all ease-in-out duration-200"
              >
                SignOut
              </p>
            </div>
          </form>
          <Link to="/create-listing">
            <button
              className="w-full flex items-center uppercase justify-center text-white bg-blue-600 rounded p-2 text-center text-sm gap-x-3 mt-4 font-semibold shadow-md active:bg-blue-800 hover:shadow-lg hover:bg-blue-700 transition-all duration-200 ease-in-out"
              type="submit"
            >
              <FcHome className="size-4" /> sell or rent your Home
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Profile;

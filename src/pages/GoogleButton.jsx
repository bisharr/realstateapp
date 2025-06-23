import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";

import React from "react";
import { FcGoogle } from "react-icons/fc";

import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { db } from "../firebase";

function GoogleButton() {
  const navigate = useNavigate();
  async function onGoogleClick() {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);

      const user = result.user;

      const userData = {
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        uid: user.uid,
        timestamp: serverTimestamp(),
      };
      console.log("Signed in user:", user);
      toast.success("Signed in with Google");
      await setDoc(doc(db, "users", user.uid), userData);
      navigate("/");
    } catch (error) {
      console.error("Google Sign-In error:", error);
      toast.error("Could not sign in with Google");
    }
  }
  return (
    <button
      onClick={onGoogleClick}
      className="w-full flex items-center justify-center text-center gap-1 bg-red-600 text-white px-7 py-3 text-sm font-medium uppercase roundedn hover:shadow-lg active:bg-red-800 shadow-md hover:bg-red-700 transition-all duration-200 ease-in-out mt-3"
      type="button"
    >
      <FcGoogle />
      continue with Google
    </button>
  );
}

export default GoogleButton;

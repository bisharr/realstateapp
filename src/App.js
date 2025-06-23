import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import ForgotPassword from "./pages/ForgotPassword";
import Signin from "./pages/Signin";
import SignUp from "./pages/SignUp";
import Offers from "./pages/Offers";
import Header from "./components/Header";
import { Bounce, ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
        </Routes>
        <div className="grid place-items-center h-dvh bg-zinc-900/15">
          <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            transition={Bounce}
          />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

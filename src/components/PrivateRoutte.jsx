import React from "react";
import { Navigate, Outlet } from "react-router";
import UseAuthStats from "../hooks/UseAuthStats";
import Spinner from "./Spinner";

function PrivateRoutte() {
  const { login, checkingStats } = UseAuthStats();

  if (checkingStats) {
    return <Spinner />;
  }

  return login ? <Outlet /> : <Navigate to="/signin" />;
}

export default PrivateRoutte;

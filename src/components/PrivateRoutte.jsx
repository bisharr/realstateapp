import React from "react";
import { Navigate, Outlet } from "react-router";
import UseAuthStats from "../hooks/UseAuthStats";

function PrivateRoutte() {
  const { login, checkingStats } = UseAuthStats();

  if (checkingStats) {
    return <h3>Loading...</h3>;
  }

  return login ? <Outlet /> : <Navigate to="/signin" />;
}

export default PrivateRoutte;

// frontend/src/components/PrivateRoute.js
import React from "react";
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ element, ...rest }) => {
  const user = JSON.parse(sessionStorage.getItem("user"));

  if (!user || user.role !== "admin") {
    // Redirect to login if not logged in or not an admin
    return <Navigate to="/login" />;
  }

  return <Route {...rest} element={element} />;
};

export default PrivateRoute;

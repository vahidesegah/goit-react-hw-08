import React from "react";
import PropTypes from "prop-types";
import { Navigate, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { ContactsPage } from "../pages/ContactsPage/ContactsPage";

const PrivateRoute = ({ component }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return isLoggedIn ? component : <Navigate to="/login" />;
};
PrivateRoute.propTypes = {
  component: PropTypes.element.isRequired,
};

export default PrivateRoute;

<Route
  path="/contacts"
  element={<PrivateRoute redirectTo="/login" component={<ContactsPage />} />}
/>;

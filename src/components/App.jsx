import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { refreshUser } from "../redux/auth/operations";
import Layout from "./Layout";
import HomePage from "../pages/HomePage/HomePage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import ContactsPage from "../pages/ContactsPage/ContactsPage";
import PrivateRoute from "./PrivateRoute";
import RestrictedRoute from "./RestrictedRoute";

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return !isRefreshing ? (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={<RestrictedRoute element={<RegisterPage />} />}
        />
        <Route
          path="/login"
          element={<RestrictedRoute element={<LoginPage />} />}
        />
        <Route
          path="/contacts"
          element={<PrivateRoute element={<ContactsPage />} />}
        />
      </Route>
    </Routes>
  ) : (
    <p>Loading...</p>
  );
};

export default App;

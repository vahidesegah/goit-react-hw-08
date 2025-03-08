import React from "react";
import { Outlet } from "react-router-dom";
import AppBar from "./AppBar/AppBar";

const Layout = () => {
  return (
    <div className={styles.layout}>
      <AppBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

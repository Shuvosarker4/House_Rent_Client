import React from "react";
import Footer from "./Footer";
import { Outlet } from "react-router";
import Navbar from "./Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;

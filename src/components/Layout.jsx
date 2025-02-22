import React from "react";
import Navbar from "./Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";

function Layout() {
  return (
    <div>
      <Navbar />
      <div className="mt-5 lg:px-[90px] 2xl:max-w-[1530px] mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;

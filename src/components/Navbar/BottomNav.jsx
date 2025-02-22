import React, { useState } from "react";
// react-routers
import { NavLink } from "react-router-dom";

// react-icons library
import { GiComputerFan } from "react-icons/gi";
import { IoMenu } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { PiUserCircleFill } from "react-icons/pi";

// components
import SearchField from "./SearchField";
import { IoIosSearch, IoMdClose } from "react-icons/io";

function BottomNav() {
  const [openSearch, setOpenSearch] = useState(false);
  return (
    <div className="bg-[#0156FF] gap-3  md:gap-10 h-[64px] md:bg-white px-2 relative flex items-center justify-between">
      <NavLink to="/">
        <GiComputerFan className="text-white md:text-black" size={36} />
      </NavLink>
      {!openSearch && (
        <div className="hidden md:block">
          <div className="flex items-center gap-3">
            <NavLink className="link" to="/products/laptops">
              Laptops
            </NavLink>
            <a className="link">Desktop PCs</a>
            <a className="link">Networking Devices</a>
            <a className="link">Printers & Scanners</a>
            <a className="link">PC Parts</a>
          </div>
        </div>
      )}
      {openSearch && (
        <div className="flex-1">
          <div className="w-full hidden md:block">
            <SearchField />
          </div>
        </div>
      )}
      <div className="min-w-[40%] md:hidden block">
        <SearchField />
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => setOpenSearch(!openSearch)}
          className="hidden md:block text-white md:text-black cursor-pointer"
        >
          {openSearch ? (
            <IoMdClose size={25} color="#0156FF" />
          ) : (
            <IoIosSearch size={25} />
          )}
        </button>
        <NavLink className="text-white md:text-black" to="/cart">
          <FaCartShopping size={25} />
        </NavLink>
        <button className=" text-white md:text-black">
          <PiUserCircleFill size={25} />
        </button>
        <button className="block md:hidden">
          <IoMenu size={35} color="white" />
        </button>
      </div>
    </div>
  );
}

export default BottomNav;

import React from "react";
import { FaSquareInstagram } from "react-icons/fa6";
import { ImFacebook2 } from "react-icons/im";

function TopNav() {
  return (
    <div className="bg-black flex items-center justify-between md:justify-evenly px-2 h-[44px]">
      <p className="text-[12px] font-semibold text-gray-200">
        Mon-Thu: 9:00 AM - 5:30 PM
      </p>
      <p className="text-gray-300 text-[12px] flex items-center gap-1">
        <span className="md:block hidden">
          Visit our showroom in 1234 Street Adress City Address, 1234{" "}
        </span>
        <a href="" className="text-white font-semibold underline">
          Contact Us
        </a>
      </p>
      <div className=" md:block hidden">
        <div className="flex items-center text-gray-300 text-[12px]   gap-1">
          <p>Call Us: (00) 1234 5678</p>
          {/* icons */}
          <div className="flex items-center gap-1">
            <ImFacebook2 size={15} />
            <FaSquareInstagram size={17} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopNav;

import React from "react";
// react-icons library
import { IoIosSearch } from "react-icons/io";

function SearchField() {
  return (
    <div className="w-full flex p-3 rounded-full gap-3 bg-white md:bg-[#F5F7FF] md:border md:border-gray-200">
      <button>
        <IoIosSearch size={20} />
      </button>
      <input
        type="text"
        className="focus:outline-none flex-1"
        placeholder="Search here"
      />
    </div>
  );
}

export default SearchField;

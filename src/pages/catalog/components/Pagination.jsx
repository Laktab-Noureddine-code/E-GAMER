import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function Pagination() {
  return (
    <div className="flex items-center justify-center gap-1">
      <div className="pagination-numbers">
        <IoIosArrowBack />
      </div>
      {Array(6)
        .fill(0)
        .map((number, index) => (
          <div className="pagination-numbers" key={index}>{index + 1}</div>
        ))}
      <div className="pagination-numbers">
        <IoIosArrowForward />
      </div>
    </div>
  );
}

export default Pagination;

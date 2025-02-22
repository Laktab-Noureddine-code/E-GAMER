import React from "react";
import { IoIosStar } from "react-icons/io";

function ProductStart(props) {
  return (
    <div>
      <div className="flex ">
        {Array(Math.floor(props.starts))
          .fill(0)
          .map((_, index) => {
            return <IoIosStar key={index} size={13} color="#E9A426" />;
          })}
      </div>
    </div>
  );
}

export default ProductStart;

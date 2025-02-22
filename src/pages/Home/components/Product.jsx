import React from "react";
import ProductStart from "./ProductStart";
import { FaCheckCircle, FaPhoneAlt } from "react-icons/fa";

function Product(props) {
  
  return (
    <div className="min-w-[234px] p-[25px] cursor-pointer relative">
      {props.product.inStock ? (
        <div className="flex text-[10px] items-center gap-1 text-green-600">
          <FaCheckCircle size={8} />
          <span>in Stock</span>
        </div>
      ) : (
        <div className="flex text-[10px] items-center gap-1 text-red-600">
          <FaPhoneAlt size={8} />
          <span>check availability</span>
        </div>
      )}
      <div className="flex justify-center ">
        <img
          src={"/images/" + props.product.image}
          alt=""
          className="size-[150px] object-contain mx-auto inline-block "
        />
      </div>
      <div className="flex justify-between items-center">
        <ProductStart starts={props.product.rating} />
        <p className="text-[#A2A6B0] text-[12px]">
          Reviews ({props.product.reviews})
        </p>
      </div>
      <div>
        <p className="text-[14px] py-2">{props.product.name}</p>
      </div>
      <div className="pt-5">
        <p className="line-through text-[14px] text-[#666666]">
          {props.product.oldPrice} $
        </p>
        <p className="font-semibold text-[18px]">{props.product.price} $</p>
      </div>
    </div>
  );
}

export default Product;

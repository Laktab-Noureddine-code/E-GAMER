import React from "react";

// fake data
import products from "../../../data/data";

// product component
import Product from "./Product";

// react icons library
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function NewProducts() {
  function goLeft(){
    const slider = document.querySelector('.slider')
    slider.scrollLeft = slider.scrollLeft - 300
  }
  function goRight(){
    const slider = document.querySelector('.slider')
    slider.scrollLeft = slider.scrollLeft + 300
  }
  return (
    <div className="pt-2 pb-7">
      <div className="flex items-center justify-between">
        <h1 className="title">New Products</h1>
        <a
          href=""
          className="text-[13px] text-[#0156FF] underline font-semibold"
        >
          See All New Products
        </a>
      </div>
      <div className="relative flex items-center">
        <button className="sliderBtn left-0" onClick={goLeft}>
          <FaChevronLeft />
        </button>
        <div className="flex items-center justify-between overflow-x-scroll no-scrollbar scroll-smooth slider transition-all">
          {products.map((product, index) => {
            return <Product product={product} key={index} />;
          })}
        </div>
        <button className="sliderBtn right-0" onClick={goRight}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}

export default NewProducts;

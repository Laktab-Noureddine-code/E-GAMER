import React from "react";
// components
import NewProducts from "./NewProducts";
import ComputerCategories from "./ComputerCategories/ComputerCategories";
import BrandCarousel from "./BrandCarousel";

function Main() {
  return (
    <div className="">
      <NewProducts />
      <ComputerCategories />
      <BrandCarousel layout="flex"/>
    </div>
  );
}

export default Main;

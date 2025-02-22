import React from "react";

function BrandCarousel(props) {
  const brands = [
    "image1.png",
    "image2.png",
    "image3.png",
    "image4.png",
    "image6.png",
    "image7.png",
  ];
  return (
    <div
      className={
        props.layout === "flex"
          ? "flex flex-wrap items-center justify-center "
          : "grid grid-cols-2 gap-1 items-center justify-between"
      }
    >
      {brands.map((brand, index) => (
        <div
          key={index}
          className={
            props.layout === "flex"
              ? "flex-1 min-w-[153px] h-[80px] flex justify-center"
              : "flex-1 max-w-[153px] h-[80px] flex justify-center p-2 "
          }
        >
          <img src={"/images/brandes/" + brand} className=" object-contain" />
        </div>
      ))}
    </div>
  );
}

export default BrandCarousel;

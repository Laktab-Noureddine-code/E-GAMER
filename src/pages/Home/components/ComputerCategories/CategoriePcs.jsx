import React from "react";
import Product from "../Product";

function CategoriePCS(props) {
  return (
    <div className="flex-col md:flex-row flex items-center my-10">
      <div
        className="flex w-full h-[120px] items-center bg-cover bg-center justify-center overflow-hidden bg-no-repeat border-2 md:max-w-[233px] md:h-[350px] relative"
        style={{
          backgroundImage: `url(/images/categories/${props.categorieImg}.png)`,
        }}
      >
        <h1 className="text-[22px] text-wrap font-bold text-white">
          {props.categorieName}
        </h1>
        <a className="absolute text-[13px] cursor-pointer text-white bottom-4 underline">
          See All Products
        </a>
      </div>
      <div className="flex w-full md:w-auto  items-center overflow-x-scroll no-scrollbar scroll-smooth slider transition-all">
        {props.products.map((product, index) => {
          return <Product product={product} key={index} />;
        })}
      </div>
    </div>
  );
}

export default CategoriePCS;

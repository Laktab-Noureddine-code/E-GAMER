import React from "react";

// data
import { catalogProducts } from "../../../data/data";

// components
import Product from "../../Home/components/Product";
import Pagination from "./Pagination";
import { NavLink } from "react-router-dom";

function ProductsList() {
  return (
    <div>
      <div className="grid xl:grid-cols-4 gap-1 w-full justify-items-center md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {catalogProducts.map((product, index) => (
          <NavLink to={"/product/"+product.id}>
            <Product product={product} key={index} />
          </NavLink>
        ))}
      </div>
      <div>
        <Pagination />
      </div>
    </div>
  );
}

export default ProductsList;

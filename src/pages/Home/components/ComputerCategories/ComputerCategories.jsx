import React from "react";
import CategoriePCS from "./CategoriePCS";
import { categories } from "../../../../data/data";

function ComputerCategories() {
  return (
    <div>
      {categories.map((categorie, index) => {
        console.log(categorie.image)
        return (
          <CategoriePCS
            key={index}
            categorieName={categorie.name}
            categorieImg={categorie.image}
            products={categorie.products}
          />
        );
      })}
    </div>
  );
}

export default ComputerCategories;

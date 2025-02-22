import React from 'react'
// components
import Filter from './Filter'
import BrandCarousel from '../../Home/components/BrandCarousel';

function FilterProducts() {
  return (
    <div className="hidden lg:block">
      <Filter />
      <div className="mt-2 bg-[#F5F7FF]">
        <h3 className="text-[14px] font-semibold text-center px-4 py-3">
          Brands
        </h3>
        <BrandCarousel />
      </div>
      
    </div>
  );
}

export default FilterProducts

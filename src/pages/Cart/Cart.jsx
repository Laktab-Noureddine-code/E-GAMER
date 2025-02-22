import React from 'react'
import ProductsTable from './CardComponents/ProductsTable';
import Summary from './CardComponents/Summary';
function Card() {
  return (
    <div>
      <h1 className="font-semibold text-[32px]">Shopping Cart</h1>
      {/* cart content */}
      <div className="grid lg:grid-cols-[3fr_1fr] grid-cols-1  gap-4">
        <ProductsTable />
        <Summary />
      </div>
    </div>
  );
}

export default Card

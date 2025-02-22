// components
import ProductsList from './components/ProductsList'
import FilterProducts from './components/FilterProducts'

function Products() {
  return (
    <div>
      <div className='grid lg:grid-cols-[1fr_6fr] gap-1 '>
        <FilterProducts />
        <ProductsList />
      </div>
    </div>
  )
}

export default Products

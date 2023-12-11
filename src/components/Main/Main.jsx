import { useState } from 'react';
import Filters from '../Filters/Filters';
import { Products } from '../Products/Products';
import { products as initialProducts } from '../../mocks/products.json'


export default function Main() {
  const [products] = useState(initialProducts)
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0,
  })

  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice &&
        (
          filters.category === 'all' ||
          product.category === filters.category
        )
      )
    })
  }

  const filteredProducts = filterProducts(products)

  return (
    <>
      <Filters />
      <Products products={filteredProducts} />
    </>
  )
}

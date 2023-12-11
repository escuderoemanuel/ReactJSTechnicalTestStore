import './Filters.css'
import { products } from '../../mocks/products.json'
import { useEffect, useState } from 'react'

export default function Filters() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    setCategories([...new Set(products.map(product => product.category))])
  }, [])

  return (
    <section className='filtersContainer'>
      <div className='filterPrice'>
        <label htmlFor="price">Price Range </label>
        <input type="range" id='price' min='0' max='1000' step='1' />
      </div>

      <div className='filterCategory'>
        <label htmlFor="category">Categories </label>
        <select name="category" id="category">
          <option value="">All</option>
          {
            categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>))
          }
        </select>

      </div>
    </section>
  )
}

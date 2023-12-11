import './Products.css'
//import products from '../../mocks/products.json'
import { AddToCartIcon } from '../Icons/Icons'

export function Products({ products }) {
  return (
    <section className='products'>
      <ul className='productList'>
        {products.map(product => (
          <li className='productCard' key={product.id}>
            <img className='productImage' src={product.thumbnail} alt={product.title} />
            <div className='productInfo'>
              <h4>{product.title}</h4>
              <span>${product.price}</span>
              <button className='addToCartIcon'>
                <AddToCartIcon />
              </button>
            </div>
          </li>
        )
        )
        }
      </ul>
    </section>
  )
}

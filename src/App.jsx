import './App.css'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Products } from './components/Products/Products'
import { products } from './mocks/products.json'


function App() {

  return (
    <div className='bodyContainer'>
      <Header />
      <main className='mainContainer'>

        <Products products={products} />

      </main>
      <Footer />
    </div>
  )
}

export default App

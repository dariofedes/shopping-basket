import { useEffect, useState } from 'react';
import './App.sass';
import ProductList from './components/LineProductList/LineProductList';
import ProductService from './application/product-service';
import ProductRepository from './infrastructure/product-repository';
import Basket from './components/Basket/Basket'

function App() {
  const productRepository = new ProductRepository()
  const productService = new ProductService(productRepository)

  const [products, setProducts] = useState([])

  useEffect(() => {
    (async () => {
      const retrievedProducts = await productService.retrieveProducts()
      setProducts(retrievedProducts)
    })()
  }, [])

  return (
    <div className='app'>
      {
        products && <ProductList className='app__product-list' products={products} />
      }
      <Basket />
      </div>
  );
}

export default App;

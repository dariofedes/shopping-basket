import { useEffect, useState } from 'react';
import './App.sass';
import ProductList from './components/ProductList/ProductList';
import ProductService from './services/product-service';
import ProductRepository from './domain/product-repository';

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
    </div>
  );
}

export default App;

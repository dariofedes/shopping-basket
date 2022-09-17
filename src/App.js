import { useEffect, useState } from 'react';
import './App.sass';
import LineProduct from './components/LineProduct/LineProduct'
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
    <div className='product-list'>
      {products && products.map(product => <LineProduct product={product} key={product.id} />)}
    </div>
  );
}

export default App;

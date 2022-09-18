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
      <div className='app__basket basket'>
        <div className='basket__header'>
          <h1 className='basket__title'>MI CESTA:</h1>
        </div>
        <div className='basket__product-list' />
        <div className='basket__footer'>
          <div className='basket__total-products'>
            <p className='basket__total-title'>TOTAL</p>
            <p className='basket__total-products-count'>(0 productos)</p>
          </div>
          <p className='basket__total-price'>0,00 €</p>
        </div>
      </div>
    </div>
  );
}

export default App;

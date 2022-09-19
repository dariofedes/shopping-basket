/* eslint-disable react/jsx-no-bind */
import { useEffect, useState } from 'react';
import './App.sass';
import ProductList from './components/LineProductList/LineProductList';
import ProductService from './application/product-service';
import ProductRepository from './infrastructure/product-repository';
import BasketService from './application/basket-service';
import BasketRepository from './infrastructure/basket-repository';
import Basket from './components/Basket/Basket'

function App() {
  const productRepository = new ProductRepository()
  const productService = new ProductService(productRepository)

  const basketRepository = new BasketRepository()
  const basketService = new BasketService(basketRepository)

  const [products, setProducts] = useState([])
  const [basketProducts, setBasketProducts] = useState([])

  useEffect(() => {
    (async () => {
      const retrievedProducts = await productService.retrieveProducts()
      setProducts(retrievedProducts)

      const retrievedBasketProducts = await basketService.retrieveBasketProducts()
      setBasketProducts(retrievedBasketProducts)
    })()
  }, [])

  function handleOnAddToBasket(product) {
    const basketWithAddedProduct = [ ...basketProducts, product ]
    setBasketProducts(basketWithAddedProduct)
  }

  return (
    <div className='app'>
      {
        products && <ProductList className='app__product-list' products={products} onAddToBasket={handleOnAddToBasket} />
      }
      <Basket products={basketProducts} />
      </div>
  );
}

export default App;

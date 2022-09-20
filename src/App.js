import ProductList from './components/LineProductList/LineProductList';
import Basket from './components/Basket/Basket'
import './App.sass';

function App() {
  return (
    <div className='app'>
      <ProductList className='app__product-list' />
      <Basket className='app__basket' />
    </div>
  );
}

export default App;

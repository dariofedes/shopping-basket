import './App.sass';
import ProductList from './components/LineProductList/LineProductList';
import Basket from './components/Basket/Basket'

function App() {
  return (
    <div className='app'>
      <ProductList className='app__product-list' />
      <Basket />
    </div>
  );
}

export default App;

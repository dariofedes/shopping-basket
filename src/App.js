import './App.css';
import LineProduct from './components/LineProduct'

function App() {
  const product = {
    name: 'LaJusticia colágeno con magnesio 450comp',
    price: '14,35€'
  }
  
  return (
    <div className='product-list'>
      <LineProduct product={product} />
    </div>
  );
}

export default App;

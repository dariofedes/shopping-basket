import { ErrorBoundary } from 'react-error-boundary'
import ProductList from './components/LineProductList/LineProductList'
import Basket from './components/Basket/Basket'
import './App.sass'
import ErrorFallback from './components/ErrorFallback/ErrorFallback'

function App() {
  return (
    <div className='app'>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <ProductList className='app__product-list' />
        <Basket className='app__basket' />
      </ErrorBoundary>
    </div>
  )
}

export default App

import './styles.sass'
import BasketProduct from '../BasketProduct/BasketProduct'
import PriceTag from '../PriceTag/PriceTag'
import Loading from '../Loading/Loading'
import { useBasket } from '../../hooks/use-basket'

export default function Basket() {
    const { basket, isLoading } = useBasket()

    function getTotal() {
        return basket.reduce((accumulator, product) => accumulator + product.price, 0)
    }

    return (
        <div className='basket'>
            <div className='basket__header'>
                <h1 className='basket__title'>MI CESTA:</h1>
            </div>
            <ul className='basket__product-list'>
                {
                    isLoading
                    ? <Loading />
                    : basket.map(product => (
                        <BasketProduct
                            product={product}
                            key={product.id}
                        />
                    ))
                }
            </ul>
            <div className='basket__total-container'>
                <p className='basket__total-title'>TOTAL</p>
                <div className='basket__details'>
                    <p className='basket__products-count'>
                        {`(${basket.length} productos)`}
                    </p>
                    <PriceTag className='basket__total' price={getTotal()} total />
                </div>
            </div>
        </div>
    )
}
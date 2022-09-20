import './styles.sass'
import BasketProduct from '../BasketProduct/BasketProduct'
import Total from '../Total/Total'
import Loading from '../Loading/Loading'
import { useBasket } from '../../hooks/use-basket'

export default function Basket() {
    const { basket, isLoading } = useBasket()

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
            <Total className='basket__total' />
        </div>
    )
}
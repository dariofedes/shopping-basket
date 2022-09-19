import './styles.sass'
import PropTypes from 'prop-types'
import { productType } from '../Product/Product'
import BasketProduct from '../BasketProduct/BasketProduct'
import PriceTag from '../PriceTag/PriceTag'

export default function Basket({ products = [] }) {
    function getTotal() {
        return products.reduce((accumulator, product) => accumulator + product.price, 0)
    }

    return (
        <div className='basket'>
            <div className='basket__header'>
            <h1 className='basket__title'>MI CESTA:</h1>
            </div>
            <ul className='basket__product-list'>
                {
                    products.map(product => <BasketProduct product={product} key={product.id} />)
                }
            </ul>
            <div className='basket__footer'>
            <div className='basket__total-products'>
                <p className='basket__total-title'>TOTAL</p>
                <p className='basket__total-products-count'>{`(${products.length} productos)`}</p>
            </div>
            <PriceTag price={getTotal()} total />
            </div>
        </div>
    )
}

Basket.propTypes = {
    products: PropTypes.arrayOf(productType)
}

Basket.defaultProps = {
    products: []
}
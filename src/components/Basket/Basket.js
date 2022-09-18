import './styles.sass'
import PropTypes from 'prop-types'
import { productType } from '../LineProduct/LineProduct'
import { ProductPrice } from '../index'

export default function Basket({ products = [] }) {
    const basketProduct = (product) => (
        <li className='basket__product basket-product' key={product.id}>
            <p className='basket-product__name'>{product.name}</p>
            <ProductPrice price={product.price} />
        </li>
    )

    return (
        <div className='basket'>
            <div className='basket__header'>
            <h1 className='basket__title'>MI CESTA:</h1>
            </div>
            <div className='basket__product-list' />
            <ul className='basket__product-list'>
                {
                    products.map(product => basketProduct(product))
                }
            </ul>
            <div className='basket__footer'>
            <div className='basket__total-products'>
                <p className='basket__total-title'>TOTAL</p>
                <p className='basket__total-products-count'>(0 productos)</p>
            </div>
            <p className='basket__total-price'>0,00 €</p>
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
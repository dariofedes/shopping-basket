/* eslint-disable react/jsx-no-bind */
import PropTypes from 'prop-types'
import Product, { productType } from '../Product/Product'
import AddToBasketButton from '../AddToBasketButton/AddToBasketButton'
import './styles.sass'

export default function LineProduct({ product, onAddToBasket }) {
    function addToBasket() {
        onAddToBasket(product)
    }

    return (
        <li className='line-product'>
            <Product className='line-product__product' product={product} />
            <AddToBasketButton addToBasket={addToBasket} />
        </li>
    )
}

LineProduct.propTypes = {
    product: productType.isRequired,
    onAddToBasket: PropTypes.func.isRequired
}
import PropTypes from 'prop-types'
import './styles.sass'
import addToBasketIcon from '../../asets/add-to-cart.png'
import { ProductPrice } from '../index'

export default function LineProduct({ product }) {
    return (
        <div className='line-product'>
            <p className='line-product__name'>{product.name}</p>
            <div className='line-product__details'>
                <ProductPrice price={product.price} />
                <button className='line-product__add-to-basket add-to-basket' type='button'>
                    <img className='add-to-basket__icon' 
                        src={addToBasketIcon} 
                        alt='Añadir a la cesta'
                    />
                </button>
            </div>
        </div>
    )
}

export const productType = PropTypes.exact({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired
})

LineProduct.propTypes = {
    product: productType.isRequired
}
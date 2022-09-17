import PropTypes from 'prop-types'
import './styles.sass'
import addToBasketIcon from '../../asets/add-to-cart.png'

export default function LineProduct({ product }) {
    return (
        <div className='line-product'>
            <p className='line-product__name'>{product.name}</p>
            <div className='line-product__details'>
                <p className='line-product__price'>{product.price}</p>
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

LineProduct.propTypes = {
    product: PropTypes.exact({
        name: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired
    }).isRequired
}
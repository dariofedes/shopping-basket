import PropTypes from 'prop-types'
import './styles.sass'
import addToBasketIcon from '../../asets/add-to-cart.png'

export default function LineProduct({ product }) {
    const formatPrice = () => {
        const euroFormatter = Intl.NumberFormat("es-ES", {
            style: "currency",
            currency: "EUR",
        });

        return euroFormatter.format(product.price)
    }

    return (
        <div className='line-product'>
            <p className='line-product__name'>{product.name}</p>
            <div className='line-product__details'>
                <p className='line-product__price'>{formatPrice()}</p>
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
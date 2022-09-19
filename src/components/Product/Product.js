import PropTypes from 'prop-types'
import PriceTag from '../PriceTag/PriceTag'
import './styles.sass'

export default function Product ({ product }) {
    return (
        <div className='product'>
            <p className='product__name'>{product.name}</p>
            <PriceTag className='product__price' price={product.price} />
        </div>
    )
}

export const productType = PropTypes.exact({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired
})

Product.propTypes = {
    product: productType.isRequired
}
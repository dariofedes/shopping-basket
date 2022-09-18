import PropTypes from 'prop-types'
import ProductPrice from '../ProductPrice/ProductPrice'
import './styles.sass'

export default function Product ({ product }) {
    return (
        <div className='product'>
            <p className='product__name'>{product.name}</p>
            <ProductPrice className='product__price' price={product.price} />
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
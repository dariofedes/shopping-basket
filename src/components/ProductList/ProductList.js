import PropTypes from 'prop-types'
import LineProduct, { productType } from "../LineProduct/LineProduct";
import './styles.sass'

export default function ProductList({ products }) {
    return (
        <div className='product-list'>
            {products && products.map(product => (
                <LineProduct
                className='product-list__product'
                product={product}
                key={product.id}
                />
            ))}
        </div>
    )
}

ProductList.propTypes = {
    products: PropTypes.arrayOf(productType).isRequired
}
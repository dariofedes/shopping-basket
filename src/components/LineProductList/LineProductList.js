import PropTypes from 'prop-types'
import LineProduct from "../LineProduct/LineProduct";
import { productType } from '../Product/Product'
import './styles.sass'

export default function ProductList({ products }) {
    return (
        <ul className='product-list'>
            {products && products.map(product => (
                <LineProduct
                className='product-list__product'
                product={product}
                key={product.id}
                />
            ))}
        </ul>
    )
}

ProductList.propTypes = {
    products: PropTypes.arrayOf(productType).isRequired
}
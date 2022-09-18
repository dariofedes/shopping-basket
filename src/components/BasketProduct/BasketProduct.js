import Product, { productType } from '../Product/Product'
import './styles.sass'

export default function BasketProduct ({ product }) {
    return (
        <li className='basket-product'>
            <Product className='basket-product__product' product={product} />
        </li>
    )
}

BasketProduct.propTypes = {
    product: productType.isRequired
}
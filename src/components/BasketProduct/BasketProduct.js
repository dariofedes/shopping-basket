/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import Product, { productType } from '../Product/Product'
import ProductImage from '../ProductImage/ProductImage'
import './styles.sass'

export default function BasketProduct ({ product }) {
    return (
        <li className='basket-product'>
            <ProductImage imageName={product.image} />
            <Product className='basket-product__product' product={product} />
        </li>
    )
}

BasketProduct.propTypes = {
    product: productType.isRequired
}
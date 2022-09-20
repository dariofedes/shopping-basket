/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useBasket } from '../../hooks/use-basket'
import Product, { productType } from '../Product/Product'
import ProductImage from '../ProductImage/ProductImage'
import './styles.sass'

export default function BasketProduct ({ product }) {
    const { removeFromBasket } = useBasket()

    return (
        <li className='basket-product' onClick={() => removeFromBasket(product)}>
            <ProductImage className='basket-product__image' imageName={product.image} />
            <Product className='basket-product__product' product={product} />
        </li>
    )
}

BasketProduct.propTypes = {
    product: productType.isRequired
}
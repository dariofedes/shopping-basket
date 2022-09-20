import { useBasket } from '../../hooks/use-basket'
import Product, { productType } from '../Product/Product'
import ProductImage from '../ProductImage/ProductImage'
import RemoveFromBasketButton from '../RemoveFromBasketButton/RemoveFromBasketButton'
import './styles.sass'

export default function BasketProduct ({ product }) {
    const { removeFromBasket } = useBasket()

    return (
        <li className='basket-product'>
            <ProductImage className='basket-product__image' imageName={product.image} />
            <Product className='basket-product__product' product={product} />
            <RemoveFromBasketButton removeFromBasket={() => removeFromBasket(product)} />
        </li>
    )
}

BasketProduct.propTypes = {
    product: productType.isRequired
}
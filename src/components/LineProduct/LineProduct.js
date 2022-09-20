import Product, { productType } from '../Product/Product'
import AddToBasketButton from '../AddToBasketButton/AddToBasketButton'
import './styles.sass'
import { useBasket } from '../../hooks/use-basket'

export default function LineProduct({ product }) {
    const { addToBasket, isProductInBasket } = useBasket()
    
    return (
        <li className='line-product'>
            <Product className='line-product__product' product={product} inBasket={isProductInBasket(product)} />
            <AddToBasketButton addToBasket={() => addToBasket(product)} disabled={isProductInBasket(product)} />
        </li>
    )
}

LineProduct.propTypes = {
    product: productType.isRequired
}
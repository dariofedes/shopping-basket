import Product, { productType } from '../Product/Product'
import AddToBasketButton from '../AddToBasketButton/AddToBasketButton'
import './styles.sass'

export default function LineProduct({ product }) {
    return (
        <li className='line-product'>
            <Product className='line-product__product' product={product} />
            <AddToBasketButton />
        </li>
    )
}

LineProduct.propTypes = {
    product: productType.isRequired
}
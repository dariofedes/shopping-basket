import { useEffect, useState } from 'react'
import Product, { productType } from '../Product/Product'
import AddToBasketButton from '../AddToBasketButton/AddToBasketButton'
import './styles.sass'
import { useBasket } from '../../hooks/use-basket'

export default function LineProduct({ product }) {
    const [inBasket, setInBasket] = useState()
    const { addToBasket, basket } = useBasket()

    function isProductInBasket() {
        return basket.filter(productInBasket => productInBasket.id === product.id).length > 0
    }

    useEffect(() => {
        setInBasket(isProductInBasket())
    }, [basket])

    return (
        <li className='line-product'>
            <Product className='line-product__product' product={product} />
            <AddToBasketButton addToBasket={() => addToBasket(product)} disabled={inBasket} />
        </li>
    )
}

LineProduct.propTypes = {
    product: productType.isRequired
}
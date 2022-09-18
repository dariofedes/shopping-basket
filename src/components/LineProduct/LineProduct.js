import Product, { productType } from '../Product/Product'
import './styles.sass'
import addToBasketIcon from '../../asets/add-to-cart.png'

export default function LineProduct({ product }) {
    return (
        <li className='line-product'>
            <Product className='line-product__product' product={product} />
            <button className='line-product__add-to-basket add-to-basket' type='button'>
                <img className='add-to-basket__icon' 
                    src={addToBasketIcon} 
                    alt='Añadir a la cesta'
                />
            </button>
        </li>
    )
}

LineProduct.propTypes = {
    product: productType.isRequired
}
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import Product, { productType } from '../Product/Product'
import './styles.sass'
import ProductService from '../../services/product-service'

export default function BasketProduct ({ product }) {
    const productService = new ProductService()
    const image = productService.loadImage(product.image)

    return (
        <li className='basket-product'>
            <img className='basket-product__image'
                src={image}
                alt={product.image.split('.')[0].replace(/-/g, ' ')}
            />
            <Product className='basket-product__product' product={product} />
        </li>
    )
}

BasketProduct.propTypes = {
    product: productType.isRequired
}
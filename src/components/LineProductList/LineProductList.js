import { useProduct } from '../../hooks/use-product'
import LineProduct from "../LineProduct/LineProduct";
import Loading from '../Loading/Loading';
import './styles.sass'

export default function ProductList() {
    const { products, isLoading } = useProduct()
    return (
        <ul className='product-list'>
            {
                isLoading
                ? <Loading />
                : products.map(product => (
                    <LineProduct className='product-list__product'
                        product={product}
                        key={product.id}
                    />
                ))}
        </ul>
    )
}
import { useBasket } from "../../hooks/use-basket"
import PriceTag from "../PriceTag/PriceTag"
import './styles.sass'

export default function Total() {
    const { productsCount, total } = useBasket()
    
    return (
        <div className='total'>
            <p className='total__title'>TOTAL</p>
            <div className='total__details'>
                <p className='total__products-count'>
                    {`(${productsCount} productos)`}
                </p>
                <PriceTag className='total__price' price={total} total />
            </div>
        </div>
    )
}
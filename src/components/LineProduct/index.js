import './styles.sass'
import addToBasketIcon from '../../asets/add-to-cart.png'

export default function LineProduct() {
    return (
        <div className='line-product'>
            <p className='line-product__name'>LaJusticia colágeno con magnesio 450comp</p>
            <div className='line-product__details'>
                <p className='line-product__price'>14,35€</p>
                <button className='line-product__add-to-basket add-to-basket' type='button'>
                    <img className='add-to-basket__icon' 
                        src={addToBasketIcon} 
                        alt='Añadir a la cesta'
                    />
                </button>
            </div>
        </div>
    )
}
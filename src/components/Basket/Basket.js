import './styles.sass'

export default function Basket() {
    return (
        <div className='basket'>
            <div className='basket__header'>
            <h1 className='basket__title'>MI CESTA:</h1>
            </div>
            <div className='basket__product-list' />
            <div className='basket__footer'>
            <div className='basket__total-products'>
                <p className='basket__total-title'>TOTAL</p>
                <p className='basket__total-products-count'>(0 productos)</p>
            </div>
            <p className='basket__total-price'>0,00 €</p>
            </div>
        </div>
    )
}
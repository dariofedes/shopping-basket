/* eslint-disable global-require */
import PropTypes from 'prop-types'
import './styles.sass'

export default function AddTobasketButton ({ addToBasket }) {
    return (
        <button className='add-to-basket' type='button' onClick={() => addToBasket()}>
            <img className='add-to-basket__icon' 
                src={require('../../asets/add-to-cart.png')} 
                alt='Añadir a la cesta'
            />
        </button>
    )
}

AddTobasketButton.propTypes = {
    addToBasket: PropTypes.func.isRequired
}
/* eslint-disable global-require */
import PropTypes from 'prop-types'
import './styles.sass'
import basketLogo from '../../assets/add-to-cart.svg'

export default function AddTobasketButton ({ addToBasket, disabled }) {
    return (
        <button className={`add-to-basket ${disabled ? 'add-to-basket--disabled' : ''}`}
            type='button'
            onClick={() => addToBasket()}
            disabled={disabled}
        >
            <img className='add-to-basket__icon' 
                src={basketLogo} 
                alt='Añadir a la cesta'
            />
        </button>
    )
}

AddTobasketButton.propTypes = {
    addToBasket: PropTypes.func.isRequired,
    disabled: PropTypes.bool
}

AddTobasketButton.defaultProps =  {
    disabled: false
}
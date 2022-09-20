import PropTypes from 'prop-types'
import './styles.sass'

export default function RemoveFromBasketButton({ removeFromBasket }) {
    return (
        <button className='remove'
            type='button'
            onClick={() => removeFromBasket()}
        >
            🗑
        </button>
    )
}

RemoveFromBasketButton.propTypes = {
    removeFromBasket: PropTypes.func.isRequired
}
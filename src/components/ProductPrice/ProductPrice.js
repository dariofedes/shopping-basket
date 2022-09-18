import PropTypes from 'prop-types'
import './styles.sass'

export default function ProductPrice ({ price }) {
    const formatPrice = () => {
        const euroFormatter = Intl.NumberFormat("es-ES", {
            style: "currency",
            currency: "EUR",
        });

        return euroFormatter.format(price)
    }

    return <p className='product-price'>{formatPrice(price)}</p>
}

ProductPrice.propTypes = {
    price: PropTypes.number.isRequired
}
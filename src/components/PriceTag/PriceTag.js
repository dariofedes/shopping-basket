import PropTypes from 'prop-types'
import './styles.sass'

export default function PriceTag ({ price, total, disabled }) {
    const formatPrice = () => {
        const euroFormatter = Intl.NumberFormat("es-ES", {
            style: "currency",
            currency: "EUR",
        })

        return euroFormatter.format(price)
    }

    return (
        <p className={`product-price ${total ? 'product-price--total' : ''} ${disabled ? 'product-price--disabled' : ''}`}>
            {formatPrice(price)}
        </p>
    )
}

PriceTag.propTypes = {
    price: PropTypes.number.isRequired,
    total: PropTypes.bool,
    disabled: PropTypes.bool,
}

PriceTag.defaultProps = {
    total: false,
    disabled: false,
}
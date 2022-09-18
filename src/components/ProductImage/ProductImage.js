/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import PropTypes from 'prop-types'
import './styles.sass'

export default function ProductImage({ imageName }) {
    function loadImage() {
        try {
            return require(`../../asets/${imageName}`)
        } catch {
            return ""
        }
    }

    function formatAltText() {
        const imageNameWitoutExtention = imageName.split('.')[0]

        const imageNameWithSpaces = imageNameWitoutExtention.replace(/-/g, ' ')

        return imageNameWithSpaces
    }

    return (
        <img className='product-image'
            src={loadImage()}
            alt={formatAltText()}
        />
    )
}

ProductImage.propTypes = {
    imageName: PropTypes.string.isRequired
}
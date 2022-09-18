import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react'
import ProductImage from './ProductImage'

describe('ProductImage', () => {
    it('should show an image of the product with its name as alt text', () => {
        // Given
        const imageName = 'an-image-uri.jpg'
        const expectedAltText = 'an image uri'

        // When
        render(<ProductImage imageName={imageName} />)

        // Then
        const productImage = screen.getByRole('img')
        expect(productImage).toBeInTheDocument()
        expect(productImage.alt).toBe(expectedAltText)
    })
})
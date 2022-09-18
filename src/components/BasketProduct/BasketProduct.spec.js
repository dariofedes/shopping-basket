import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react'
import BasketProduct from './BasketProduct'

describe('BasketProduct', () => {
    const product = {
        id: 1,
        name: 'A product name',
        price: 100,
        image: 'an-image-uri.jpg'
    }

    it('should show the given product name', () => {
        render(<BasketProduct product={product} />)
    
        const productName = screen.getByText(product.name)
    
        expect(productName).toBeInTheDocument()
    })

    it('should show the given product price', () => {
        render(<BasketProduct product={product} />)

        const priceTag = `100,00 €`
    
        const productPrice = screen.getByText(priceTag)
    
        expect(productPrice).toBeInTheDocument()
    })

    it('should show an image of the product with its name as alt text', () => {
        // Given
        const expectedAltText = 'an image uri'

        // When
        render(<BasketProduct product={product} />)

        // Then
        const productImage = screen.getByRole('img')
        expect(productImage).toBeInTheDocument()
        expect(productImage.alt).toBe(expectedAltText)
    })
})
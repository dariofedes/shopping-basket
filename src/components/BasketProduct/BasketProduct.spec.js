import '@testing-library/jest-dom'
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
        // When
        render(<BasketProduct product={product} />)
    
        // Then
        const productName = screen.getByText(product.name)
        expect(productName).toBeInTheDocument()
    })

    it('should show the given product price', () => {
        // Given
        const priceTag = `100,00 €`
        
        // When
        render(<BasketProduct product={product} />)

        // Then
        const productPrice = screen.getByText(priceTag)
        expect(productPrice).toBeInTheDocument()
    })

    it('should show an image of the product', () => {
        // When
        render(<BasketProduct product={product} />)

        // Then
        const productImage = screen.getByRole('img')
        expect(productImage).toBeInTheDocument()
    })
})
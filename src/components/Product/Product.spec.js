import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Product from './Product'

describe('Product', () => {
    const product = {
        id: 1,
        name: 'A product name',
        price: 100,
        image: 'an-image-uri.jpg'
    }

    it('should show the given product name', () => {
        // When
        render(<Product product={product} />)
    
        // Then
        const productName = screen.getByText(product.name)
        expect(productName).toBeInTheDocument()
    })

    it('should show the given product price', () => {
        // When
        render(<Product product={product} />)

        // Then
        const priceTag = `100,00 €`
        const productPrice = screen.getByText(priceTag)
    
        expect(productPrice).toBeInTheDocument()
    })
})
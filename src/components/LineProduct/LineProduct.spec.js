import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react'
import LineProduct from './LineProduct'

describe('LineProduct', () => {
    const product = {
        id: 1,
        name: 'A product name',
        price: 100,
        image: 'an-image-uri.jpg'
    }

    it('should show the given product name', () => {
        render(<LineProduct product={product} />)
    
        const productName = screen.getByText(product.name)
    
        expect(productName).toBeInTheDocument()
    })

    it('should show the given product price', () => {
        render(<LineProduct product={product} />)

        const priceTag = `100,00 €`
    
        const productPrice = screen.getByText(priceTag)
    
        expect(productPrice).toBeInTheDocument()
    })

    it('should show a button to add the product to the basket', () => {
        render(<LineProduct product={product} />)
    
        const addToBasketButton = screen.getByRole('button')
    
        expect(addToBasketButton).toBeInTheDocument()
    })

    it('should show the prices with "," for separate decimals', () => {
        // Given
        const productWithFloatPrice = {
            id: 1,
            name: 'A product name',
            price: 100.1,
            image: 'an-image-uri.jpg'
        }
        const priceTag = `100,10 €`
        
        // When
        render(<LineProduct product={productWithFloatPrice} />)
        
        // Then
        const productPrice = screen.getByText(priceTag)
        expect(productPrice).toBeInTheDocument()
    })
})
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react'
import LineProduct from '.'

describe('LineProduct', () => {
    const product = {
        name: 'A product name',
        price: 'A product price'
    }

    it('should show the given product name', () => {
        render(<LineProduct product={product} />)
    
        const productName = screen.getByText(product.name)
    
        expect(productName).toBeInTheDocument()
    })

    it('should show the given product price', () => {
        render(<LineProduct product={product} />)
    
        const productPrice = screen.getByText(product.price)
    
        expect(productPrice).toBeInTheDocument()
    })

    it('should show a button to add the product to the basket', () => {
        render(<LineProduct product={product} />)
    
        const addToBasketButton = screen.getByRole('button')
    
        expect(addToBasketButton).toBeInTheDocument()
    })
})
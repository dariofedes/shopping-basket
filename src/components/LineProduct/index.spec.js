import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react'
import LineProduct from '.'

describe('LineProduct', () => {
    it('should show a product name', () => {
        render(<LineProduct />)
    
        const productName = screen.getByText('LaJusticia colágeno con magnesio 450comp')
    
        expect(productName).toBeInTheDocument()
    })

    it('should show a product price', () => {
        render(<LineProduct />)
    
        const productPrice = screen.getByText('14,35€')
    
        expect(productPrice).toBeInTheDocument()
    })

    it('should show a button to add the product to the basket', () => {
        render(<LineProduct />)
    
        const addToBasketButton = screen.getByRole('button')
    
        expect(addToBasketButton).toBeInTheDocument()
    })
})
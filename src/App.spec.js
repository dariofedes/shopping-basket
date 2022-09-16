import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
    it('should show a product name', () => {
        render(<App />)
    
        const productName = screen.getByText('LaJusticia colágeno con magnesio 450comp')
    
        expect(productName).toBeInTheDocument()
    })

    it('should show a product price', () => {
        render(<App />)
    
        const productPrice = screen.getByText('14,35€')
    
        expect(productPrice).toBeInTheDocument()
    })

    it('should show a button to add the product to the basket', () => {
        render(<App />)
    
        const addToBasketButton = screen.getByRole('button')
    
        expect(addToBasketButton).toHaveTextContent('Añadir a la cesta')
    })
})
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
    it('should show the product list', async () => {
        // When
        render(<App />)

        // Then
        const productList = screen.getByTestId('product-list')
        expect(productList).toBeInTheDocument()
    })
    it('should show the basket', () => {
        // When
        render(<App />)
    
        // Then
        const basketTitle = screen.getByText('MI CESTA:')
        expect(basketTitle).toBeInTheDocument()
    })

    afterEach(() => {
        jest.clearAllMocks()
    })
})
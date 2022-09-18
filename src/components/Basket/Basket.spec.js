import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react'
import Basket from './Basket'

describe('Basket', () => {
    it('should show the basket with 0 products added', () => {
        // When
        render(<Basket />)
    
        // Then
        const basketTitle = screen.getByText('MI CESTA:')
        const totalTitle = screen.getByText('TOTAL')
        const totalProducts = screen.getByText('(0 productos)')
        const totalPrice = screen.getByText('0,00 €')
    
        expect(basketTitle).toBeInTheDocument()
        expect(totalTitle).toBeInTheDocument()
        expect(totalProducts).toBeInTheDocument()
        expect(totalPrice).toBeInTheDocument()
    })
})
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Total from './Total'
import * as hooks from '../../hooks/use-basket'

describe('Total', () => {
    beforeEach(() => {
        jest.spyOn(hooks, 'useBasket').mockImplementation(() => ({
            productsCount: 3,
            total: 600
        }))
    })

    it('should show a count of products in basket', () => {
        // When
        render(<Total />)

        // Then
        const productsCounter = screen.getByText('(3 productos)')
        expect(productsCounter).toBeInTheDocument()
    })

    it('should show the total price of the products in basket', () => {
        // When
        render(<Total />)

        // Then
        const totalPrice = screen.getByText('600,00 €')
        expect(totalPrice).toBeInTheDocument()
    })
    
    afterEach(() => {
        jest.clearAllMocks()
    })
})
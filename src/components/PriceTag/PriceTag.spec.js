import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react'
import PriceTag from './PriceTag'

describe('PriceTag', () => {
    it('should show the price in "XX,XX €" format', () =>{
        // Given
        const price = 100

        // When
        render(<PriceTag price={price} />)

        // Then
        const renderedPrice = screen.getByText('100,00 €')
        expect(renderedPrice).toBeInTheDocument()
    })
})
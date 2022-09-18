import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react'
import ProductPrice from './ProductPrice'

describe('ProductPrice', () => {
    it('should show the price in "XX,XX €" format', () =>{
        // Given
        const price = 100

        // When
        render(<ProductPrice price={price} />)

        // Then
        const renderedPrice = screen.getByText('100,00 €')
        expect(renderedPrice).toBeInTheDocument()
    })
})
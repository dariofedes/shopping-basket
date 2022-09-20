import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import AddToBasketButton from './AddToBasketButton'

describe('AddToBasketButton', () => {
    it('should fire the function passed via props on click', () => {
        // Given
        const spyOnClickHandler = jest.fn()
        render(<AddToBasketButton addToBasket={spyOnClickHandler} />)
        const button = screen.getByRole('button')
        
        // When
        fireEvent.click(button)

        // Then
        expect(spyOnClickHandler).toHaveBeenCalled()
    })

    it('should be desabled when disabled via props', () => {
        // When
        render(<AddToBasketButton disabled />)

        // Then
        const button = screen.getByRole('button')
        expect(button).toBeDisabled()
    })
})
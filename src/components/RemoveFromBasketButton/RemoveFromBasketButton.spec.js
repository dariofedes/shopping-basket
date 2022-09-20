import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import RemoveFromBasketButton from './RemoveFromBasketButton'

describe('RemoveFromBasketButton', () => {
    it('should fire the function passed via props on click', () => {
        // Given
        const spyOnClickHandler = jest.fn()
        const spyArgument = true
        render(<RemoveFromBasketButton removeFromBasket={() => spyOnClickHandler(spyArgument)} />)
        const button = screen.getByRole('button')
        
        // When
        fireEvent.click(button)

        // Then
        expect(spyOnClickHandler).toHaveBeenCalledWith(spyArgument)
    })
})
/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import '@testing-library/jest-dom'
import { render, waitFor, fireEvent, screen } from '@testing-library/react'
import App from './App'

describe('App Acceptance Test', () => {
    it('should show 6 products names', async () => {
        // When
        const { container } = render(<App />)

        // Then
        const products = container.getElementsByClassName('line-product')
        await waitFor(() => expect(products).toHaveLength(6))
    })

    it('should show added items in basket', async () => {
        // Given
        render(<App />)

        const [ firstProductAddButton, secondProductAddButton ] = await screen.findAllByAltText('Añadir a la cesta')

        // When
        fireEvent.click(firstProductAddButton)
        fireEvent.click(secondProductAddButton)

        // Then
        const totalProducts = screen.getByText('(2 productos)')
        expect(totalProducts).toBeInTheDocument()
        const totalPrice = screen.getByText('20,84 €')
        expect(totalPrice).toBeInTheDocument()
    })
})
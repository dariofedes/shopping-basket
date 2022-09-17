/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import '@testing-library/jest-dom';
import { render, waitFor } from '@testing-library/react'
import App from './App'

describe('App Acceptance Test', () => {
    it('should show 6 products names', async () => {
        // When
        const { container } = render(<App />)

        // Then
        const products = container.getElementsByClassName('line-product')
        await waitFor(() => expect(products).toHaveLength(6))
    })
})
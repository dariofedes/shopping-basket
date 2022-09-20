import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react'
import Loading from './Loading'

describe('Loading', () => {
    it('should show a text with "Cargando..."', () => {
        // When
        render(<Loading />)

        // Then
        const loadingMessage = screen.getByText('Cargando...')
        expect(loadingMessage).toBeInTheDocument()
    })
})
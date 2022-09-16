import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
    it('should show an item name', () => {
        render(<App />)
    
        const item = screen.getByText('LaJusticia colágeno con magnesio 450comp')
    
        expect(item).toBeInTheDocument()
    })
})
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Basket from './Basket'
import * as hooks from '../../hooks/use-basket'


describe('Basket', () => {
    const products = [
        {
            id: 1,
            name: 'A product name 1',
            price: 100,
            image: 'an-image-uri.jpg'
        },
        {
            id: 2,
            name: 'A product name 2',
            price: 200,
            image: 'an-image-uri.jpg'
        },
        {
            id: 3,
            name: 'A product name 3',
            price: 300,
            image: 'an-image-uri.jpg'
        },
    ]

    beforeEach(() => {
        jest.spyOn(hooks, 'useBasket').mockImplementation(() => ({ basket: products }))
    })

    it('should show the basket', async () => {
        jest.spyOn(hooks, 'useBasket').mockImplementation(() => ({
            basket: [],
            total: 0
        }))

        // When
        render(<Basket />)
    
        // Then
        const basketTitle = screen.getByText('MI CESTA:')
    
        expect(basketTitle).toBeInTheDocument()
    })

    it('should show products added to the basket', async () => {
        // When
        render(<Basket />)

        // Then
        const productsInBasket = await screen.findAllByRole('listitem')
        expect(productsInBasket).toHaveLength(3)
    })
})
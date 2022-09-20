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

    it('should show the basket with 0 products added', () => {
        jest.spyOn(hooks, 'useBasket').mockImplementation(() => ({
            basket: [],
            total: 0
        }))

        // When
        render(<Basket />)
    
        // Then
        const basketTitle = screen.getByText('MI CESTA:')
        const totalTitle = screen.getByText('TOTAL')
        const totalProducts = screen.getByText('(0 productos)')
        const totalPrice = screen.getByText('0,00 €')
    
        expect(basketTitle).toBeInTheDocument()
        expect(totalTitle).toBeInTheDocument()
        expect(totalProducts).toBeInTheDocument()
        expect(totalPrice).toBeInTheDocument()
    })

    it('should show products added to the basket', async () => {
        // When
        render(<Basket />)

        // Then
        const productsInBasket = await screen.findAllByRole('listitem')
        expect(productsInBasket).toHaveLength(3)
        expect(screen.getByText('A product name 1')).toBeInTheDocument()
        expect(screen.getByText('100,00 €')).toBeInTheDocument()
        expect(screen.getByText('A product name 2')).toBeInTheDocument()
        expect(screen.getByText('200,00 €')).toBeInTheDocument()
        expect(screen.getByText('A product name 3')).toBeInTheDocument()
        expect(screen.getByText('300,00 €')).toBeInTheDocument()
    })

    it('should show a count of products in basket', () => {
        // When
        render(<Basket />)

        // Then
        const productsCounter = screen.getByText('(3 productos)')
        expect(productsCounter).toBeInTheDocument()
    })

    it('should show the total price of the products in basket', () => {
        // Given
        jest.spyOn(hooks, 'useBasket').mockImplementation(() => ({
            basket: products,
            total: 600
        }))

        // When
        render(<Basket />)

        // Then
        const totalPrice = screen.getByText('600,00 €')
        expect(totalPrice).toBeInTheDocument()
    })
})
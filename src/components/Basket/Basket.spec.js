import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react'
import Basket from './Basket'
import ProductService from '../../services/product-service'

describe('Basket', () => {
    beforeEach(() => {
        jest.mock('../../services/product-service')
        ProductService.prototype.loadImage = jest.fn(() => 'an-image-uri.jpg')
    })

    it('should show the basket with 0 products added', () => {
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

    it('should show products added to the basket', () => {
        // Given
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

        // When
        render(<Basket products={products} />)

        // Then
        const productsInBasket = screen.getAllByRole('listitem')
        expect(productsInBasket).toHaveLength(3)
        expect(screen.getByText('A product name 1')).toBeInTheDocument()
        expect(screen.getByText('100,00 €')).toBeInTheDocument()
        expect(screen.getByText('A product name 2')).toBeInTheDocument()
        expect(screen.getByText('200,00 €')).toBeInTheDocument()
        expect(screen.getByText('A product name 3')).toBeInTheDocument()
        expect(screen.getByText('300,00 €')).toBeInTheDocument()
    })

    afterEach(() => {
        jest.clearAllMocks()
    })
})
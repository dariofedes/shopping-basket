import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react'
import LineProduct from './LineProduct'
import * as hooks from '../../hooks/use-basket'

describe('LineProduct', () => {
    const product = {
        id: 1,
        name: 'A product name',
        price: 100,
        image: 'an-image-uri.jpg'
    }

    const mockUseBasket = {
        basket: [],
        isProductInBasket: jest.fn()
    }

    beforeEach(() => {
        jest.spyOn(hooks, 'useBasket').mockImplementation(() => mockUseBasket)
    })

    it('should show the given product name', () => {
        render(<LineProduct product={product} />)
    
        const productName = screen.getByText(product.name)
    
        expect(productName).toBeInTheDocument()
    })

    it('should show the given product price', () => {
        render(<LineProduct product={product} />)

        const priceTag = `100,00 €`
    
        const productPrice = screen.getByText(priceTag)
    
        expect(productPrice).toBeInTheDocument()
    })

    it('should show a button to add the product to the basket', () => {
        render(<LineProduct product={product} />)
    
        const addToBasketButton = screen.getByRole('button')
    
        expect(addToBasketButton).toBeInTheDocument()
    })

    it('should disable add to basket when already added', () => {
        // Given
        const mockUseBaskets = {
            basket: [],
            isProductInBasket: jest.fn(() => true)
        }
    
        jest.spyOn(hooks, 'useBasket').mockImplementation(() => mockUseBaskets)
        
            
        
        // When
        render(<LineProduct product={product} />)
        const button = screen.getByRole('button')

        // Then
        expect(button).toBeDisabled()
    })
})
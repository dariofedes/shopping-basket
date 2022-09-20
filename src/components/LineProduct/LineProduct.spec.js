import '@testing-library/jest-dom'
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

    const stubUseBasket = {
        basket: [],
        isProductInBasket: jest.fn()
    }

    beforeEach(() => {
        jest.spyOn(hooks, 'useBasket').mockImplementation(() => stubUseBasket)
    })

    it('should show the given product name', () => {
        // When
        render(<LineProduct product={product} />)
    
        // Then
        const productName = screen.getByText(product.name)
        expect(productName).toBeInTheDocument()
    })

    it('should show the given product price', () => {
        // Given
        const priceTag = `100,00 €`

        // When
        render(<LineProduct product={product} />)
        
        // Then
        const productPrice = screen.getByText(priceTag)
        expect(productPrice).toBeInTheDocument()    
    })

    it('should show a button to add the product to the basket', () => {
        // When
        render(<LineProduct product={product} />)
    
        // Then
        const addToBasketButton = screen.getByRole('button')
        expect(addToBasketButton).toBeInTheDocument()
    })

    it('should disable add to basket when already added', () => {
        // Given
        stubUseBasket.isProductInBasket = jest.fn(() => true)
        jest.spyOn(hooks, 'useBasket').mockImplementation(() => stubUseBasket)
        
        // When
        render(<LineProduct product={product} />)
        
        // Then
        const button = screen.getByRole('button')
        expect(button).toBeDisabled()
    })
})
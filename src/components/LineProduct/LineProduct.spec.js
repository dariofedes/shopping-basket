import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react'
import LineProduct from './LineProduct'
import * as hooks from '../../hooks/use-basket'


describe('LineProduct', () => {
    const product = {
        id: 1,
        name: 'A product name',
        price: 100,
        image: 'an-image-uri.jpg'
    }

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
        render(<LineProduct product={product} />)

        // When
        const button = screen.getByRole('button')
        fireEvent.click(button)

        // Then
        expect(button).toBeDisabled()
    })

    it('should disable add to basket when already in basket', () => {
        // Given
        jest.spyOn(hooks, 'useBasket').mockImplementation(() => ({ basket: [product] }))

        // When
        render(<LineProduct product={product} />)
        const button = screen.getByRole('button')

        // Then
        expect(button).toBeDisabled()
    })
})
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react'
import ProductService from './services/product-service';
import BasketService from './services/basket-service';
import App from './App'

describe('App', () => {
    const product = {
        id: 1,
        name: 'A product name',
        price: 100,
        image: 'an-image-uri.jpg'
    }
    const products = [product]

    beforeEach(() => {
        const productsPromise = new Promise(resolve => {
            resolve(products)
        })
        jest.mock('./services/product-service.js')
        ProductService.prototype.retrieveProducts = jest.fn(() => productsPromise)

        const basketProductsPromise = new Promise(resolve => {
            resolve([])
        })
        jest.mock('./services/basket-service.js')
        BasketService.prototype.retrieveBasketProducts = jest.fn(() => basketProductsPromise)
    })

    it('should retrieve all products', async () => {
        // When
        render(<App />)

        // Then
        await waitFor(() => expect(ProductService.prototype.retrieveProducts).toHaveBeenCalled())
    })

    it('should show name and price for each product', async () => {
        // When
        render(<App />)

        // Then
        const productName = await screen.findByText(product.name)
        const productPrice = await screen.findByText(`100,00 €`)
        expect(productName).toBeInTheDocument()
        expect(productPrice).toBeInTheDocument()
    })
    it('should show the basket', () => {
        // When
        render(<App />)
    
        // Then
        const basketTitle = screen.getByText('MI CESTA:')
        expect(basketTitle).toBeInTheDocument()
    })

    it('should retrieve products in the basket', async () => {
        // Given
        const basketProductsPromise = new Promise(resolve => {
            resolve(products)
        })
        const spyRetrieveBasketProducts = jest.fn(() => basketProductsPromise)

        BasketService.prototype.retrieveBasketProducts = spyRetrieveBasketProducts

        // When
        render(<App />)

        // Then
        await waitFor(() => expect(spyRetrieveBasketProducts).toHaveBeenCalled())
    })

    

    afterEach(() => {
        jest.clearAllMocks()
    })
})
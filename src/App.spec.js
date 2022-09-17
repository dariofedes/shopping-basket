import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react'
import ProductService from './services/product-service';
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
        const productPrice = await screen.findByText(`${product.price}€`)
        expect(productName).toBeInTheDocument()
        expect(productPrice).toBeInTheDocument()
    })

    afterEach(() => {
        jest.clearAllMocks()
    })
})
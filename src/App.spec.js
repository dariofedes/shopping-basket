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
        const productPrice = await screen.findByText(`100,00 €`)
        expect(productName).toBeInTheDocument()
        expect(productPrice).toBeInTheDocument()
    })

    it('should show a basket with 0 products added', () => {
        // When
        render(<App />)

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

    afterEach(() => {
        jest.clearAllMocks()
    })
})
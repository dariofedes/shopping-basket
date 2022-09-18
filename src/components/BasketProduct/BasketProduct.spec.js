import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react'
import BasketProduct from './BasketProduct'

describe('Product', () => {
    const product = {
        id: 1,
        name: 'A product name',
        price: 100,
        image: 'an-image-uri.jpg'
    }

    it('should show the given product name', () => {
        render(<BasketProduct product={product} />)
    
        const productName = screen.getByText(product.name)
    
        expect(productName).toBeInTheDocument()
    })

    it('should show the given product price', () => {
        render(<BasketProduct product={product} />)

        const priceTag = `100,00 €`
    
        const productPrice = screen.getByText(priceTag)
    
        expect(productPrice).toBeInTheDocument()
    })
})
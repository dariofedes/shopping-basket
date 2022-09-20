/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-node-access */
import { render } from '@testing-library/react'
import ProductList from './LineProductList'
import * as hooks from '../../hooks/use-basket'

describe('ProductList', () => {
    const mockUseBasket = {
        basket: [],
        isProductInBasket: jest.fn()
    }

    beforeEach(() => {
        jest.spyOn(hooks, 'useBasket').mockImplementation(() => mockUseBasket)
    })
    
    it.each([
        [[
            {
                id: 1,
                name: 'A product name',
                price: 100,
                image: 'an-image-uri.jpg'
            },
        ]],
        [[
            {
                id: 1,
                name: 'A product name',
                price: 100,
                image: 'an-image-uri.jpg'
            },
            {
                id: 2,
                name: 'A product name',
                price: 100,
                image: 'an-image-uri.jpg'
            }
        ]],
        [[
            {
                id: 1,
                name: 'A product name',
                price: 100,
                image: 'an-image-uri.jpg'
            },
            {
                id: 2,
                name: 'A product name',
                price: 100,
                image: 'an-image-uri.jpg'
            },
            {
                id: 3,
                name: 'A product name',
                price: 100,
                image: 'an-image-uri.jpg'
            },
            {
                id: 4,
                name: 'A product name',
                price: 100,
                image: 'an-image-uri.jpg'
            }
        ]]
    ])('should render all the products passed via props', (products) => {
        // When
        const { container } = render(<ProductList products={products} />)

        // Then
        const renderedProducts = container.getElementsByClassName('line-product')
        expect(renderedProducts).toHaveLength(products.length)
    })
})
import { renderHook, act, cleanup } from "@testing-library/react";
import { useBasketImplementation } from "./use-basket";
import BasketService from '../application/basket-service'

describe('useBasket', () => {
    beforeEach(() => {
        jest.mock('../application/basket-service')
    })
    it('should load products in basket on mount', () => {
        // Given
        const spyRetrieveBasketProducts = jest.fn()
        BasketService.prototype.retrieveBasketProducts = spyRetrieveBasketProducts

        // When
        renderHook(() => useBasketImplementation())

        // Then
        expect(spyRetrieveBasketProducts).toHaveBeenCalled()
    })

    it('should add products to the basket state', async () => {
        // Given
        const spyAddProductToBasket = jest.fn()
        BasketService.prototype.addProductToBasket = spyAddProductToBasket
        const { result } = renderHook(() => useBasketImplementation())
        const productToAdd ={
            id: 1,
            name: 'A product name',
            price: 100,
            image: 'an-image-uri.jpg'
        } 

        // When
        act(() => {
            result.current.addToBasket(productToAdd)
        })

        // Then
        expect(result.current.basket).toHaveLength(1)
        expect(result.current.basket[0]).toBe(productToAdd)
    })

    it('should should persist product in basket', async () => {
        // Given
        const spyAddProductToBasket = jest.fn()
        BasketService.prototype.addProductToBasket = spyAddProductToBasket
        const { result } = renderHook(() => useBasketImplementation())
        const productToAdd ={
            id: 1,
            name: 'A product name',
            price: 100,
            image: 'an-image-uri.jpg'
        } 

        // When
        act(() => {
            result.current.addToBasket(productToAdd)
        })

        // Then
        expect(spyAddProductToBasket).toHaveBeenCalledWith(productToAdd)
    })

    it('should remove a product from basket', async () => {
        // Given
        const spyAddProductToBasket = jest.fn()
        BasketService.prototype.addProductToBasket = spyAddProductToBasket
        const { result } = renderHook(() => useBasketImplementation())
        const product ={
            id: 1,
            name: 'A product name',
            price: 100,
            image: 'an-image-uri.jpg'
        } 

        // When
        act(() => {
            result.current.addToBasket(product)
            result.current.removeFromBasket(product)
        })

        // Then
        expect(result.current.basket).toHaveLength(0)
    })

    afterEach(() => {
        cleanup()
        jest.clearAllMocks()
    })
})
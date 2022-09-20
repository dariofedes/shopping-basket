import { renderHook } from '@testing-library/react'
import { useProduct } from './use-product'
import ProductService from '../services/product-service'

describe('useProduct', () => {
    beforeEach(() => {
        jest.mock('../services/product-service')
    })

    it('should load products on mount', () => {
        // Given
        const spyRetrieveProducts = jest.fn()
        ProductService.prototype.retrieveProducts = spyRetrieveProducts

        // When
        renderHook(() => useProduct())

        // Then
        expect(spyRetrieveProducts).toHaveBeenCalled()
    })

    afterEach(() => {
        jest.clearAllMocks()
    })
})
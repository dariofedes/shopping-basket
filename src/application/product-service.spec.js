import ProductService from './product-service'
import ProductRepository from '../infrastructure/product-repository'

describe('ProductService', () => {
    let productService
    let mockProductRepository

    beforeEach(() => {
        mockProductRepository = new ProductRepository()
        const productsPromise = new Promise(resolve => {
            resolve([])
        })
        mockProductRepository.getAll = jest.fn(() => productsPromise)
        productService = new ProductService(mockProductRepository)
    })

    it('should return an array', async () => {
        // When
        const products = await productService.retrieveProducts()

        // Then
        expect(products).toBeInstanceOf(Array)
    })

    it('should get all products from product repository', () => {
        // When
        productService.retrieveProducts()

        // Then
        expect(mockProductRepository.getAll).toHaveBeenCalled()
    })

    afterEach(() => {
        jest.clearAllMocks()
    })
})
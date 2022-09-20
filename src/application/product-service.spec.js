import ProductService from './product-service'
import ProductRepository from '../infrastructure/product-repository'

describe('ProductService', () => {
    let productService
    let spyProductRepository

    beforeEach(() => {
        spyProductRepository = ProductRepository.getInstance()
        const productsPromise = new Promise(resolve => {
            resolve([])
        })
        spyProductRepository.getAll = jest.fn(() => productsPromise)
        productService = new ProductService(spyProductRepository)
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
        expect(spyProductRepository.getAll).toHaveBeenCalled()
    })

    afterEach(() => {
        jest.clearAllMocks()
    })
})
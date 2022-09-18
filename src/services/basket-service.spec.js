import BasketService from "./basket-service"
import BasketRepository from '../domain/basket-repository'

describe('BasketService', () => {
    let basketService
    let mockBasketRepository

    beforeEach(() => {
        mockBasketRepository = new BasketRepository()
        const productsPromise = new Promise(resolve => {
            resolve([])
        })
        mockBasketRepository.getAll = jest.fn(() => productsPromise)
        basketService = new BasketService(mockBasketRepository)
    })

    it('should return a promise that resolves to an array', async () => {
        // When
        const result = basketService.retrieveBasketProducts()

        // Then
        expect(result).toBeInstanceOf(Promise)
        const products = await result.then(data => data)
        expect(products).toBeInstanceOf(Array)
    })

    it('should get all products from product repository', () => {
        // When
        basketService.retrieveBasketProducts()

        // Then
        expect(mockBasketRepository.getAll).toHaveBeenCalled()
    })

    afterEach(() => {
        jest.clearAllMocks()
    })
})
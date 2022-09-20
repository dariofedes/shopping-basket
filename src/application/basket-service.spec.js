import BasketService from './basket-service'
import BasketRepository from '../infrastructure/basket-repository'

describe('BasketService', () => {
    let basketService
    let spyBasketRepository

    beforeEach(() => {
        spyBasketRepository = BasketRepository.getInstance()
        const productsPromise = new Promise(resolve => {
            resolve([])
        })
        spyBasketRepository.getAll = jest.fn(() => productsPromise)
        basketService = new BasketService(spyBasketRepository)
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
        expect(spyBasketRepository.getAll).toHaveBeenCalled()
    })

    afterEach(() => {
        jest.clearAllMocks()
    })
})
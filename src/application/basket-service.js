/* eslint-disable class-methods-use-this */
export default class BasketService {
    constructor(basketRepository) {
        this.basketRepository = basketRepository
    }

    async retrieveBasketProducts () {
        return this.basketRepository.getAll()
    }

    async addProductToBasket(product) {
        this.basketRepository.save(product)
    }

    async removeProductFromBasket(product) {
        this.basketRepository.remove(product)
    }
}
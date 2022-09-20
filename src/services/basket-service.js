export default class BasketService {
    constructor(basketRepository) {
        this.basketRepository = basketRepository
    }

    async retrieveBasketProducts () {
        return this.basketRepository.getAll()
    }

    async addProductToBasket(product) {
        return this.basketRepository.save(product)
    }

    async removeProductFromBasket(product) {
        return this.basketRepository.remove(product)
    }
}
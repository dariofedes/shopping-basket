/* eslint-disable class-methods-use-this */
export default class BasketService {
    constructor(basketRepository) {
        this.basketRepository = basketRepository
    }

    async retrieveBasketProducts () {
        return this.basketRepository.getAll()
    }
}
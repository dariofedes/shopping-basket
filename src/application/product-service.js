/* eslint-disable class-methods-use-this */
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
export default class ProductService {
    constructor(productRepository) {
        this.productRepository = productRepository
    }

    async retrieveProducts() {
        return this.productRepository.getAll()
    }
}
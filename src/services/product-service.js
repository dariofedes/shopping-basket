export default class ProductService {
    constructor(productRepository) {
        this.productRepository = productRepository
    }

    async retrieveProducts() {
        return this.productRepository.getAll()
    }
}
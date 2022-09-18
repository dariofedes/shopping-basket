/* eslint-disable no-constructor-return */
import products from '../data/products.json'

export default class ProductRepository {
    constructor() {
        this.products = products

        if(ProductRepository.instance) return ProductRepository.instance

        ProductRepository.instance = this
        return this
    }

    getAll() {
        return new Promise(resolve => {
            resolve(this.products)
        })
    }
}
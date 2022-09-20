/* eslint-disable no-constructor-return */
import products from '../data/products.json'

export default class ProductRepository {
    constructor() {
        this.products = products

        if(!ProductRepository.instance) ProductRepository.instance = this
        return ProductRepository.instance
    }

    getAll() {
        return new Promise(resolve => {
            resolve(this.products)
        })
    }
}
/* eslint-disable no-constructor-return */
import products from '../data/products.json'

export default class ProductRepository {
    constructor() {
        if (new.target) throw new Error('Cannot instantiate direclty. Use static method getInstance()')
    }

    static getInstance() { 
        if(!this.instance) {
            this.instance = Object.create(ProductRepository.prototype)

            this.instance.products = products
        }

        return this.instance
    }

    async getAll() {
        return new Promise(resolve => {
            resolve(this.products)
        })
    }
}
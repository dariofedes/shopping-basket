/* eslint-disable no-constructor-return */
/* eslint-disable class-methods-use-this */
export default class BasketRepository {
    constructor() {
        if (new.target) throw new Error('Cannot instantiate direclty. Use static method getInstance()')
    }

    static getInstance() { 
        if(!this.instance) this.instance = Object.create(BasketRepository.prototype)

        return this.instance
    }

    getAll() {
        return new Promise(resolve => {
            resolve([])
        })
    }

    save(product) {
        return new Promise(resolve => {
            resolve(product)
        })
    }

    remove(product) {
        return new Promise(resolve => {
            resolve(product)
        })
    }
}
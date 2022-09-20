/* eslint-disable no-constructor-return */
/* eslint-disable class-methods-use-this */
export default class BasketRepository {
    constructor() {
        if(!BasketRepository.instance) BasketRepository.instance = this
        return BasketRepository.instance
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
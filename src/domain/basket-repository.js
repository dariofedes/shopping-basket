/* eslint-disable no-constructor-return */
/* eslint-disable class-methods-use-this */
export default class BasketRepository {
    constructor() {
        if(BasketRepository.instance) return BasketRepository.instance

        BasketRepository.instance = this
        return this
    }

    getAll() {
        return new Promise(resolve => {
            resolve([])
        })
    }
}
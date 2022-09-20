import { singletonHook } from 'react-singleton-hook'
import { useEffect, useState } from 'react'
import BasketService from '../application/basket-service'
import BasketRepository from '../infrastructure/basket-repository'

export function useBasketImplementation() {
    const basketRepository = new BasketRepository()
    const basketService = new BasketService(basketRepository)

    const [basket, setBasket] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        (async () => {
            await loadBasket()
        })()
    }, [])

    async function loadBasket() {
        setIsLoading(true)

        const retrievedBasketProducts = await basketService.retrieveBasketProducts()
        setBasket(retrievedBasketProducts)
        setTotal(getTotal(retrievedBasketProducts))
        
        setIsLoading(false)
    }

    async function addToBasket(product) {
        const basketWithAddedProduct = [ ...basket, product ]
        setBasket(basketWithAddedProduct)

        try {
            await basketService.addProductToBasket(product)

            setTotal(getTotal(basketWithAddedProduct))
        } catch {
            undoAdd(product)
        }
    }

    async function removeFromBasket(product) {
        const basketWithoutRemovedProduct = basket.filter((productInBasket) => productInBasket.id !== product.id)
        setBasket(basketWithoutRemovedProduct)

        try {
            await basketService.removeProductFromBasket(product)

            setTotal(getTotal(basketWithoutRemovedProduct))
        } catch {
            undoRemove(product)
        }
    }

    function undoRemove(product) {
        const basketWithChangesUndone = [ ...basket, product ]
        setBasket(basketWithChangesUndone)
        setTotal(getTotal(basketWithChangesUndone))
    }

    function undoAdd(product) {
        const basketWithChangesUndone = basket.filter((productInBasket) => productInBasket.id !== product.id)
        setBasket(basketWithChangesUndone)
        setTotal(getTotal(basketWithChangesUndone))
    }

    function isProductInBasket(product) {
        return basket.filter(productInBasket => productInBasket.id === product.id).length > 0
    }

    function getTotal(basketProducts) {
        return basketProducts.reduce((accumulator, product) => accumulator + product.price, 0)
    }

    return {
        basket,
        addToBasket,
        isProductInBasket,
        isLoading,
        removeFromBasket,
        total
    }
}

export const useBasket = singletonHook({
    basket: [],
    isLoading: true,
    total: 0
}, useBasketImplementation)
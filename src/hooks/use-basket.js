import { useEffect, useState } from 'react'
import { singletonHook } from 'react-singleton-hook'
import BasketService from '../application/basket-service';
import BasketRepository from '../infrastructure/basket-repository';

export function useBasketImplementation() {
    const basketRepository = new BasketRepository()
    const basketService = new BasketService(basketRepository)

    const [basket, setBasket] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        (async () => {
            await loadBasket()
        })()
    }, [])

    async function loadBasket() {
        setIsLoading(true)
        const retrievedBasketProducts = await basketService.retrieveBasketProducts()
        setBasket(retrievedBasketProducts)
        setIsLoading(false)
    }

    async function addToBasket(product) {
        const basketWithAddedProduct = [ ...basket, product ]
        setBasket(basketWithAddedProduct)

        try {
            await basketService.addProductToBasket(product)
        } catch {
            undoAdd(product)
        }
    }

    async function removeFromBasket(product) {
        const basketWithoutRemovedProduct = basket.filter((productInBasket) => productInBasket.id !== product.id)
        setBasket(basketWithoutRemovedProduct)

        try {
            await basketService.removeProductFromBasket(product)
        } catch {
            undoRemove(product)
        }
    }

    function undoRemove(product) {
        const basketWithChangesUndone = [ ...basket, product ]
        setBasket(basketWithChangesUndone)
    }

    function undoAdd(product) {
        const basketWithChangesUndone = basket.filter((productInBasket) => productInBasket.id !== product.id)
        setBasket(basketWithChangesUndone)
    }

    function isProductInBasket(product) {
        return basket.filter(productInBasket => productInBasket.id === product.id).length > 0
    }

    return {
        basket,
        addToBasket,
        isProductInBasket,
        isLoading,
        removeFromBasket,
    }
}

export const useBasket = singletonHook({ basket: [] }, useBasketImplementation)
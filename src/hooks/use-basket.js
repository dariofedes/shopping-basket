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
            removeFromBasket(product)
        }
    }

    function removeFromBasket(product) {
        const basketWithoutRemovedProduct = basket.filter((productInBasket) => productInBasket.id === product.id)
        setBasket(basketWithoutRemovedProduct)
    }

    function isProductInBasket(product) {
        return basket.filter(productInBasket => productInBasket.id === product.id).length > 0
    }

    return {
        basket,
        addToBasket,
        isProductInBasket,
        isLoading,
    }
}

export const useBasket = singletonHook({ basket: [] }, useBasketImplementation)
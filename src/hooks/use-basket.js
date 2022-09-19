/* eslint-disable import/prefer-default-export */
import { useEffect, useState } from 'react'
import { singletonHook } from 'react-singleton-hook'
import BasketService from '../application/basket-service';
import BasketRepository from '../infrastructure/basket-repository';

function useBasketImplementation() {
    const basketRepository = new BasketRepository()
    const basketService = new BasketService(basketRepository)

    const [basket, setBasket] = useState([])

    useEffect(() => {
        (async () => {
            const retrievedBasketProducts = await basketService.retrieveBasketProducts()
            setBasket(retrievedBasketProducts)
          })()
    }, [])

    function addToBasket(product) {
        const basketWithAddedProduct = [ ...basket, product ]
        setBasket(basketWithAddedProduct)
    }

    return {
        basket,
        addToBasket
    }
}

export const useBasket = singletonHook({ basket: [] }, useBasketImplementation)
import { useEffect, useState } from 'react'
import ProductService from '../services/product-service'
import ProductRepository from '../repositories/product-repository'

export function useProduct() {
    const productRepository = ProductRepository.getInstance()
    const productService = new ProductService(productRepository)

    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        (async () => {
            await loadProducts()
        })()
    }, [])

    async function loadProducts() {
        setIsLoading(true)

        const retrievedProducts = await productService.retrieveProducts()
        setProducts(retrievedProducts)
        
        setIsLoading(false)
    }

    return {
        products,
        isLoading,
    }
}
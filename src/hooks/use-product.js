import { useEffect, useState } from 'react'
import ProductService from '../application/product-service'
import ProductRepository from '../infrastructure/product-repository'

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
import ProductRepository from "./product-repository";

describe('ProductRepository', () => {
    it('should be a singleton', () => {
        // Given
        const firstInstance = new ProductRepository()

        // When
        const secondInstance = new ProductRepository()

        // Then
        expect(firstInstance).toBe(secondInstance)
    })
})
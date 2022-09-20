import ProductRepository from './product-repository'

describe('ProductRepository', () => {
    it('should be a singleton', () => {
        // Given
        const firstInstance = ProductRepository.getInstance()

        // When
        const secondInstance = ProductRepository.getInstance()

        // Then
        expect(firstInstance).toBe(secondInstance)
    })

    it('should fail on direct instantiation', () => {
        expect(() => new ProductRepository()).toThrowError('Cannot instantiate direclty. Use static method getInstance()')
    })
})
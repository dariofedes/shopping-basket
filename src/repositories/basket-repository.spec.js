import BasketRepository from './basket-repository'

describe('BasketRepository', () => {
    it('should be a singleton', () => {
        // Given
        const firstInstance = BasketRepository.getInstance()

        // When
        const secondInstance = BasketRepository.getInstance()

        // Then
        expect(firstInstance).toBe(secondInstance)
    })

    it('should fail on direct instantiation', () => {
        expect(() => new BasketRepository()).toThrowError('Cannot instantiate direclty. Use static method getInstance()')
    })
})
import BasketRepository from './basket-repository'

describe('BasketRepository', () => {
    it('should be a singleton', () => {
        // Given
        const firstInstance = new BasketRepository()

        // When
        const secondInstance = new BasketRepository()

        // Then
        expect(firstInstance).toBe(secondInstance)
    })
})
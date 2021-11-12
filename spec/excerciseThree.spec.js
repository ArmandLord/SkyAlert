const reversePolishNotation = require('../exerciseThree/index.js')

describe('the function reversePolishNotation', () => {
    it('debería ser una función', () => {
        expect(typeof reversePolishNotation).toBe('function')
    })
    it('deberia retornar un numero', () => {
        expect(typeof reversePolishNotation('2 5 +')).toBe('number')
    })
})
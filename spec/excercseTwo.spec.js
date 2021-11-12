const changeOrdinalNumber = require('../exerciseTwo/index.js')

describe('the function changeOrdinalNumber', () => {
    it('debería ser una función', () => {
        expect(typeof changeOrdinalNumber).toBe('function')
    })
    it("debería retornar '0' si el número es igual a 0", () => {
        expect(changeOrdinalNumber(0)).toBe('0')
    })
})
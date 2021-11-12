const hideCard = require('../exerciseOne/index.js')

describe('the function hideCard', () => {
    it('debería ser una función', () => {
        expect(typeof hideCard).toBe('function')
    });
    it('debería retornar un string', () => {
        expect(typeof hideCard('1234')).toBe('string')
    });
    it('debería retornar el string completo si son menos de 7 caracteres', () => {
        expect(hideCard('123456')).toBe('123456')
    });
})
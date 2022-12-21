const Calculator = require('./calc.js');

describe('calculator', () => {
    test('addition check', () => {
        expect(Calculator.addition(10, 10)).toBe(20);
    });
    test('substraction check', () => {
        expect(Calculator.subtraction(5, 2)).toBe(3);
    });
    test('multiplication check', () => {
        expect(Calculator.multiplication(5, 2)).toBe(10);
    });
    test('division check', () => {
        expect(Calculator.division(6, 2)).toBe(3);
    });
});
const stringLength = require('./sum');
const reverseString = require('./sum');
const capitalizeString = require('./sum');

test('return string length', () => {
    expect(stringLength.stringLength("abe")).toBe(true);
})

// test ('length of telephonebook is 13', () => {
//     expect(stringLength.stringLength('telephonebook')).toEqual(13);
// })

test('return reversed string', () => {
    expect(reverseString.reverseString('hello')).toBe('olleh');
})

test('Capitalization check', () => {
    expect(capitalizeString.capitalizeString("alemu")).toBe("Alemu");
})
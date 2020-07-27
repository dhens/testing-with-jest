const addTwoIntegers = require('./index');

test('1 + 2 to not equal 4', () => {
    expect(addTwoIntegers(1, 2)).not.toBe(4);
})
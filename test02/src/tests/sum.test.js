const sum = require('../core/sum');

test('test',() => {
    const a = 10;
    const b = 10;
    const expected = 30;

    result = sum(a,b);

    expect(result).toBe(expected);
})
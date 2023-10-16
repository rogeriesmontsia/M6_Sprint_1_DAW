import {sum} from '../core/sum';

test('suma de dos nombres', () => {
    // Arrange
    const a = 10;
    const b = 20;
    const expected = 30;

    // Act
    const result = sum(a,b);

    // Assert
    expect(result).toBe(expected);
})
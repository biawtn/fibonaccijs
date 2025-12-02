const fibonacci = require('./fibonacci');

test('Fibonacci de 0 é 0', () => {
    expect(fibonacci(0)).toBe(0);
});

test('Fibonacci de 1 é 1', () => {
    expect(fibonacci(1)).toBe(1);
});

test('Fibonacci de 5 é 5', () => {
    expect(fibonacci(5)).toBe(5);
});

test('Fibonacci de 8 é 21', () => {
    expect(fibonacci(8)).toBe(21);
});

test('Fibonacci de 10 é 55', () => {
    expect(fibonacci(10)).toBe(55);
});

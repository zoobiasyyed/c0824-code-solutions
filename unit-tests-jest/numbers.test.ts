import { evenNumbers, toDollars, divideBy, multiplyBy } from './numbers';

// empty test
test('This is a test for evenNumbers', () => {
  // expect(false).toBe(true);
});

// evenNumbers test
describe('evenNumbers', () => {
  it('returns the even numbers', () => {
    const numbers = [1, 4, 5, 10, 0];
    const result = evenNumbers(numbers);
    expect(result).toEqual([4, 10, 0]);
  });
});

// toDollars test
describe('toDollars', () => {
  it('returns the dollar amt', () => {
    const number = 167;
    const result = toDollars(number);
    expect(result).toEqual('$1.67');
  });
});

// divideBy test
describe('divideBy', () => {
  it('returns new array of numbers divided by given divisor', () => {
    const numbers = [40];
    const divisor = 2;
    const result = divideBy(numbers, divisor);
    expect(result).toEqual([20]);
  });
});

// multiply by
describe('multiplyBy', () => {
  it('modifies object by multiplying value of each key if its a number', () => {
    const obj = { age: 23, height: 7, name: 'Zoobia' };
    const multiplier = 2;
    const result = multiplyBy(obj, multiplier);
    expect(result).toEqual({ age: 46, height: 14, name: 'Zoobia' });
  });
});

import { evenNumbers, toDollars, divideBy, multiplyBy } from './numbers';

// empty test
test('This is a test for evenNumbers', () => {
  // expect(false).toBe(true);
});

// evenNumbers test
describe('evenNumbers', () => {
  it('returns the even numbers', () => {
    const numbers = [1, 4, 5, 10, 7, 0];
    const result = evenNumbers(numbers);
    expect(result).toEqual([4, 10, 0]);
  });

  it('empty arrays', () => {
    const numbers: number[] = [];
    const result = evenNumbers(numbers);
    expect(result).toEqual([]);
  });

  it('negative', () => {
    const numbers: number[] = [-1, 2, -4, 7, 0];
    const result = evenNumbers(numbers);
    expect(result).toEqual([2, -4, 0]);
  });
});

// toDollars test
describe('toDollars', () => {
  it('returns the dollar amt', () => {
    const number = 30.0;
    const result = toDollars(number);
    expect(result).toEqual('$30.00');
  });

  it('decimals', () => {
    const number = 23.67;
    const result = toDollars(number);
    expect(result).toEqual('$23.67');
  });

  it('rounds', () => {
    const number = 23.676;
    const result = toDollars(number);
    expect(result).toEqual('$23.68');
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

  it('doesnt modify the og arr', () => {
    const numbers = [3, 2, 7];
    const divisor = 2;
    const result = divideBy(numbers, divisor);
    expect(result).not.toBe(numbers); // comparing references
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

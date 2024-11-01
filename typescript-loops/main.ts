/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */

// getNumbersToTen

function getNumbersToTen(): number[] {
  const numbers = [];
  let currentNumber = 1;
  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}

console.log(getNumbersToTen());

// get Even numbers to twenty

function getEvenNumbersToTwenty(): number[] {
  const evenNumbers = [];
  let currentNumber = 2;
  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}

console.log(getEvenNumbersToTwenty());

// repeatWord
function repeatWord(word: string, times: number): string {
  let count = 1;
  let repeated = '';
  while (count <= times) {
    repeated += word;
    count++;
  }

  return repeated;
}

console.log(repeatWord('hi', 5));

// logEachCharacter
function logEachCharacter(str: string): any {
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
  }
}

console.log(logEachCharacter('Zoobia'));

// doubleAll
function doubleAll(numbers: number[]): number[] {
  const doubled = [];
  for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}

console.log(doubleAll([1, 2, 3, 4]));

// getKeys
function getKeys(obj: Record<string, unknown>): unknown[] {
  const keys = [];
  for (const key in obj) {
    keys.push(key);
  }
  return keys;
}

const person = {
  name: 'Zoobia',
  age: 23,
};

console.log(getKeys(person));

// getValues
function getValues(obj: Record<string, unknown>): unknown[] {
  const values = [];
  for (const key in obj) {
    values.push(obj[key]);
  }
  return values;
}

console.log(getValues(person));

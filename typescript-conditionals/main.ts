/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */

// isUnderFive

function isUnderFive(number: number): boolean {
  return number < 5;
}
console.log('is under 5: ', isUnderFive(4));

// isEven

function isEven(number: number): boolean {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log('is even: ', isEven(8));
console.log('is even: ', isEven(7));

// startsWithJ
function startsWithJ(string: string): boolean {
  if (string[0] === 'J') {
    return true;
  } else {
    return false;
  }
}

console.log('starts with j: ', startsWithJ('Jennifer'));
console.log('starts with j: ', startsWithJ('jennifer'));

// isOldEnoughToDrink

interface Person {
  name: string;
  age: number;
}
const person = {
  name: 'Zoobia',
  age: 23,
};

function isOldEnoughToDrink(person: Person): boolean {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}

console.log('is old enough to drink: ', isOldEnoughToDrink(person));

// is old enough to drive
interface Person {
  name: string;
  age: number;
}
const persons = {
  name: 'Zoobia',
  age: 23,
};

function isOldEnoughToDrive(person: Person): boolean {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}

console.log('is old enough to drive: ', isOldEnoughToDrive(persons));

// is old enough to drink and drive
interface Person {
  name: string;
  age: number;
}
const persons1 = {
  name: 'Zoobia',
  age: 23,
};

function isOldEnoughToDrinkAndDrive(person: Person): boolean {
  console.log(person);
  return false;
}
console.log(
  'is old enough to drink and drive: ',
  isOldEnoughToDrinkAndDrive(persons1)
);

// categorize Acidity

function categorizeAcidity(pH: number): string {
  if (pH === 7) {
    return 'neutral';
  } else if (pH >= 0 && pH < 7) {
    return 'acid';
  } else if (pH <= 14 && pH > 7) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
}

console.log('ph: ', categorizeAcidity(8));

// introduce warner bros

function introduceWarnerBro(name: string): string {
  switch (name) {
    case 'yakko':
      return "We're the warner brothers!";
    case 'wakko':
      return "We're the warner brothers!";
    case 'dot':
      return "I'm cute~";
    default:
      return 'Goodnight everybody!';
  }
}

console.log(introduceWarnerBro('yakko'));

// recommend movie genre

function recommendMovie(genre: string): string {
  switch (genre) {
    case 'action':
      return 'Die Hard';
    case 'comedy':
      return 'The Big Lebowski';
    case 'horror':
      return 'The Exorcist';
    case 'drama':
      return 'The Godfather';
    case 'musical':
      return 'The Sound of Music';
    case 'sci-fi':
      return 'Blade Runner';
    default:
      return 'Genre not recognized. Choose between action, comedy, horror, drama, musical, or sci-fi';
  }
}

console.log(recommendMovie('action'));
console.log(recommendMovie('comedy'));

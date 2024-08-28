// convert minutes to seconds

function convertMinutesToSeconds(minutes: number): number {
  return minutes * 60;
}
console.log('convertMinutesToSeconds: ', convertMinutesToSeconds(5));
console.log('convertMinutesToSeconds: ', convertMinutesToSeconds(10));

// greet
function greet(name: string): string {
  return 'Hey ' + name + '!';
}
console.log('greetings: ', greet('Zoobia'));

// getArea
const getArea = (width: number, height: number): number => {
  return width * height;
};
console.log('area: ', getArea(5, 5));

// getFirstName

interface Person {
  firstName: string;
  lastName: string;
}

const person: Person = {
  firstName: 'Zoobia',
  lastName: 'Syyed',
};

const getFirstName = (Person: string): string => {
  return Person;
};
console.log('get first name: ', getFirstName(person.firstName));

// getLastElement

const getLastElement = (array: any[]): any => {
  return array[array.length - 1];
};

console.log(
  'get last element: ',
  getLastElement(['true', 'true', 'true', 'false'])
);
console.log('get last element: ', getLastElement([true, true, true, false]));

// call other functions
function callOtherFunction(otherFunction: Function, params: unknown): any {
  return otherFunction(params);
}
console.log('other function: ', callOtherFunction(convertMinutesToSeconds, 60));
console.log(
  'other function: ',
  callOtherFunction(getLastElement, ['hi', 'bye', 'hello', 'goodbye'])
);

'use strict';
// convert minutes to seconds
function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
console.log('convertMinutesToSeconds: ', convertMinutesToSeconds(5));
console.log('convertMinutesToSeconds: ', convertMinutesToSeconds(10));
// greet
function greet(name) {
  return 'Hey ' + name + '!';
}
console.log('greetings: ', greet('Zoobia'));
// getArea
const getArea = (width, height) => {
  return width * height;
};
console.log('area: ', getArea(5, 5));
const person = {
  firstName: 'Zoobia',
  lastName: 'Syyed',
};
const getFirstName = (Person) => {
  return Person;
};
console.log('get first name: ', getFirstName(person.firstName));
// getLastElement
const getLastElement = (array) => {
  return array[array.length - 1];
};
console.log(
  'get last element: ',
  getLastElement(['true', 'true', 'true', 'false'])
);
console.log('get last element: ', getLastElement([true, true, true, false]));
// call other functions
function callOtherFunction(otherFunction, params) {
  return otherFunction(params);
}
console.log('other function: ', callOtherFunction(convertMinutesToSeconds, 60));
console.log(
  'other function: ',
  callOtherFunction(getLastElement, ['hi', 'bye', 'hello', 'goodbye'])
);

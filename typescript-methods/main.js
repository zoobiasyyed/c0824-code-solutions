'use strict';
// math object
const heroes = ['superman', 'batman', 'deadpool', 'ironman'];
let randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
const randomIndex = Math.floor(randomNumber);
console.log(randomIndex);
const randomHero = heroes[randomIndex];
console.log(randomHero);
// array methods
const library = [
  { title: 'Harry Potter and the Prisoner of Azkaban', author: 'JK Rowling' },
  { title: 'It Ends with Us', author: 'Coleen Hoover' },
  { title: 'Percy Jackson', author: 'Rick Riordan' },
];
const lastBook = library.pop();
console.log(lastBook);
const firstBook = library.shift();
console.log(firstBook);
const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};
library.push(js);
library.unshift(css);
library.splice(1);
console.log(library);
// string methods
const fullName = 'Zoobia Syyed';
const firstAndLastName = fullName.split(' ');
console.log(firstAndLastName);
const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log(sayMyName);
// Object Methods
const employee = {
  name: 'Zoobia',
  age: '23',
  position: 'student',
};
const employeeKeys = Object.keys(employee);
console.log(employeeKeys);
const employeePairs = Object.entries(employee);
console.log(employeePairs);

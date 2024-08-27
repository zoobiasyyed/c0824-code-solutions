'use strict';
// the colors array
const colors = ['red', 'white', 'blue'];
console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);
console.log(`America is ${colors[0]}, ${colors[1]}, and ${colors[2]}.`);
colors[2] = 'green';
console.log(`Mexico is ${colors[0]}, ${colors[1]}, and ${colors[2]}.`);
console.log(colors);
console.log(typeof colors);
// the students array
const students = ['Bob', 'Jim', 'Rick', 'Max'];
const numberOfStudent = students.length;
console.log(numberOfStudent);
const lastIndex = numberOfStudent - 1;
const lastStudent = students[lastIndex];
console.log(lastStudent);
console.log(students);
console.log(typeof students);

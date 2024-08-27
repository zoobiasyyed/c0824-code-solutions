// the colors array

const colors: string[] = ['red', 'white', 'blue'];
console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);
console.log(`America is ${colors[0]}, ${colors[1]}, and ${colors[2]}.`);

colors[2] = 'green';
console.log(`Mexico is ${colors[0]}, ${colors[1]}, and ${colors[2]}.`);
console.log(colors);
console.log(typeof colors);

// the students array

const students: string[] = ['Bob', 'Jim', 'Rick', 'Max'];
const numberOfStudent: number = students.length;
console.log(numberOfStudent);
const lastIndex: number = numberOfStudent - 1;
const lastStudent: string = students[lastIndex];
console.log(lastStudent);
console.log(students);
console.log(typeof students);

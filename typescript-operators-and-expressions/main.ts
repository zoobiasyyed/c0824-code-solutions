const width: number = 20;
const height: number = 47;

const area: number = width * height;
console.log(area);
console.log(typeof area);

const bill: number = 300;
const payment: number = 400;

const change: number = payment - bill;
console.log(change);
console.log(typeof change);

const quizzes: number = 5;
const midterm: number = 3;
const final: number = 1;

const grade: number = (quizzes + midterm + final) / 3;
console.log(grade);
console.log(typeof grade);

const firstName: string = 'Zoobia';
const lastName: string = 'Syyed';

const fullName: string = firstName + ' ' + lastName;
console.log(fullName);
console.log(typeof fullName);

const pH: number = 3;
const isAcidic: boolean = pH < 7;

console.log(isAcidic);
console.log(typeof isAcidic);

const headCount: number = 400;
const isSparta: boolean = headCount === 300;

console.log(isSparta);
console.log(typeof isSparta);

let motto: string = fullName;
motto += ' is the GOAT';

console.log(motto);
console.log(typeof motto);

'use strict';
const student = {
  firstName: 'Zoobia',
  lastName: 'Syyed',
  age: 23,
};
const fullName = `${student.firstName} ${student.lastName}`;
console.log(fullName);
student.previousOccupation = 'student';
console.log(student.livesInIrvine);
console.log(student.previousOccupation);
console.log(student);
console.log(typeof student);
const vehicle = {
  make: 'Honda',
  model: 'Civic',
  year: 2019,
};
vehicle['color'] = 'Gray';
vehicle['isConvertible'] = false;
console.log(vehicle['color']);
console.log(vehicle['isConvertible']);
console.log(vehicle);
console.log(typeof vehicle);
const pet = {
  name: 'Sushi',
  kind: 'Cat',
};
delete pet.name;
delete pet.kind;
console.log(pet);
console.log(typeof pet);

'use strict';
const personObject = {
  firstName: 'Zoobia',
  lastName: 'Syyed',
};
function getFullNameOfPerson(person) {
  return person.firstName + ' ' + person.lastName;
}
console.log(getFullNameOfPerson(personObject));

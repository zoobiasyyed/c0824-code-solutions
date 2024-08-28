'use strict';
const initialOfPerson = {
  firstName: 'Zoobia',
  lastName: 'Syyed',
};
function getFirstInitialOfPerson(person) {
  return person.firstName[0];
}
console.log(getFirstInitialOfPerson(initialOfPerson));

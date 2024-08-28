'use strict';
const initialOfPersons = {
  firstName: 'Zoobia',
  lastName: 'Syyed',
};
function getInitialsOfPerson(person) {
  return person.firstName[0] + person.lastName[0];
}
console.log(getInitialsOfPerson(initialOfPersons));

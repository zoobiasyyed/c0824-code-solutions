'use strict';
const personDescriptionObject = {
  name: 'Zoobia Syyed',
  occupation: 'student',
  birthPlace: 'Irvine',
};
function getDescriptionOfPerson(person) {
  return (
    person.name +
    ' is a ' +
    person.occupation +
    ' from ' +
    person.birthPlace +
    '.'
  );
}
console.log(getDescriptionOfPerson(personDescriptionObject));

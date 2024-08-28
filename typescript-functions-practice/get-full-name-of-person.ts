/* exported getFullNameOfPerson */
interface Person {
  firstName: string;
  lastName: string;
}

const personObject: Person = {
  firstName: 'Zoobia',
  lastName: 'Syyed',
};

function getFullNameOfPerson(person: Person): string {
  return person.firstName + ' ' + person.lastName;
}
console.log(getFullNameOfPerson(personObject));

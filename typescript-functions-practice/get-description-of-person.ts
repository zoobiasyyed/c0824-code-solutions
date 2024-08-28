/* exported getDescriptionOfPerson */
interface PersonDescription {
  name: string;
  occupation: string;
  birthPlace: string;
}

const personDescriptionObject: PersonDescription = {
  name: 'Zoobia Syyed',
  occupation: 'student',
  birthPlace: 'Irvine',
};

function getDescriptionOfPerson(person: PersonDescription): string {
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

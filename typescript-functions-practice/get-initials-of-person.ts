/* exported getInitialsOfPerson */
interface InitialsOfPersons {
  firstName: string;
  lastName: string;
}

const initialOfPersons: InitialsOfPersons = {
  firstName: 'Zoobia',
  lastName: 'Syyed',
};

function getInitialsOfPerson(person: InitialsOfPersons): string {
  return person.firstName[0] + person.lastName[0];
}

console.log(getInitialsOfPerson(initialOfPersons));

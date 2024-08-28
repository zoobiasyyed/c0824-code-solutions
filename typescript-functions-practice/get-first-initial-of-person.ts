/* exported getFirstInitialOfPerson */
interface InitialOfPerson {
  firstName: string;
  lastName: string;
}

const initialOfPerson: InitialOfPerson = {
  firstName: 'Zoobia',
  lastName: 'Syyed',
};

function getFirstInitialOfPerson(person: InitialOfPerson): string {
  return person.firstName[0];
}
console.log(getFirstInitialOfPerson(initialOfPerson));

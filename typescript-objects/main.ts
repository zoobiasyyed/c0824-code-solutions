interface StudentProps {
  firstName: string;
  lastName: string;
  age: number;
  livesInIrvine?: boolean;
  previousOccupation?: string;
}

const student: StudentProps = {
  firstName: 'Zoobia',
  lastName: 'Syyed',
  age: 23,
};

const fullName: string = `${student.firstName} ${student.lastName}`;
console.log(fullName);

student.previousOccupation = 'student';
console.log(student.livesInIrvine);
console.log(student.previousOccupation);

console.log(student);
console.log(typeof student);

interface Vehicle {
  make: string;
  model: string;
  year: number;
  color?: string;
  isConvertible?: boolean;
}

const vehicle: Vehicle = {
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

interface Pet {
  name?: string;
  kind?: string;
}

const pet: Pet = {
  name: 'Sushi',
  kind: 'Cat',
};

delete pet.name;
delete pet.kind;
console.log(pet);
console.log(typeof pet);

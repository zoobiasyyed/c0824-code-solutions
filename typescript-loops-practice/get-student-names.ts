/* exported getStudentNames */
interface Students {
  name: string;
}

function getStudentNames(students: Students[]): string[] {
  const newArr = [];
  for (let i = 0; i <= students.length - 1; i++) {
    newArr.push(students[i].name);
  }
  return newArr;
}

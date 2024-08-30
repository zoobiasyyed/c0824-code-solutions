/* exported getIndexes */
function getIndexes(array: unknown[]): unknown[] {
  const newArr = [];
  for (let i = 0; i <= array.length - 1; i++) {
    newArr.push(i);
  }
  return newArr;
}

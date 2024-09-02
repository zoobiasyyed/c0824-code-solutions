/* exported dropRight */
function dropRight(array: unknown[], count: number): unknown[] {
  const newArr = [];
  const x = Math.max(0, array.length - count);
  for (let i = 0; i < x; i++) {
    newArr.push(array[i]);
  }
  return newArr;
}

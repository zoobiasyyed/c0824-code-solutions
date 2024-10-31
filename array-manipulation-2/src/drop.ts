/* exported drop */
function drop(array: unknown[], count: number): unknown[] {
  const newArr = [];
  const x = Math.min(array.length, count);
  for (let i = x; i < array.length; i++) {
    newArr.push(array[i]);
  }
  return newArr;
}

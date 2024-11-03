/* exported takeRight */
function takeRight(array: unknown[], count: number): unknown[] {
  const newArr = [];
  const x = Math.max(0, array.length - count);
  for (let i = x; i < array.length; i++) {
    newArr.push(array[i]);
  }
  return newArr;
}

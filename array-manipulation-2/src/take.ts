/* exported take */
function take(array: unknown[], count: number): unknown[] {
  const newArr = [];
  const x = Math.min(array.length, count);
  for (let i = 0; i < x; i++) {
    newArr.push(array[i]);
  }
  return newArr;
}

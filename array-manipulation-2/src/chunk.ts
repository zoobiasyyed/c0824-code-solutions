/* exported chunk */
function chunk(array: unknown[], size: number): unknown[] {
  const newArr = [];
  for (let i = 0; i < array.length; i += size) {
    const newArr2 = [];
    for (let y = 0; y < array.length; y++) {
      newArr2.push(array[y]);
    }
    newArr.push(newArr2);
  }
  return newArr;
}

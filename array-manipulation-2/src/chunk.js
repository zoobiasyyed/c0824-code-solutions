'use strict';
/* exported chunk */
function chunk(array, size) {
  const newArr = [];
  const x = Math.max(0, array.length - size);
  for (let i = 0; i < x; i++) {
    for (let y = 0; i < array.length; i++) {
      const newArr2 = [];
      newArr2.push(array[y]);
    }
    newArr.push(array[i]);
  }
  return newArr;
}

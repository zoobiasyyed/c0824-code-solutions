'use strict';
/* exported take */
function take(array, count) {
  const newArr = [];
  const x = Math.min(array.length, count);
  for (let i = 0; i < x; i++) {
    newArr.push(array[i]);
  }
  return newArr;
}

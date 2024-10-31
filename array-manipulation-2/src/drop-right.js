'use strict';
/* exported dropRight */
function dropRight(array, count) {
  const x = Math.max(0, array.length - count);
  const newArr = [];
  for (let i = 0; i < x; i++) {
    newArr.push(array[i]);
  }
  return newArr;
}

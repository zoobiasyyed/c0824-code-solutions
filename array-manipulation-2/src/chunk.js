'use strict';
/* exported chunk */
function chunk(array, size) {
  const newArr = [];
  for (let i = 0; i < array.length; i += size) {
    newArr.push(array.slice(i, i + size));
  }
  return newArr;
}

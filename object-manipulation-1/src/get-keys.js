'use strict';
/* exported getKeys */
function getKeys(object) {
  const newArr = [];
  for (const key in object) {
    newArr.push(key);
  }
  return newArr;
}

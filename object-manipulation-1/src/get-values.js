'use strict';
/* exported getValues */
function getValues(object) {
  const newArr = [];
  for (const key in object) {
    newArr.push(object[key]);
  }
  return newArr;
}

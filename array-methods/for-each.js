'use strict';
const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];
values.forEach((element) => console.log('in order:', element));
values.forEach((reverseElement, index) => {
  console.log('reverse: ', values[values.length - 1 - index]);
});

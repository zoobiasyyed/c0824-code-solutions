'use strict';
/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  const newArr = [];
  for (let i = 0; i <= words.length - 1; i++) {
    newArr.splice(i, 1, words[i] + suffix);
  }
  return newArr;
}

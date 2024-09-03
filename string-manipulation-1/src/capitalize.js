'use strict';
/* exported capitalize */
function capitalize(word) {
  const x = word[0].toUpperCase();
  const rest = word.slice(1).toLowerCase();
  return x + rest;
}

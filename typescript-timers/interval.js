'use strict';
let count = 4;
const $countDownDisplay = document.querySelector('.countdown-display');
if (!$countDownDisplay) throw new Error('$countDownDisplay query failed');
const intervalId = setInterval(function () {
  if (count > 0) {
    $countDownDisplay.textContent = count.toString();
    count--;
  } else {
    $countDownDisplay.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intervalId);
  }
}, 1000);

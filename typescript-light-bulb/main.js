'use strict';
const $button = document.querySelector('.button');
const $background = document.querySelector('.container');
if (!$button) throw new Error('the $button query failed');
if (!$background) throw new Error('the $background query failed');
$button.addEventListener('click', () => {
  if ($button.className === 'button') {
    $button.className = 'button dark';
    $background.className = 'container dark-background';
  } else {
    $button.className = 'button';
    $background.className = 'container light-background';
  }
});

'use strict';
// click event
const $clickButton = document.querySelector('.click-button');
if (!$clickButton) throw new Error('$clickbutton does not exist');
function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
}
$clickButton.addEventListener('click', handleClick);
// mouseover event
const $hoverButton = document.querySelector('.hover-button');
if (!$hoverButton) throw new Error('$hoverButton does not exist');
function handleMouseover(event) {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}
$hoverButton.addEventListener('mouseover', handleMouseover);
// doubleclick event
const $doubleClick = document.querySelector('.double-click-button');
if (!$doubleClick) throw new Error('$doubleClick does not exist');
function handleDoubleClick(event) {
  console.log('button double clicked');
  console.log(event);
  console.log(event.target);
}
$doubleClick.addEventListener('dblclick', handleDoubleClick);

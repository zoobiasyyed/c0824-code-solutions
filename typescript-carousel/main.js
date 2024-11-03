'use strict';
// creating a global variable to keep track of index
let currentIndex = 0;
// querying the elements
const $myNodeList = document.querySelectorAll('img');
const $rightArrow = document.querySelector('#right');
const $leftArrow = document.querySelector('#left');
const $buttonNavBar = document.querySelectorAll('.dot');
const $dots = document.querySelector('.dots-row');
if (!$rightArrow) throw new Error('$rightArrow query failed');
if (!$leftArrow) throw new Error('$leftArrow query failed');
$myNodeList[currentIndex].classList.remove('hidden');
$buttonNavBar[currentIndex].classList.add('fa-regular');
$buttonNavBar[currentIndex].classList.remove('fa-solid');
// cycle through the pokemon images
function forNodeLists() {
  currentIndex++;
  if (currentIndex >= $myNodeList.length) {
    currentIndex = 0;
  }
  for (let i = 0; i < $buttonNavBar.length; i++) {
    if (i === currentIndex) {
      $myNodeList[i].classList.remove('hidden');
      $buttonNavBar[i].classList.remove('fa-solid');
      $buttonNavBar[i].classList.add('fa-regular');
    } else {
      $myNodeList[i].classList.add('hidden');
      $buttonNavBar[i].classList.add('fa-solid');
      $buttonNavBar[i].classList.remove('fa-regular');
    }
  }
}
function nodeListBackwards() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = $myNodeList.length - 1;
  }
  for (let i = 0; i < $buttonNavBar.length; i++) {
    if (i === currentIndex) {
      $myNodeList[i].classList.remove('hidden');
      $buttonNavBar[i].classList.remove('fa-solid');
      $buttonNavBar[i].classList.add('fa-regular');
    } else {
      $myNodeList[i].classList.add('hidden');
      $buttonNavBar[i].classList.add('fa-solid');
      $buttonNavBar[i].classList.remove('fa-regular');
    }
  }
}
let pokemonInterval = setInterval(forNodeLists, 3000);
// adding event listener for the right arrow
$rightArrow.addEventListener('click', () => {
  clearInterval(pokemonInterval);
  pokemonInterval = setInterval(forNodeLists, 3000);
});
// doing the same for the left arrow
$leftArrow.addEventListener('click', () => {
  clearInterval(pokemonInterval);
  nodeListBackwards();
  pokemonInterval = setInterval(forNodeLists, 3000);
});
function dotHandler(event) {
  clearInterval(pokemonInterval);
  pokemonInterval = setInterval(forNodeLists, 3000);
  currentIndex = Number.parseInt(event?.target?.id);
  for (let i = 0; i < $buttonNavBar.length; i++) {
    if (i === currentIndex) {
      $myNodeList[i].classList.remove('hidden');
      $buttonNavBar[i].classList.remove('fa-solid');
      $buttonNavBar[i].classList.add('fa-regular');
    } else {
      $myNodeList[i].classList.add('hidden');
      $buttonNavBar[i].classList.add('fa-solid');
      $buttonNavBar[i].classList.remove('fa-regular');
    }
  }
}
$dots?.addEventListener('click', dotHandler);

// querying the DOM for all span elements

let x = 0;
const $span = document.querySelectorAll('span');

document.addEventListener('keydown', (event: KeyboardEvent) => {
  if ($span[x].textContent === event.key && x <= $span.length) {
    console.log('yes');
    $span[x].className = 'span span-green';
  } else {
    console.log('no');
    $span[x].className = 'span span-red';
  }
  console.log(event);
  x++;
});

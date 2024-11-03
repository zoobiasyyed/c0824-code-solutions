// querying the DOM for all span elements

let x = 0;
const $span = document.querySelectorAll('span');

document.addEventListener('keydown', (event: KeyboardEvent) => {
  if ($span[x].textContent === event.key && x < $span.length - 1) {
    console.log('yes');
    $span[x].className = 'span span-green';
    $span[x + 1].className = 'span border-selected';
    x++;
  } else {
    console.log('no');
    $span[x].className = 'span span-red';
  }
  console.log(event);
});

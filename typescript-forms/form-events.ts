// handle focus

function handleFocus(event: Event): void {
  console.log('the focus event was fired');
  const eventTarget = event.target as HTMLInputElement | HTMLTextAreaElement;
  console.log(eventTarget.name);
}

// handle Blur

function handleBlur(event: Event): void {
  console.log('the blur event was fired');
  const eventTarget = event.target as HTMLInputElement | HTMLTextAreaElement;
  console.log(eventTarget.name);
}

// handle Input

function handleInput(event: Event): void {
  const eventTarget = event.target as HTMLInputElement | HTMLTextAreaElement;
  console.log(eventTarget.name);
  console.log(eventTarget.value);
}

// querying the DOM

const $focus = document.querySelector('input');

if (!$focus) throw new Error('$form does not exist');

$focus.addEventListener('focus', handleFocus);
$focus.addEventListener('blur', handleBlur);
$focus.addEventListener('focus', handleInput);

const $blur = document.querySelector('input');

if (!$blur) throw new Error('$blur does not exist');

$blur.addEventListener('focus', handleFocus);
$blur.addEventListener('blur', handleBlur);
$blur.addEventListener('focus', handleInput);

const $input = document.querySelector('textarea');

if (!$input) throw new Error('$input does not exist');

$input.addEventListener('focus', handleFocus);
$input.addEventListener('blur', handleBlur);
$input.addEventListener('focus', handleInput);

// querying the DOM for the contact form

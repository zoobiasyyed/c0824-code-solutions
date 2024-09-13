'use strict';
// handle focus
function handleFocus(event) {
  console.log('the focus event was fired');
  const eventTarget = event.target;
  console.log(eventTarget.name);
}
// handle Blur
function handleBlur(event) {
  console.log('the blur event was fired');
  const eventTarget = event.target;
  console.log(eventTarget.name);
}
// handle Input
function handleInput(event) {
  const eventTarget = event.target;
  console.log(eventTarget.name);
  console.log(eventTarget.value);
}
// querying the DOM
const $focus = document.querySelector('input');
if (!$focus) throw new Error('$form does not exist');
$focus.addEventListener('focus', handleFocus);
const $blur = document.querySelector('input');
if (!$blur) throw new Error('$blur does not exist');
$focus.addEventListener('blur', handleBlur);
const $input = document.querySelector('textarea');
if (!$input) throw new Error('$input does not exist');
$input.addEventListener('focus', handleInput);
// querying the DOM for the contact form
const $contactForm = document.querySelector('#contact-form');
$contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const $formElements = $contactForm.elements;
  const formData = {
    name: $formElements.name.value,
    email: $formElements.email.value,
    message: $formElements.message.value,
  };
  console.log(formData);
  $contactForm.reset();
});

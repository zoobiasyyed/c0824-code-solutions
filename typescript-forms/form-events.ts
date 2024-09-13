interface FormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  email: HTMLInputElement;
  message: HTMLTextAreaElement;
}

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

const $blur = document.querySelector('input');

if (!$blur) throw new Error('$blur does not exist');

$focus.addEventListener('blur', handleBlur);

const $input = document.querySelector('textarea');

if (!$input) throw new Error('$input does not exist');

$input.addEventListener('focus', handleInput);

// querying the DOM for the contact form

const $contactForm = document.querySelector('#contact-form') as HTMLFormElement;

$contactForm.addEventListener('submit', (event: Event) => {
  event.preventDefault();
  const $formElements = $contactForm.elements as FormElements;

  const formData = {
    name: $formElements.name.value,
    email: $formElements.email.value,
    message: $formElements.message.value,
  };

  console.log(formData);

  $contactForm.reset();
});

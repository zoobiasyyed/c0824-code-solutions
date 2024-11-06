// querying the DOM

const $openModal = document.querySelector('.open-modal');

if (!$openModal) throw new Error('$openModal not in query');

const $dismissModal = document.querySelector('.dismiss-modal');

if (!$dismissModal) throw new Error('$dismissModal not in query');

const $dialog = document.querySelector('dialog');

if (!$dialog) throw new Error('$dialog not in query');

$openModal.addEventListener('click', () => {
  $dialog.showModal();
});

$dismissModal.addEventListener('click', () => {
  $dialog.close();
});

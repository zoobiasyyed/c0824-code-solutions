// connecting script to webpage
const $tabContainer = document.querySelector('.tab-container');
const $tabElements = document.querySelectorAll('.tab');
const $viewElements = document.querySelectorAll('.view');

$tabContainer?.addEventListener('click', (event: Event) => {
  const $eventTarget = event.target as HTMLDivElement;
  if ($eventTarget.matches('.tab')) {
    for (let i = 0; i < $tabElements.length; i++) {
      if ($tabElements[i] === $eventTarget) {
        $tabElements[i].className = 'tab active';
      } else {
        $tabElements[i].className = 'tab';
      }
    }
  }
  const dataView = $eventTarget.getAttribute('data-view');
  for (let x = 0; x < $viewElements.length; x++) {
    if ($viewElements[x].getAttribute('data-view') === dataView) {
      $viewElements[x].className = 'view view-container';
    } else {
      $viewElements[x].className = 'view view-container hidden';
    }
  }
});

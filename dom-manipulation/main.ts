// variable for number of times user is clicking the button
let clicks = 0;

// querying the DOM to retrieve the hot button element

const $hotButton = document.querySelector('.hot-button');

// querying the DOM to retrieve the click count element

const $clickCount = document.querySelector('.click-count');

// contidional statememt for hot button

if (!$hotButton) throw new Error('the $hotButton query failed');

$hotButton.addEventListener('click', () => {
  clicks++;
  if (!$hotButton || !$clickCount) {
    throw new Error('the $hotButton or $clickCount query failed');
  }
  $clickCount.textContent = `Clicks: ${clicks}`;
  if (clicks < 4) {
    $hotButton.className = 'hot-button cold';
  } else if (clicks < 7) {
    $hotButton.className = 'hot-button cool';
  } else if (clicks < 10) {
    $hotButton.className = 'hot-button tepid';
  } else if (clicks < 13) {
    $hotButton.className = 'hot-button warm';
  } else if (clicks < 16) {
    $hotButton.className = 'hot-button hot';
  } else {
    $hotButton.className = 'hot-button nuclear';
  }
});

import { takeAChance } from './take-a-chance.js';

const promise = takeAChance('Zoobia');

promise
  .then((successMessage) => {
    console.log(successMessage);
  })
  .catch((error) => {
    console.log(error.message);
  });

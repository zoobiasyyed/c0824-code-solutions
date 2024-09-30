'use strict';
async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'GET',
    });
    if (!response.ok) {
      throw new Error(`error ${response.status}`);
    }
    const users = await response.json();
    console.log(users);
  } catch (error) {
    console.error('error: ', error);
  }
}
fetchData();
async function getPokemon() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon-species/', {
      method: 'GET',
    });
    if (!response.ok) {
      throw new Error(`error ${response.status}`);
    }
    const pokemonData = await response.json();
    console.log(pokemonData);
  } catch (error) {
    console.error('error: ', error);
  }
}
getPokemon();

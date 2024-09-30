interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

interface Pokemon {
  name: string;
  height: number;
  weight: number;
}

async function fetchData(): Promise<void> {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error(`error ${response.status}`);
    }

    const users = (await response.json()) as User;
    console.log(users);
  } catch (error) {
    console.error('error: ', error);
  }
}
fetchData();

async function getPokemon(): Promise<void> {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon-species/', {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error(`error ${response.status}`);
    }

    const pokemonData = (await response.json()) as Pokemon;
    console.log(pokemonData);
  } catch (error) {
    console.error('error: ', error);
  }
}

getPokemon();

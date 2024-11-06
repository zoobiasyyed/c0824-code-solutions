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
    const response = await fetch('https://pokeapi.co/api/v2/region/', {
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

interface PokemonSpecies {
  name: string;
  url: string;
}

interface PokemonType {
  type: {
    name: string;
  };
}

interface PokemonDetails {
  name: string;
  is_legendary: boolean;
  types: PokemonType[]; // Array of types, where each type has a name
}

async function fetchLegendaryPokemon(): Promise<void> {
  try {
    // Fetch all Pokémon species data (using a large limit)
    const response = await fetch(
      'https://pokeapi.co/api/v2/pokemon-species?limit=1000'
    );

    if (!response.ok) {
      throw new Error(`Error fetching Pokémon species: ${response.status}`);
    }

    // Parse the species data
    const data = await response.json();

    // Get the species URLs for further details
    const speciesUrls = data.results.map(
      (species: PokemonSpecies) => species.url
    );

    // Fetch all species details in parallel
    const speciesDetails = await Promise.all(
      speciesUrls.map(async (url: string) => {
        const speciesResponse = await fetch(url);
        const speciesData = await speciesResponse.json();

        // Fetch Pokémon details to get type information
        const pokemonUrl = speciesData.varieties[0].pokemon.url;
        const pokemonResponse = await fetch(pokemonUrl);
        const pokemonData = await pokemonResponse.json();

        // Return the combined details (name, legendary status, types)
        return {
          name: speciesData.name,
          is_legendary: speciesData.is_legendary,
          types: pokemonData.types, // Capture the Pokémon types from its details
        } as PokemonDetails;
      })
    );

    // Filter out only the legendary Pokémon and include types
    const legendaryPokemonDetails = speciesDetails
      .filter((species: PokemonDetails) => species.is_legendary)
      .map((species: PokemonDetails) => ({
        name: species.name,
        types: species.types.map((typeObj) => typeObj.type.name), // Extract type names
      }));

    // Log the array of legendary Pokémon names and types
    console.log(legendaryPokemonDetails);
  } catch (error) {
    console.error('Error fetching legendary Pokémon:', error);
  }
}

// Call the function to fetch and log legendary Pokémon names and types
fetchLegendaryPokemon();

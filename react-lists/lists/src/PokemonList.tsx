type Prop = {
  pokedex: Pokemon[];
};

export type Pokemon = {
  number: string;
  name: string;
};

export function PokemonList({ pokedex }: Prop) {
  const pokemonName = pokedex.map((pokemon) => (
    <li key={pokemon.number}> {pokemon.name}</li>
  ));

  return <ul>{pokemonName}</ul>;
}

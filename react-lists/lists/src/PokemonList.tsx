type Prop = {
  pokedex: { number: string; name: string }[];
};

export function PokemonList({ pokedex }: Prop) {
  const pokemonName = pokedex.map((pokemon) => <li>{pokemon.name}</li>);

  return <ul>{pokemonName}</ul>;
}

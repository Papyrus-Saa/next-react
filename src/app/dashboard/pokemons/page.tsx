

import PokemonGrid from "@/pokemons/components/PokemonGrid";
import { PokemonsResponse } from "@/pokemons/interfaces/pokemons-response";
import { SimplePokemon } from "@/pokemons/interfaces/simple-pokemon";



export const metadata = {
 title: '151 Pokémons',
 description: 'Pokemons',
};


const getPokemons = async (
  limit = 20,
  offset = 0
): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));

  //  throw new Error('Esto no debería de suceder')
  return pokemons;
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons(151);
  return (
   <div className="w-full h-full flex justify-center items-center bg-gray-100"> <div className="max-w-[900px] mx-auto overflow-auto max-h-[600px] flex flex-col  bg-gray-200 p-2">
   <PokemonGrid pokemons={pokemons}/>
  </div></div>
  );
}

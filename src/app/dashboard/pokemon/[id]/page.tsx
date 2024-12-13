import { Pokemon } from "@/pokemons/interfaces/pokemon";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

interface Props {
  params: { id: string };
}


export async function generateMetadata({ params }:Props): Promise<Metadata> {

  try {
    const { id, name } = await getPokemon(params.id);

    return {
      title: `#${ id } - ${ name }`,
      description: `Pokémon's page ${ name }`
    }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return {
      title: "Pokémon's page",
      description: 'Culpa cupidatat ipsum magna reprehenderit ex tempor sint ad minim reprehenderit consequat sit.'
    }
  }
}


const getPokemon = async(id: string): Promise<Pokemon> => {


  try {
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${ id }`,{
      cache: 'force-cache'// TODO: cambiar esto en un futuro
      // next: {
      //   revalidate: 60 * 60 * 30 * 6
      // }
    }).then( resp => resp.json() );

    return pokemon;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    notFound();
  }

}




export default async function PokemonPage({ params }: Props) {

  const pokemon = await getPokemon(params.id);

  return (
    <div className="flex flex-col items-center justify-center bg-neutral-950 h-full p-4">
      <div className="relative flex flex-col items-center rounded-[20px] w-[700px] mx-auto bg-neutral-900 bg-clip-border  shadow-lg  p-3">
        <div className="mt-2 mb-8 w-full">
          <h1 className="px-2 text-xl font-bold text-slate-300 capitalize">
            #{pokemon.id} {pokemon.name}
          </h1>
          <div className="flex flex-col justify-center items-center">
            <Image
              src={pokemon.sprites.other?.dream_world.front_default ?? ''}
              width={150}
              height={150}
              alt={`Imagen del pokemon ${pokemon.name}`}
              className="mb-5"
            />


            <div className="flex flex-wrap">
              {
                pokemon.moves.map(move => (
                  <p key={move.move.name} className="mr-2 capitalize text-gray-400">{move.move.name}</p>
                ))
              }
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 px-2 w-full">

          <div className="flex flex-col items-start justify-center rounded-2xl bg-green-900 bg-clip-border px-3 py-4  drop-shadow-lg ">
            <p className="text-sm text-gray-200">Types</p>
            <div className="text-base font-medium text-gray-400 flex">
              {
                pokemon.types.map(type => (
                  <p key={type.slot} className="mr-2 capitalize">{type.type.name}</p>
                ))
              }
            </div>
          </div>

          <div className="flex flex-col items-start justify-center rounded-2xl bg-green-900 bg-clip-border px-3 py-4  drop-shadow-lg ">
            <p className="text-sm text-gray-200">Peso</p>
            <span className="text-base font-medium text-gray-400 flex">
              {
                pokemon.weight
              }
            </span>
          </div>

          <div className="flex flex-col justify-center rounded-2xl bg-green-900 bg-clip-border px-3 py-4  drop-shadow-lg">
            <p className="text-sm text-gray-200">Regular Sprites</p>
            <div className="flex justify-center">

              <Image
                src={pokemon.sprites.front_default}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />

              <Image
                src={pokemon.sprites.back_default}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />

            </div>
          </div>

          <div className="flex flex-col justify-center rounded-2xl bg-green-900 bg-clip-border px-3 py-4  drop-shadow-lg">
            <p className="text-sm text-gray-200">Shiny Sprites</p>
            <div className="flex justify-center">

              <Image
                src={pokemon.sprites.front_shiny}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />

              <Image
                src={pokemon.sprites.back_shiny}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

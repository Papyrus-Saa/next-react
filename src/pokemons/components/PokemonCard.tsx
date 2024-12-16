
import React from "react";
import Link from "next/link";
import { SimplePokemon } from "../interfaces/simple-pokemon";
import Image from "next/image";


interface Props {
  pokemon: SimplePokemon;
}

const PokemonCard = ({ pokemon }: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id, name } = pokemon;

  return (
    <div className="mx-auto right-0 mt-2 w-60  p-2 bg-gray-300 hover:shadow-custom-light-bottom duration-700 rounded-xl hover:bg-white ">
      <div className="overflow-hidden shadow-lg rounded-3xl">
        <div className="flex flex-col items-center justify-center text-center p-6 bg-gray-300 hover:bg-gray-200 duration-700">
          { <Image
            className=" imgContainer  rounded-tr-xl p-1 "
            key={pokemon.id}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
            alt={pokemon.name}
            width={100}
            height={100}
            style={{ width: "100px", height: "100px" }}
            priority={  false  }
          /> }
          <p className="pt-2 text-lg font-semibold text-slate-700 capitalize">
            {name}
          </p>

          <div className="mt-5">
            <Link
              href={`/dashboard/pokemons/${name}`}
              className="rounded-full bg-gray-600 hover:bg-gray-500 duration-500 py-2 px-4 text-xs font-semibold text-gray-100 "
            >
              More...
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PokemonCard;



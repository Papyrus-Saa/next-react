
import React from "react";
import Link from "next/link";
import { SimplePokemon } from "../interfaces/simple-pokemon";
import Image from "next/image";
import { IoHeartOutline } from "react-icons/io5";

interface Props {
  pokemon: SimplePokemon;
}

const PokemonCard = ({ pokemon }: Props) => {
  const { id, name } = pokemon;

  return (
    <div className="mx-auto right-0 mt-2 w-60  p-2 bg-green-900">
      <div className="bg-white rounded overflow-hidden shadow-lg">
        <div className="flex flex-col items-center justify-center text-center p-6 bg-gray-800 border-b">
          { <Image
            className=" imgContainer bg-gray-900 rounded-tr-xl p-1 shadow-custom-light-bottom"
            key={pokemon.id}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
            alt={pokemon.name}
            width={100}
            height={100}
            style={{ width: "110px", height: "100px" }}
            priority={  false  }
          /> }
          <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">
            {name}
          </p>
          <p className="text-sm text-gray-100">John@Doe.com</p>
          <div className="mt-5">
            <Link
              href={`/dashboard/pokemons/${id}`}
              className="rounded-full bg-green-900 hover:bg-gray-100 hover:text-green-900 duration-500 py-2 px-4 text-xs font-semibold text-gray-100 "
            >
              More...
            </Link>
          </div>
        </div>
        <div className="border-b bg-gray-900 text-gray-500">
          <Link
            href="/dashboard/main"
            className="px-4 py-2 hover:bg-gray-800 flex duration-500"
          >
            <div className="text-green-600 ">
              <IoHeartOutline  className="hover:text-green-600 duration-500"/>
            </div>
            <div className="mx-auto">
              <p className="text-sm font-medium leading-none">No es favorito</p>
              <p className="text-xs">View your campaigns</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default PokemonCard;



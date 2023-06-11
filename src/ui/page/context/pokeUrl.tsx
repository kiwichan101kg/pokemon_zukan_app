import React, { createContext, useState } from "react";
import { baseUrl, useGetPokeUrl } from "../../../usecase/fetchPokemon";

// コンテキストの作成
export const PokemonContext = createContext<any>({});

// コンテキストプロバイダーの作成
export const PokemonProvider = (props: any) => {
  // ポケモン情報のurlを取得する
  const { data } = useGetPokeUrl(baseUrl);
  const [pokemonData, setPokemonData] = useState<any>(data); // ポケモン情報の状態

  return (
    <PokemonContext.Provider value={{ pokemonData, setPokemonData }}>
      {props.children}
    </PokemonContext.Provider>
  );
};

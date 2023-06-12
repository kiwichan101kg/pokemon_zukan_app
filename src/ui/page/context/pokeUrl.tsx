import React, { createContext, useEffect, useState } from "react";
import { baseUrl, useGetPokeUrl } from "../../../usecase/fetchPokemon";

// コンテキストの作成
export const PokemonContext = createContext<any>({});

// コンテキストプロバイダーの作成
export const PokemonProvider = (props: any) => {
  // ポケモン情報のurlを取得する
  const { data } = useGetPokeUrl(baseUrl);

  const [pokemonUrl, setPokemonUrl] = useState<any>(data); // ポケモン情報の状態

  useEffect(() => {
    setPokemonUrl(data);
  }, [data]);

  return (
    <PokemonContext.Provider value={{ pokemonUrl, setPokemonUrl }}>
      {props.children}
    </PokemonContext.Provider>
  );
};

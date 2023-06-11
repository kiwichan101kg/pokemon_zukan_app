import { useState, useEffect } from "react";
import jaPokemonData from "../../infra/jaPokemon.json";

export const useJapaneseName = (enName: string) => {
  const [japaneseName, setJapaneseName] = useState<string>("");

  useEffect(() => {
    const pokemonName = getJapaneseName(enName);
    setJapaneseName(pokemonName);
  }, [enName]);

  const getJapaneseName = (enName: string) => {
    const pokemonName = jaPokemonData.find(
      (v) => v.en.toLowerCase() === enName
    );
    return pokemonName ? pokemonName.ja : enName;
  };

  return japaneseName;
};

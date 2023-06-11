import axios from "axios";
import { useEffect } from "react";
import useSWR from "swr";

const baseUrl = "https://pokeapi.co/api/v2/pokemon/";

const allPokemonFetcher = (url: string) =>
  axios.get(url).then((res) => res.data);

export const useGetAllPokemon = (pokemonId?: string) => {
  const url = pokemonId ? baseUrl + pokemonId : baseUrl;
  const { data, error, isLoading } = useSWR(url, allPokemonFetcher);
  return { data, isLoading, isError: error };
};

const pokemonFetcher = (urls: string[]) => {
  const f = (url: string) => axios.get(url).then((res) => res.data);
  return Promise.all(urls.map(f));
};

export const useGetPokemon = (urls: string[]) => {
  const { data, error, isLoading } = useSWR(urls, pokemonFetcher);

  return {
    data: data ? data.flat() : [],
    isLoading,
    isError: error,
  };
};

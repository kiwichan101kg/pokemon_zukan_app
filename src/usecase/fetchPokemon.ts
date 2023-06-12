import axios from "axios";
import { useEffect } from "react";
import useSWR from "swr";
import useSWRInfinite from "swr/infinite";

export const baseUrl = "https://pokeapi.co/api/v2/pokemon/";

/**
 * ポケモン情報のurlを取得するためのfetcher関数
 * @param url
 * @returns data ポケモン情報のurl
 */
const pokeUrlFetcher = (url: string) => axios.get(url).then((res) => res.data);

/**
 * ポケモン情報のurlを取得する
 * @param pokemonId
 * @returns data 処理結果
 */
export const useGetPokeUrl = (url: string) => {
  const { data, error, isLoading } = useSWR(url, pokeUrlFetcher);
  return { data, isLoading, isError: error };
};

/**
 * ポケモン詳細情報データを取得して返却するfetcher関数
 * @param urls
 * @returns
 */
const pokemonFetcher = (urls: string[]) => {
  const f = (url: string) => axios.get(url).then((res) => res.data);
  return Promise.all(urls.map(f));
};

/**
 * ポケモン詳細情報データを取得して返却する関数
 * @param urls
 * @returns
 */
export const useGetPokemon = (urls: string[]) => {
  const { data, error, isLoading } = useSWR(urls, pokemonFetcher);

  return {
    data: data ? data.flat() : [],
    isLoading,
    isError: error,
  };
};

// const getKey = (nextUrl: any, previousPageData: any) => {
//   if (previousPageData && !previousPageData.length) return null; // 最後に到達した
//   return nextUrl; // SWR キー
// };

// export const useGetNextPokemonDetail = (nextUrl: string, prevData: any) => {
//   const { data, error, isLoading, isValidating, mutate, size, setSize } =
//     useSWRInfinite(
//       (nextUrl, prevData) => getKey(nextUrl, prevData),
//       pokeUrlFetcher
//     );
//   return { data, error, isLoading, isValidating, mutate, size, setSize };
// };

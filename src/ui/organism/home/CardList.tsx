/** @jsxImportSource @emotion/react */
import React, { useContext, useEffect } from "react";
import { css, keyframes } from "@emotion/react";
import {
  baseUrl,
  useGetPokeUrl,
  useGetPokemon,
} from "../../../usecase/fetchPokemon";
import { Card } from "./Card";
import { PokemonContext } from "../../page/context/pokeUrl";

export const CardList = () => {
  const { pokemonData, setPokemonData } = useContext(PokemonContext);

  // ポケモン情報のurlを取得する
  const { data } = useGetPokeUrl(baseUrl);

  // コンテキストにポケモン情報のurlをセットする
  useEffect(() => {
    setPokemonData(data);
  }, [data]);

  // 複数のポケモン情報のurlを配列にし、複数のポケモン詳細情報の配列を取得する
  const urlArr = pokemonData?.results.map((v: { url: string }) => v.url);
  const { data: pokemonDetailArr } = useGetPokemon(urlArr);

  return (
    <div css={cardListStyles}>
      {pokemonDetailArr.map((v) => (
        <Card props={v} key={v.id} />
      ))}
    </div>
  );
};

const cardListStyles = css`
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* 4つのカラムを均等に配置 */
  gap: 20px; /* カード間のスペース */
  max-width: 1400px;
  margin: 20px auto;
`;

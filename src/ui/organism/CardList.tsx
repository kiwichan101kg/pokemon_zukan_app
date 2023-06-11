/** @jsxImportSource @emotion/react */
import React from "react";
import { css, keyframes } from "@emotion/react";
import { useGetAllPokemon, useGetPokemon } from "../../usecase/fetchPokemon";
import { Card } from "./Card";

export const CardList = () => {
  const { data } = useGetAllPokemon();
  console.log(data);

  const urlArr = data?.results.map((v: { url: string }) => v.url);

  const { data: pokemon } = useGetPokemon(urlArr);
  console.log(pokemon);

  return (
    <div css={cardListStyles}>
      {pokemon.map((v) => (
        <Card props={v} key={v.id} />
      ))}
    </div>
  );
};

const cardListStyles = css`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4つのカラムを均等に配置 */
  gap: 20px; /* カード間のスペース */
  max-width: 1000px;
  margin: 0 auto;
`;

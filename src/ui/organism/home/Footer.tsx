import React, { useContext, useEffect, useState } from "react";
import { css } from "@emotion/react";
import { PokemonContext } from "../../page/context/pokeUrl";
import { useGetPokeUrl } from "../../../usecase/fetchPokemon";

export const Footer = () => {
  const { pokemonData, setPokemonData } = useContext(PokemonContext);

  // ポケモン情報のurlを取得する
  const { data: previous } = useGetPokeUrl(pokemonData?.previous);
  const { data: next } = useGetPokeUrl(pokemonData?.next);
  const handleClickPrev = () => {
    if (previous) {
      setPokemonData(previous);
    }
  };
  const handleClickNext = () => {
    if (next) {
      setPokemonData(next);
    }
  };

  return (
    <div css={footerStyle}>
      <button onClick={handleClickPrev} css={buttonStyles} disabled={!previous}>
        前へ
      </button>
      <button onClick={handleClickNext} css={buttonStyles} disabled={!next}>
        次へ
      </button>
    </div>
  );
};

const footerStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #49c5b6;
  box-shadow: 0px 0px 15px -5px #235e57;
  padding: 50px;
`;

const buttonStyles = css`
  padding: 10px 20px;
  margin-left: 100px;
  background-color: #eac84d;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  border: none;
  box-shadow: 0px 0px 15px -5px #235e57;
  border-radius: 20px;
  transition: background-color 0.3s ease-in-out;
  cursor: pointer;

  /* 非活性時のスタイル */
  &:disabled {
    background-color: #ccc;
    color: #fff;
    box-shadow: none;
    cursor: default;
  }

  /* ホバー時のスタイル */
  &:hover:not(:disabled) {
    background-color: #fece00;
  }
`;

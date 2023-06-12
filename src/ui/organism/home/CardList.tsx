/** @jsxImportSource @emotion/react */
import React, { useContext, useEffect } from "react";
import { css } from "@emotion/react";
import { useGetPokeUrl, useGetPokemon } from "../../../usecase/fetchPokemon";
import { Card } from "./Card";
import { PokemonContext } from "../../page/context/pokeUrl";

// 取得したすべてのポケモン詳細データの配列
const AllPokeDetailArr: any[] = [];

export const CardList = () => {
  const { pokemonUrl, setPokemonUrl } = useContext(PokemonContext);

  const urlArr = pokemonUrl?.results.map((v: { url: string }) => v.url);
  const { data: pokemonDetailArr } = useGetPokemon(urlArr);

  useEffect(() => {
    if (pokemonDetailArr) {
      AllPokeDetailArr.push(...pokemonDetailArr);
    }
  }, [pokemonDetailArr]);

  return (
    <div css={cardListStyles}>
      {pokemonDetailArr ? (
        AllPokeDetailArr.map((v) => <Card props={v} key={v.id} />)
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

const useScroll = (nextUrl: any, setPokemonUrl: any) => {
  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
      console.log(
        "現在のスクロール位置:",
        scrollTop + clientHeight >= scrollHeight - 100
      );

      if (scrollTop + clientHeight >= scrollHeight - 100) {
        // 取得した追加のポケモンデータを既存の pokemonDetailArr に追加する
        setPokemonUrl(nextUrl);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [nextUrl]);
};

const cardListStyles = css`
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* 4つのカラムを均等に配置 */
  gap: 20px; /* カード間のスペース */
  max-width: 1400px;
  margin: 20px auto;
`;

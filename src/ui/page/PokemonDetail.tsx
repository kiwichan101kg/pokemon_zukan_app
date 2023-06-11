import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGetAllPokemon } from "../../usecase/fetchPokemon";
import styled from "styled-components";
import { css, keyframes } from "@emotion/react";

export const PokemonDetail = () => {
  const { pokemonId } = useParams();
  const { data } = useGetAllPokemon(pokemonId);
  console.log("pokemon", data);

  return (
    <div>
      <p css={title}>Pokemon</p>
      {data ? (
        <div css={pictureWrap}>
          <div css={picture}>
            <img src={data.sprites.front_default} alt="" />
          </div>
          <div css={picture}>
            <img src={data.sprites.back_default} alt="" />
          </div>
        </div>
      ) : (
        <p>loding</p>
      )}

      <Link to={"/"}>ホームへ</Link>
    </div>
  );
};

const title = css`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
`;

const pictureWrap = css`
  display: flex;
`;

const picture = css`
  width: 300px;
  height: auto;
  margin: 0 auto;
  img {
    width: 100%;
    height: auto;
  }
`;

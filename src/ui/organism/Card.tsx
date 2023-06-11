/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { css, keyframes } from "@emotion/react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import jaPokemonData from "../../infra/jaPokemon.json";

export const Card = ({ props }: any) => {
  const [japaneseName, setJapaneseName] = useState<string>("");

  useEffect(() => {
    const japaneseName = getJapaneseName(props.name);
    setJapaneseName(japaneseName);
  }, []);

  return (
    <div css={[cardStyles]}>
      <div>
        <Link
          to={`/pokemon/${props.forms[0].name}`}
          css={linkStyles}
          key={props.id}
        >
          <img src={props.sprites.front_default} alt="" />
          <p>{japaneseName}</p>
        </Link>
      </div>
    </div>
  );
};

/**
 * ポケモンの英名を日本語変換する
 * @param enName ポケモン英名
 * @returns pokemonName ポケモン和名
 */
const getJapaneseName = (enName: string) => {
  const pokemonName = jaPokemonData.find((v) => v.en.toLowerCase() === enName);
  return pokemonName ? pokemonName.ja : enName;
};

const linkStyles = css`
  display: block;
  text-decoration: none;
  color: #235e57; /* リンクの色を指定 */
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #fece00;
  }
`;

const cardStyles = css`
  margin-bottom: 20px;
  justify-content: center;
  transition: transform 0.3s ease-in-out;
  img {
    width: 100%;
    height: auto;
    box-shadow: 0px 0px 15px -5px #235e57;
    border-radius: 20px;
  }
  p {
    text-align: center;
    margin: 0;
    font-weight: bold;
    font-size: 18px;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

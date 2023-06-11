import { Link, useParams } from "react-router-dom";
import { css, keyframes } from "@emotion/react";
import { baseUrl, useGetPokemon } from "../../../usecase/fetchPokemon";
import { useJapaneseName } from "../hook";

export const MainPicture = () => {
  const { pokemonId } = useParams();

  const { data: dataArr } = useGetPokemon([baseUrl + pokemonId]);
  const data = dataArr[0];
  const japaneseName = useJapaneseName(data?.name);

  return (
    <div>
      {data ? (
        <div css={wrap}>
          <div css={pictureWrap}>
            <img src={data.sprites.front_default} alt="" />
            <img src={data.sprites.back_default} alt="" />
          </div>
          <div css={pokeName}>
            <p>{zeroPadId(data.id)}</p>
            <p>{japaneseName ?? data.name}</p>
          </div>
        </div>
      ) : (
        <p>loding</p>
      )}
    </div>
  );
};

const zeroPadId = (id: string) => {
  return `No.${String(id).padStart(4, "0") || "0000"}`;
};

const wrap = css`
  display: flex;
  justify-content: center;
  padding: 30px;
`;

const pictureWrap = css`
  display: flex;
  width: 600px;
  height: auto;
  img {
    width: 100%;
    height: auto;
  }
`;

const pokeName = css`
  width: 400px;
  padding: 30px;
  margin: 50px;
  box-shadow: 0px 0px 15px -5px #235e57;
  border-radius: 20px;
  > p:first-of-type {
    /* No.のp要素に適用するスタイル */
    margin: 0;
    font-size: 18px;
    font-weight: bold;
  }

  > p:last-of-type {
    /* 名前のp要素に適用するスタイル */
    margin: 0;
    font-size: 24px;
    font-weight: bold;
  }
`;

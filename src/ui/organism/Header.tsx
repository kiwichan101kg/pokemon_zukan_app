import React from "react";
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <div css={headerStyles}>
      <Link to={"/"}>
        <img
          css={titleStyles}
          src="https://fontmeme.com/permalink/230611/33a2913397b3e67dcb8d5833cc1ec747.png"
          alt="pokemon"
        />
      </Link>
      <div css={buttonContainerStyles}>
        <button css={buttonStyles}>検索</button>
        <button css={buttonStyles}>お気に入り</button>
      </div>
    </div>
  );
}

const headerStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #49c5b6;
  box-shadow: 0px 0px 15px -5px #235e57;
  padding: 20px;
`;

const titleStyles = css`
  width: 240px;
`;

const buttonContainerStyles = css`
  display: flex;
`;

const buttonStyles = css`
  padding: 10px 20px;
  margin-left: 10px;
  background-color: #eac84d;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  border: none;
  box-shadow: 0px 0px 15px -5px #235e57;
  border-radius: 20px;
  transition: background-color 0.3s ease-in-out;

  cursor: pointer;
  &:hover {
    background-color: #fece00;
  }
`;

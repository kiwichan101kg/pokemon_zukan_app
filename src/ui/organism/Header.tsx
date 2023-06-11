import React from "react";
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <div css={headerStyles}>
      <Link to={"/"}>
        <h1 css={titleStyles}>ポケモン図鑑</h1>
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
  background-color: #f0f0f0;
  padding: 20px;
`;

const titleStyles = css`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

const buttonContainerStyles = css`
  display: flex;
`;

const buttonStyles = css`
  padding: 10px 20px;
  background-color: #4a90e2;
  color: #fff;
  border: none;
  border-radius: 4px;
  margin-left: 10px;
  cursor: pointer;

  &:hover {
    background-color: #256fb5;
  }
`;

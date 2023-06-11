import React from "react";
import { Link } from "react-router-dom";
import { CardList } from "../organism/CardList";

export const Home = () => {
  return (
    <div>
      <Link to={"/login"}>ログイン</Link>
      <Link to={"/pokemon"}>ポケモン</Link>
      <CardList />
      home
    </div>
  );
};

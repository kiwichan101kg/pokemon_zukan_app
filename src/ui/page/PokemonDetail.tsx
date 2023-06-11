import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { css, keyframes } from "@emotion/react";
import { getJapaneseName } from "../organism/home/Card";
import { useJapaneseName } from "../organism/hook";
import { MainPicture } from "../organism/pokemondetail/mainpicture";

export const PokemonDetail = () => {
  return (
    <div>
      <MainPicture />
      <Link to={"/"}>戻る</Link>
    </div>
  );
};

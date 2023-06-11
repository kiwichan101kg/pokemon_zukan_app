import React from "react";
import { Link } from "react-router-dom";
import { CardList } from "../organism/home/CardList";
import { Footer } from "../organism/home/Footer";
import { Header } from "../organism/Header";
import { PokemonProvider } from "./context/pokeUrl";

export const Home = () => {
  return (
    <div>
      <PokemonProvider>
        <Header />
        <CardList />
        <Footer />
      </PokemonProvider>
    </div>
  );
};

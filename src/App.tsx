import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./ui/page/home";
import Login from "./ui/page/Login";
import { PokemonDetail } from "./ui/page/PokemonDetail";
import { Header } from "./ui/organism/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/"} element={<Home />}></Route>
          <Route path={"/login"} element={<Login />}></Route>
          <Route
            path={"/pokemon/:pokemonId"}
            element={<PokemonDetail />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

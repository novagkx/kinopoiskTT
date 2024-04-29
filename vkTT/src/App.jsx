import { useState, useEffect } from "react";
import "./App.css";
import MainSection from "./components/MainSection.jsx";
import Context from "./utils/Context.js";
import SilmilarFilmsSection from "./components/SimilarFilmsSection.jsx";
import FilmService from "./API/FilmService.js";
import useFetching from "./customHooks/useFetching.js";
import axios from "axios";
import apiKey from "./API/apiKey.js";
function App() {
  return (
    <>
      <header className="header">
        <h1 className="header__h1">Кино справочник</h1>
      </header>
      <main>
        <MainSection />
      </main>
    </>
  );
}

export default App;

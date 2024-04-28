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
  // const [limit, setLimit] = useState(5);
  // const [similarFilms, setSimilarFilms] = useState([]);
  // Функция для отправки запроса похожих фильмов
  // const fetchExactFilm = async (id) => {
  //   // const response = await FilmService.getSimilarFilms(limit, id) // допилить проверку на try catch
  //   // const response = await axios.get("https://jsonplaceholder.typicode.com/users")
  //   console.log("Попытка запроса - ", id, limit)
  //   const response = await axios.get(`https://api.kinopoisk.dev/v1.4/movie/${id}`, {headers: {
  //     'X-API-KEY': apiKey,
  //     'accept': 'application/json'
  //   }})
  //   setSimilarFilms(response.data);
  //   console.log("23строка", response.data, similarFilms)
  // };

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

import React from "react";
import FilmItem from "./FilmItem";
import { useState } from "react";
import FilmModal from "./modal/FilmModal";
import SilmilarFilmsSection from "./SimilarFilmsSection";
import axios from "axios";
import apiKey from "../API/apiKey";
const Films = ({ films, blockName }) => {
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showFilms, setShowFilms] = useState(false);
    const showSImilar = () => {
        setShowModal(false);
        setShowFilms(true)
    }
  // запрос на конкретный фильм
  const fetchExactFilm = async (film) => {
    //сделать проверку на try catch
    console.log("Попытка запроса - ", film.id);
    const response = await axios.get(
      `https://api.kinopoisk.dev/v1.4/movie/${film.id}`,
      {
        headers: {
          "X-API-KEY": apiKey,
          accept: "application/json",
        },
      }
    );
    console.log('Полученный запрос на весь фильм response: ', response);
    console.log('Полученный запрос на весь фильм response.data: ', response.data)
    setSelectedFilm(response.data);
    setShowModal(true);
  };
  const closeAll = () => {
    setShowModal(false);
    setSelectedFilm(null);
  }
  if (!films) return;
  return (
    <>
      <ul className={blockName + "__list"}>
        {films.map((film) => (
          <FilmItem
            key={film.id}
            blockName={blockName}
            film={film}
            onclick={() => fetchExactFilm(film)}
          ></FilmItem>
        ))}
      </ul>
      <FilmModal
        active={showModal}
        film={selectedFilm}
        showSImilar = {showSImilar}
        onclose={closeAll}
      />
      {showFilms ? <SilmilarFilmsSection data={selectedFilm}/> : <></>}
    </>
  );
};

export default Films;

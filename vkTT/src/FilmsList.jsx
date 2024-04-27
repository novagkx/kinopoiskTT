import React from 'react';
import FilmItem from './components/FilmItem'
import {useState} from 'react'
import FilmModal from "./components/modal/FilmModal"
const Films = ({films, blockName}) => {
    const [selectedFilm, setSelectedFilm] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const handleFilmClick = (film) => {
        setSelectedFilm(film);
        setShowModal(true);
      };
    return (
        <>
        <ul className={blockName + '__list'}>
            {films.map((film) => (
                <FilmItem key={film.id} blockName={blockName} film={film} onclick={() => handleFilmClick(film)} ></FilmItem>
            ))}
        </ul>
         <FilmModal active={showModal} film={selectedFilm} onclose={() => setShowModal(false)} />
         </>
    );
};

export default Films;
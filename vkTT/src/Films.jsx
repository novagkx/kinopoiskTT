import React from 'react';
import FilmItem from './components/FilmItem'
const Films = ({films, blockName}) => {
    return (
        <ul className={blockName + '__list'}>
            {films.map((film) => (
                <FilmItem key={film.id} blockName={blockName} film={film}></FilmItem>
            ))}
        </ul>
    );
};

export default Films;
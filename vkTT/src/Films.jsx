import React from 'react';

const Films = ({films}) => {
    return (
        <div>
            {films.map((film) => (
                <div key={film.name}>name = {film.name}, year = {film.year}</div>
            ))}
        </div>
    );
};

export default Films;
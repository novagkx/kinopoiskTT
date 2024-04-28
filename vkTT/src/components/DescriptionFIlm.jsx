const DescriptionFilm = ({blockName, film}) => {
    return (
        <ul className={blockName +"__list"}>
                <li className={blockName +"__item"}>
                  <span>
                    <strong>Длительность:</strong> {film.movieLength} мин{" "}
                  </span>
                </li>
                <li className={blockName+"__item"}>
                  <span>
                    <strong>Дата выхода:</strong> {film.year} год
                  </span>
                </li>
                <li className={blockName+"__item"}>
                  <span>
                    <strong>Жанр:</strong>
                    {film.genres.map((genre) => genre.name).join(", ")}
                  </span>
                </li>
              </ul>
    )
}

export default DescriptionFilm;
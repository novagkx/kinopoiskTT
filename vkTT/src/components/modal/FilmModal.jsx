import "./modal.css";
export default function FilmModal({ active, film, onclose }) {
  if (!film) return null;
  const genresArray = film.genres.map((genre) => genre.name)
  console.log(genresArray)
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => onclose()}
    >
      <div
        className={active ? "modal__content active" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal__header-container">
          <h2 className="modal__header">{film.rating.kp.toFixed(1)}</h2>
          <p className="modal__name">{film.name}</p>
        </div>
        <div className="modal__info-container">
          <div className="modal__description-container">
            <p className="modal__description">{film.description}</p>
            <div className="modal__main-info">
              <ul className="modal__list">
                <li className="modal__item">
                  <span>
                    <strong>Длительность:</strong> {film.movieLength} мин{" "}
                  </span>
                </li>
                <li className="modal__item">
                  <span>
                    <strong>Дата выхода:</strong> {film.year} год
                  </span>
                </li>
                <li className="modal__item">
                  <span>
                    <strong>Жанр:</strong>{" "}
                    {film.genres.map((genre) => genre.name).join(", ")}
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <img className="modal__img" src={film.poster.previewUrl} alt="" />
        </div>

        <div className="modal__similar">
        <h2 className="similar-section__h2">Похожие фильмы</h2>
          
        </div>
      </div>
    </div>
  );
}

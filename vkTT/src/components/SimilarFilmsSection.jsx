import SimilarFilmItem from "./SimilarFilmItem";

export default function SilmilarFilmsSection({data}) {
    if (!data) return;
    const { similarMovies } = data; // массив подходящих фильмов
  // Если нет похожих фильмов, возвращаем заголовок о том, что фильмов не найдено
  if (!similarMovies || similarMovies.length === 0) {
    return (
      <section className="similar-section">
        <div className="similar-section_container">
          <h2 className="similar-section__h2">Похожих фильмов к {data.name} не найдено!</h2>
        </div>
      </section>
    );
  }
  // Если есть похожие фильмы, выбираем первые 5 из них
  const firstFourSimilarMovies = similarMovies.slice(0, 5);

  return (
    <section className="similar-section">
      <div className="similar-section_container">
      <h2 className="similar-section__h2--show">Похожие фильмы "{data.name}"</h2>
        <ul className="similar-section__list">
          {firstFourSimilarMovies.map((film) => (
            // Для каждого фильма создаем компонент FilmItem
            <SimilarFilmItem key={film.id} name={film.name} src={film.poster.previewUrl} />
          ))}
        </ul>
      </div>
    </section>
  );
}

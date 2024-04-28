export default function SimilarFilmItem ({src, name}) {
    return (
        <>
        <li className="similar-section__item">
            <a href="#" className="similar-section__link">
              <img src={src} alt="Постер фильма" className="similar-section__img" />
              <h2 className="similar-section__header">{name}</h2>
            </a>
          </li>
          </>
    );
}
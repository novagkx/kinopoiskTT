// import FilmService from "../API/FilmService.js";

export default function FilmItem ({blockName, film, onclick}) {
    
    return (
        <li className={blockName + "__item"} key={film.id}>
                    <a className='section__link' onClick={onclick}>
                    <img style={{maxWidth: "100%", maxHeight: "100%"}} src={film.poster.previewUrl
}></img>
                    <div className="section__items-container">
                        <h3 className="section__rating">{(film.rating.kp).toFixed(1)}</h3>
                        <div className="section__info-container">
                            <p className="section__header">
                                {film.name}
                            </p>
                            <p className="section__release-date">
                                {film.year}
                            </p>
                        </div>
                    </div>
                    </a>
                    </li>
    )
}

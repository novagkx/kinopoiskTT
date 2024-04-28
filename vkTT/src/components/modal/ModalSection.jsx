import DescriptionFilm from "../DescriptionFIlm"
const ModalSection = ({blockName, film, showSImilar}) => {
  
    return (
        <>
        <div className={blockName + "__header-container"}>
          <h2 className={blockName + "__header"}>{film.rating.kp.toFixed(1)}</h2>
          <p className={blockName +"__name"}>{film.name}</p>
        </div>
        <div className={blockName +"__info-container"}>
          <div className={blockName +"__description-container"}>
            <p className={blockName +"__description"}>{film.description}</p>
            <div className={blockName +"__main-info"}>
                <DescriptionFilm blockName={blockName} film={film}/>
            </div>
            <h2 className={blockName+"__question"}><a onClick={() => showSImilar(film)} className={blockName+"__link"}>Показать похожие фильмы</a></h2>
          </div>
          <img className={blockName + "modal"} src={film.poster.previewUrl} alt="" />
        </div>
        </>
    )
}
export default ModalSection
import "./modal.css";
import ModalSection from "./ModalSection.jsx";
export default function FilmModal({ active, film, onclose, showSImilar }) {
  if (!film || !film.id) return;

  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => onclose()}
    >
      <div
        className={active ? "modal__content active" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        <ModalSection showSImilar={showSImilar} blockName={"modal"} film={film} />
      </div>
    </div>
  );
}

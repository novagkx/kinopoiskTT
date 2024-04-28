import { useState, useEffect } from "react";
import FilmService from "../API/FilmService.js";
import FilmsList from "./FilmsList.jsx";
import useFetching from "../customHooks/useFetching.js";
import { getPageCount, getPagesArray } from "../utils/pages.js";
import Pagination from "./Pagination.jsx";

const MainSection = () => {
  const [films, setfilms] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(4);
  const [totalPages, setTotalPages] = useState(0);

  const [fetchfilms, isfilmsLoading, filmError] = useFetching(async () => {
    const response = await FilmService.getBestFilms(limit, currentPage); // здесь уже запрос нужный на лучшие фильмы
    setfilms(response.data);
    console.log(response.data);
    const totalCount = response.data.total; // беру количество элементов из поля total
    setTotalPages(getPageCount(totalCount, limit));
  });
  let pagesArray = getPagesArray(currentPage, totalPages);

  useEffect(() => {
    fetchfilms();
  }, [currentPage]);

  const setPage = (page) => setCurrentPage(page);

  return (
    <section className="section">
      <h2 className="section__h2">Лучшие фильмы</h2>
      <Pagination
        setPage={setPage}
        currentPage={currentPage}
        totalPages={totalPages}
        pagesArray={pagesArray}
        onclick={setPage}
      />
      
      <div className="section__container">
        {filmError && <h1>Произошла ошибка...</h1>}
        {isfilmsLoading ? (
          <span>Загрузка...</span>
        ) : (
          <FilmsList blockName={"section"} films={films.docs} />
        )}
      </div>
    </section>
  );
};

export default MainSection;

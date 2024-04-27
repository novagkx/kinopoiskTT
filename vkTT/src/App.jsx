import './App.css'
import {useState, useEffect} from 'react'
import FilmService from "./API/FilmService.js";
import FilmsList from "./FilmsList.jsx";
import useFetching from "./customHooks/useFetching.js";
import {getPageCount, getPagesArray} from "./utils/pages.js";
import Button from "./components/Button.jsx";

function App() {
    const [films, setfilms] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [limit, setLimit] = useState(4);
    const [totalPages, setTotalPages] = useState(0);

    const [fetchfilms, isfilmsLoading, filmError] = useFetching(async() => {
        const response = await FilmService.getBestFilms(limit, currentPage); // здесь уже запрос нужный на лучшие фильмы
        setfilms(response.data)
        const totalCount = response.data.total; // беру количество элементов из поля total
        setTotalPages(getPageCount(totalCount, limit))
    });
    let pagesArray = getPagesArray(currentPage, totalPages);

    useEffect(() => {
        fetchfilms();
    }, [currentPage]);

    const setPage = (page)=>setCurrentPage(page)
    return (
        <>
            <header className="header">
                <h1 className="header__h1">Кино справочник</h1>
            </header>
            <main>
            <section className="section">
                <h2 className="section__h2">Лучшие фильмы</h2>
                <div className="section__pagination">
                    <ul className="section__pagination-list">
                        {currentPage > 5 && currentPage <= totalPages && <Button currentPage={currentPage-1} onclick={setPage}>Влево</Button> }
                        {pagesArray.map((page) => <span onClick= {()=>setPage(page)} key={page} className={currentPage === page ? "section__page--active" : "section__page"}>{page}</span>)}
                        {currentPage < totalPages && <Button currentPage={currentPage+1} onclick={setPage}>Вправо</Button> }
                    </ul>
                </div>
                <div className="section__container">
                    {filmError && <h1>Произошла ошибка...</h1> }
                    {isfilmsLoading ? <span>Загрузка...</span> :
                    <FilmsList blockName={'section'} films={films.docs}/>}
                </div>
            </section>
            <section className='similar-section'>
                <h2 className="similar-section__h2">Похожие фильмы</h2>
                
            </section>
            </main>
        </>
    )
}

export default App

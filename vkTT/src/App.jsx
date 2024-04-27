import './App.css'
import {useState, useEffect} from 'react'
import FilmService from "./API/FilmService.js";
import Films from "./Films.jsx";
import useFetching from "./customHooks/useFetching.js";
import {getPageCount, getPagesArray} from "./utils/pages.js";
import Button from "./components/Button.jsx";
// import FilmModal from './components/filmModal/FilmModal.jsx';

function App() {
    const [films, setfilms] = useState([]);
    // const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [limit, setLimit] = useState(4);
    const [totalPages, setTotalPages] = useState(0);
    const [modalActive, setModalActive] = useState(false);

    const [fetchfilms, isfilmsLoading, filmError] = useFetching(async() => {
        const response = await FilmService.getBestFilms(limit, currentPage); // здесь уже запрос нужный на лучшие фильмы
        console.log('Данные 17 строка', response.data)
        setfilms(response.data)
        const totalCount = response.data.total; // беру количество элементов из поля total
        console.log('Количество элементов', response.data.total)
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
                    <Films blockName={'section'} films={films.docs}/>}
                </div>
            </section>
            {/* <FilmModal active={modalActive} setActive={setModalActive}/> */}
        </>
    )
}

export default App

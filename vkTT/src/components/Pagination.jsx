import Button from "./Button";

const Pagination = ({currentPage, totalPages, pagesArray, onclick, setPage}) => {
  return (
    
      <div className="section__pagination">
        <ul className="section__pagination-list">
          {currentPage > 5 && currentPage <= totalPages && (
            <Button currentPage={currentPage - 1} onclick={onclick}>
              Влево
            </Button>
          )}
          {pagesArray.map((page) => (
            <span
              onClick={() => setPage(page)}
              key={page}
              className={
                currentPage === page ? "section__page--active" : "section__page"
              }
            >
              {page}
            </span>
          ))}
          {currentPage < totalPages && (
            <Button currentPage={currentPage + 1} onclick={onclick}>
              Вправо
            </Button>
          )}
        </ul>
      </div>
    
  );
};

export default Pagination;

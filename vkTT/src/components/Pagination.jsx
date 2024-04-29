import Button from "./Button";
const Pagination = ({currentPage, totalPages, pagesArray, onclick, setPage}) => {
  return (
    
      <div className="section__pagination">
        <ul className="section__pagination-list">
          {currentPage > 5 && currentPage <= totalPages && (
            <li className="section__item">
            <Button blockName={"section"} currentPage={currentPage - 1} onclick={onclick}>
              <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 8L5 12M5 12L9 16M5 12H19" stroke="#000000" strokeWidth="2" strokeLinecap="round"></path> </g></svg>
            </Button></li>
          )}
          {pagesArray.map((page) => (
            <li key={page+200} className="section__item"> 
            <span
              onClick={() => setPage(page)}
              key={page}
              className={
                currentPage === page ? "section__page--active" : "section__page"
              }
            >
              {page}
            </span>
            </li>
          ))}
          {currentPage < totalPages && (
            <li className="section__item">
            <Button blockName={"section"} currentPage={currentPage + 1} onclick={onclick}>
              <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15 8L19 12M19 12L15 16M19 12H5" stroke="#000000" strokeWidth="2" strokeLinecap="round"></path> </g></svg>
            </Button></li>
          )}
        </ul>
      </div>
    
  );
};

export default Pagination;

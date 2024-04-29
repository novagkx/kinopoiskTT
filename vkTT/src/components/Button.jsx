const Button = ({children, onclick, currentPage, blockName}) => {
    return (
        <>
            <button className={blockName + "__btn"} onClick={()=>{onclick(currentPage)}}>{children}</button>
        </>
    );
};

export default Button;
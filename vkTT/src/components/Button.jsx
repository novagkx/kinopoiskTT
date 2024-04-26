const Button = ({children, onclick, currentPage}) => {
    return (
        <>
            <button onClick={()=>{onclick(currentPage)}}>{children}</button>
        </>
    );
};

export default Button;
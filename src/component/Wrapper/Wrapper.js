import '../GlobalStyle/style.scss'


function Wrapper({ children }) {
    return (
        <div className="Wrapper">
            {children}
        </div>
    );

}

export default Wrapper;
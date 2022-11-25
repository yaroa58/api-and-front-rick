import React from "react";

const Pagination = ({ prev, next, onPrevious, onNext }) => {

    // ejecucion de eventos pagina onnext and onprevous

    const handlePrevious = () => {
        onPrevious();
    }
    const handleNext = () => {
        onNext();
    }
    return (
        <nav className="my-5">
            <ul className="pagination justify-content-center">
                {
                    prev ? //mostrar botton prevous y hay info atras de pagina
                        <li className="page-item">
                            <button className="page-link" onClick={handlePrevious}>Prev</button>
                        </li>
                        :
                        null
                }
                {
                    next ?
                        <li className="page-item">
                            <button className="page-link" onClick={handleNext} >Next</button>
                        </li>
                        :
                        null
                }
            </ul>
        </nav>
    );
};
export default Pagination;
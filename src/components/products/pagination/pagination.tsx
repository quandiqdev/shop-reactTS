import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEllipsis} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {IPaginationProps} from "../../util/interfaces";

export default function Pagination({handleClick,pageNumbers,currentPage,totalPages}:IPaginationProps){
    return(
        <div className="pagination__area">

            <button className="pagination__btn" onClick={() => handleClick(currentPage - 1)}
                    disabled={currentPage === 1}>
                Prev
            </button>
            {pageNumbers.map((pageNumber) => {
                if (pageNumber === 1 || pageNumber === totalPages || (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)) {
                    return (
                        <button
                            className={`pagination__btn ? ${currentPage === pageNumber ? `pagination__btn-active` : ``} `}
                            key={pageNumber} onClick={() => handleClick(pageNumber)}
                            disabled={currentPage === pageNumber}>
                            {pageNumber}
                        </button>
                    );
                } else if (pageNumber === currentPage - 2 || pageNumber === currentPage + 2) {
                    return <button className="pagination__btn" key={pageNumber}><FontAwesomeIcon icon={faEllipsis}/>
                    </button>;
                } else {
                    return null;
                }
            })}
            <button className="pagination__btn" onClick={() => handleClick(currentPage + 1)}
                    disabled={currentPage === totalPages}>
                Next
            </button>
        </div>


    )
}
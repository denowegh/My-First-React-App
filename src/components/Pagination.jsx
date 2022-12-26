import React from "react";
import { usePagination } from "../hooks/usePagination";
const Pagination = ({ totalPages, page, cangePage }) => {
    let pagesArray = usePagination(totalPages);
    return (
        <div className="page__Wrapper">
            {pagesArray.map((e) => {
                return (
                    <span
                        onClick={() => cangePage(e)}
                        key={e}
                        className={e === page ? "page page__current" : "page"}
                    >
                        {e}
                    </span>
                );
            })}
        </div>
    );
};
export default Pagination;

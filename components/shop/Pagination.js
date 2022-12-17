import React, { FC, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import ReactPaginate from "react-paginate";

const Pagination = ({ setPage, pageCount }) => {
  const [isNext, setIsNext] = useState("nextStyle");
  const [isPrevious, setIsPrevious] = useState("isPrevious");
  const handlePageClick = (event) => {
    setPage(event.selected);
    if (event.selected === pageCount - 1) {
      setIsNext("");
    } else {
      setIsNext("nextStyle");
    }

    if (event.selected === 0) {
      setIsPrevious("");
    } else {
      setIsPrevious("nextStyle");
    }
  };

  return (
    <div style={{ boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)` }} id="pagination">
      <ReactPaginate
        previousLabel={<BsChevronLeft />}
        nextLabel={<BsChevronRight />}
        breakLabel="..."
        breakClassName={"break-me"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        containerClassName={"pagination"}
        activeClassName={"active"}
        renderOnZeroPageCount={null}
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName={isPrevious}
        previousLinkClassName="page-link"
        nextClassName={isNext}
        nextLinkClassName={isNext}
        breakLinkClassName="page-link"
      />
    </div>
  );
};

export default Pagination;

import React, { useState, useEffect } from "react";
import { UsePaginationProps, PaginationState } from "tw-react";

enum Bumpers {
  Left = "LEFT_BUMPER",
  Right = "RIGHT_BUMPER",
}

const usePagination = (props: UsePaginationProps) => {
  const { totalResults, resultsPerPage, initialPage, handlePageChange, pageRange } = props;
  const [paginationState, setPaginationState] = useState<PaginationState>({
    totalPages: 0,
    currentPage: 1,
  });
  const { totalPages, currentPage } = paginationState;

  useEffect(() => {
    const totalPages = Math.ceil(totalResults / resultsPerPage);
    const currentPage = initialPage || 1;
    setPaginationState({
      totalPages,
      currentPage,
    });
  }, [totalResults, resultsPerPage, initialPage]);

  const handlePageClick = (page: number) => {
    setPaginationState({ ...paginationState, currentPage: page });

    handlePageChange({
      resultsPerPage,
      pageRange,
      totalPages,
      currentPage: page,
    });
  };

  const advanceLeft = () => {
    if (currentPage > 1) {
      handlePageClick(currentPage - 1);
    }
  };

  const advanceRight = () => {
    if (currentPage < totalPages) {
      handlePageClick(currentPage + 1);
    }
  };

  const buildPageNumbers = () => {
    /**
     * totalNumbers: the total page numbers to show on the component (inlcude the constant first and last)
     * totalBlocks: totalNumbers + 2 to cover for the left(<) and right(>) controls
     */
    const totalNumbers = pageRange * 2 + 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
      let pages = [];
      const leftBound = currentPage - pageRange;
      const rightBound = currentPage + pageRange;

      if (leftBound < 3) {
        // Add some extra pages to the right side to fill the component
        const padding = 3 - leftBound;
        pages = [...range(2, rightBound + padding), Bumpers.Right];
      } else if (rightBound > totalPages - 2) {
        // Add some extra pages to the left side to fill the component
        const padding = totalPages - 2 - rightBound;
        pages = [Bumpers.Left, ...range(leftBound + padding, totalPages - 1)];
      } else {
        pages = [Bumpers.Left, ...range(leftBound, rightBound), Bumpers.Right];
      }

      return [1, ...pages, totalPages];
    }

    return range(1, totalPages);
  };

  return {
    totalResults,
    resultsPerPage,
    initialPage,
    handlePageChange,
    pageRange,
    totalPages,
    currentPage,
    handlePageClick,
    advanceLeft,
    advanceRight,
    buildPageNumbers,
    bumpers: Bumpers,
  };
};

export default usePagination;

function range(from, to, step = 1) {
  const returnedRange = [];
  for (let i = from; i <= to; i += step) returnedRange.push(i);
  return returnedRange;
}

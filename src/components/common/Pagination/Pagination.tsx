import React, { useEffect, useState } from "react";

import module from "@/components/common/Pagination/Pagination.module.css";

type PropsType = {
  totalPageCount: number;
  pageSize: number;
  currentPage: number;
  onPageChange: (pageNumber: number) => void;
  portionSize?: number;
};

export const Pagination: React.FC<PropsType> = ({
  totalPageCount,
  pageSize,
  currentPage,
  onPageChange,
  portionSize = 10,
}) => {
  const pagesCount = Math.ceil(totalPageCount / pageSize);
  const pages: Array<number> = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const portionCount = Math.ceil(pagesCount / portionSize);
  const [portionNumber, setPortionNumber] = useState<number>(1);
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionPageNumber = portionNumber * portionSize;

  useEffect(
    () => setPortionNumber(Math.ceil(currentPage / portionSize)),
    [currentPage, portionSize]
  );

  return (
    <div className={module.pagination}>
      {portionNumber > 1 && (
        <>
          <button
            className={
              currentPage === pages[0] ? module.currentPage : module.pageBtn
            }
            onClick={() => {
              onPageChange(pages[0]);
            }}
          >
            {pages[0]}
          </button>
          <span
            className={module.arrow}
            onClick={() => {
              setPortionNumber(portionNumber - 1);
            }}
          >
            &#129044;
          </span>
        </>
      )}
      {pages
        .filter(
          (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
        )
        .map((page, index) => {
          return (
            <button
              key={index}
              className={
                currentPage === page ? module.currentPage : module.pageBtn
              }
              onClick={() => {
                onPageChange(page);
              }}
            >
              {page}
            </button>
          );
        })}
      {portionCount > portionNumber && (
        <>
          <span
            className={module.arrow}
            onClick={() => {
              setPortionNumber(portionNumber + 1);
            }}
          >
            &#129046;
          </span>
          <button
            className={
              currentPage === pages.length ? module.currentPage : module.pageBtn
            }
            onClick={() => {
              onPageChange(pages.length);
            }}
          >
            {pages.length}
          </button>
        </>
      )}
    </div>
  );
};

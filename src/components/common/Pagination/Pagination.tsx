import React, { useEffect, useState } from "react";
import module from "./Pagination.module.css";

type PropsType = {
  totalPageCount: number;
  pageSize: number;
  currentPage: number;
  onPageChange: (arg0: number) => void;
  portionSize?: number;
};

export const Pagination: React.FC<PropsType> = ({
  totalPageCount,
  pageSize,
  currentPage,
  onPageChange,
  portionSize = 10,
}) => {
  let pagesCount = Math.ceil(totalPageCount / pageSize);
  let pages: Array<number> = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState<number>(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  useEffect(
    () => setPortionNumber(Math.ceil(currentPage / portionSize)),
    [currentPage]
  );

  return (
    <div className={module.pagination}>
      {portionNumber > 1 && (
        <span
          className={module.arrow}
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}
        >
          &#129044;
        </span>
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
        <span
          className={module.arrow}
          onClick={() => {
            setPortionNumber(portionNumber + 1);
          }}
        >
          &#129046;
        </span>
      )}
    </div>
  );
};

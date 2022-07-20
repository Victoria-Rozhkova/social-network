import React, { useEffect, useState } from 'react';
import module from './Pagination.module.css';

export const Pagination = ({ totalPageCount, pageSize, currentPage, onPageChange, portionSize = 10 }) => {
  let pagesCount = Math.ceil(totalPageCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  useEffect(() => setPortionNumber(Math.ceil(currentPage / portionSize)), [currentPage]);

  return (
    <div className={module.pagination}>
      {portionNumber > 1 &&
        <button className={module.arrow} onClick={() => { setPortionNumber(portionNumber - 1); }}>
          &#129044;</button>}
      {pages
        .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
        .map((page, index) => {
          return <button key={index} className={currentPage === page
            ? module.currentPage : module.pageBtn}
            onClick={() => { onPageChange(page); }}>{page}</button>;
        })}
      {portionCount > portionNumber &&
        <button className={module.arrow} onClick={() => { setPortionNumber(portionNumber + 1); }}>

          &#129046;</button>}
    </div>);
};
import React from 'react';
import module from '../Users.module.css';

export const Pagination = ({ totalPageCount, pages, currentPage, onPageChange }) => {
  let pagesCount = Math.ceil(totalPageCount / pages);
  let pagesArr = [];
  for (let i = 1; i <= pagesCount; i++) {
    pagesArr.push(i);
  }

  return <div className={module.pagination}>
    {pagesArr.map((page, index) => {
      return <button key={index} className={currentPage === page
        ? module.currentPage : module.pageBtn}
        onClick={() => { onPageChange(page); }}>{page}</button>;
    })}
  </div>;
};
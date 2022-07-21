import React from 'react';
import module from './Users.module.css';
import { Pagination } from '../common/Pagination/Pagination';
import { User } from './User';

export const Users = ({ users, followingInProgress, unfollow, follow, totalPageCount, pageSize, currentPage, onPageChange, portionSize }) => {
  return (
    <div>
      <div className={module.users}>
        {users.map(user => <User key={user.id} user={user} followingInProgress={followingInProgress} follow={follow} unfollow={unfollow} />)
        }</div >
      <Pagination totalPageCount={totalPageCount} pageSize={pageSize} currentPage={currentPage} onPageChange={onPageChange} portionSize={portionSize} />
    </div>
  );
};
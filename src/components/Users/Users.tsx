import React, { FC } from 'react';
import module from './Users.module.css';
import { Pagination } from '../common/Pagination/Pagination';
import { User } from './User';
import { UserType } from '../../types/types';

type PropsType = {
  users: Array<UserType>;
  followingInProgress: Array<number>;
  unfollow: (userId: number) => void;
  follow: (userId: number) => void;
  totalPageCount: number;
  pageSize: number;
  currentPage: number;
  onPageChange: (page:number) => void;
  portionSize: number;
};

export const Users: FC<PropsType>  = ({ users, followingInProgress, unfollow, follow, totalPageCount, pageSize, currentPage, onPageChange, portionSize }) => {
  return (
    <div>
      <div className={module.users}>
        {users.map(user => <User key={user.id} user={user} followingInProgress={followingInProgress} follow={follow} unfollow={unfollow} />)
        }</div >
      <Pagination totalPageCount={totalPageCount} pageSize={pageSize} currentPage={currentPage} onPageChange={onPageChange} portionSize={portionSize} />
    </div>
  );
};
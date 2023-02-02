import React, { FC } from "react";

import { UserType } from "@/types/types";
import { Pagination } from "@/components/common/Pagination/Pagination";
import { User } from "@/components/Users/User";
import { UsersSearchForm } from "@/components/Users/UsersSearchForm";
import { FilterType } from "@/redux/usersReduser";
import module from "@/components/Users/Users.module.css";

type PropsType = {
  users: Array<UserType>;
  followingInProgress: Array<number>;
  portionSize: number;
  isAuth: boolean;
  totalPageCount: number;
  pageSize: number;
  currentPage: number;
  filter: FilterType;
  unfollow: (userId: number) => void;
  follow: (userId: number) => void;
  onPageChange: (page: number) => void;
  onFilterChanged: (filter: FilterType) => void;
};

export const Users: FC<PropsType> = ({
  users,
  followingInProgress,
  unfollow,
  follow,
  totalPageCount,
  pageSize,
  currentPage,
  onPageChange,
  portionSize,
  isAuth,
  onFilterChanged,
  filter,
}) => {
  return (
    <div>
      <UsersSearchForm onFilterChanged={onFilterChanged} filter={filter} />
      <div className={module.users}>
        {users.map((user) => (
          <User
            isAuth={isAuth}
            key={user.id}
            user={user}
            followingInProgress={followingInProgress}
            follow={follow}
            unfollow={unfollow}
          />
        ))}
      </div>
      <Pagination
        totalPageCount={totalPageCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={onPageChange}
        portionSize={portionSize}
      />
    </div>
  );
};

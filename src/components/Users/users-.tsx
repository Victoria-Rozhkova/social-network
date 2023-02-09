import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

import { Pagination } from "@/components/common/Pagination/pagination";
import { User } from "@/components/Users/user";
import { UsersSearchForm } from "@/components/Users/users-search-form";
import { FilterType, getUsers } from "@/redux/usersReduser";
import {
  currentPageSelector,
  filterSelector,
  isLoadingSelector,
  pagesSelector,
  portionSizeSelector,
  totalPageCountSelector,
  usersSelector,
} from "@/redux/selectors/usersSelectors";
import { Preloader } from "@/components/common/Preloader/preloader";
import module from "@/components/Users/users.module.css";

type UrlParamsType = { term?: string; friend?: string; page?: string };

const Users: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = useSelector(currentPageSelector);
  const filter = useSelector(filterSelector);
  const isLoading = useSelector(isLoadingSelector);
  const users = useSelector(usersSelector);
  const pageSize = useSelector(pagesSelector);
  const totalPageCount = useSelector(totalPageCountSelector);
  const portionSize = useSelector(portionSizeSelector);
  const pages = 10;

  const dispatch = useDispatch();

  useEffect(() => {
    const urlParams: UrlParamsType = Object.fromEntries([...searchParams]);

    let actualPage = currentPage;
    let actualFilter = filter;

    if (urlParams.page) {
      actualPage = Number(urlParams.page);
    }
    if (urlParams.term) {
      actualFilter = { ...actualFilter, term: urlParams.term };
    }
    // преобразовываем свойство friend из строки в нужное значение
    switch (urlParams.friend) {
      case "null":
        actualFilter = { ...actualFilter, friend: null };
        break;
      case "true":
        actualFilter = { ...actualFilter, friend: true };
        break;
      case "false":
        actualFilter = { ...actualFilter, friend: false };
        break;
    }
    dispatch(getUsers(actualPage, pages, actualFilter) as any);
  }, [searchParams, dispatch]);

  useEffect(() => {
    const params: UrlParamsType = {};
    if (filter.term !== "") params.term = filter.term;
    if (filter.friend !== null) {
      params.friend = filter.friend.toString();
    }
    if (currentPage !== 1) params.page = currentPage.toString();
    // в url будут отображаться только те параметры, которые не по умолчанию
    const queryString =
      "?" +
      Object.keys(params)
        .map((key) => key + "=" + params[key as keyof UrlParamsType])
        .join("&");
    // в url будут отображаться все параметры поиска
    // const query = `?term=${props.filter.term}&friend=${props.filter.friend}&page=${props.currentPage}`;
    setSearchParams(queryString);
  }, [filter, currentPage, setSearchParams]);

  const onPageChange = (page: number) => {
    dispatch(getUsers(page, pages, filter) as any);
  };
  const onFilterChanged = (filter: FilterType) => {
    dispatch(getUsers(1, pages, filter) as any);
  };

  if (isLoading) return <Preloader />;

  return (
    <div>
      <UsersSearchForm onFilterChanged={onFilterChanged} filter={filter} />
      <div className={module.users}>
        {users.map((user) => (
          <User key={user.id} user={user} />
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

export default Users;

import { GetItemsType, instanse, APIResponseType } from "./api";

export const UsersAPI = {
  getUsers(
    currentPage: number = 1,
    pages: number = 10,
    term: string = "",
    friend: null | boolean = null
  ) {
    return instanse
      .get<GetItemsType>(
        `users?page=${currentPage}&count=${pages}&term=${term}` +
          (friend === null ? "" : `&friend=${friend}`)
      )
      .then((res) => res.data);
  },
  unfollowUser(id: number) {
    return instanse
      .delete<APIResponseType>(`follow/${id}`)
      .then((res) => res.data);
  },
  followUser(id: number) {
    return instanse
      .post<APIResponseType>(`follow/${id}`)
      .then((res) => res.data);
  },
};

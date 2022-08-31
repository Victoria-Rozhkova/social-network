import { GetItemsType, instanse, APIResponseType } from "./api";

export const UsersAPI = {
  getUsers(currentPage: number, pages: number) {
    return instanse
      .get<GetItemsType>(`users?page=${currentPage}&count=${pages}`)
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

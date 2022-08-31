import { ProfileType } from "./../types/types";
import axios from "axios";

const instanse = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: { "API-KEY": "f4b9c198-7716-4319-b2ac-5f5fc35e722e" },
});

export enum ResultCodesEnum {
  Succses = 0,
  Error = 1,
  CaptchaIsRequired = 10,
}

type MeResponseType = {
  data: { id: number; email: string; login: string };
  resultCode: ResultCodesEnum;
  messages: Array<string>;
};
type LoginResponseType = {
  data: { userId: number };
  resultCode: ResultCodesEnum;
  messages: Array<string>;
};

export const UsersAxios = {
  getUsers(currentPage: number, pages: number) {
    return instanse
      .get(`users?page=${currentPage}&count=${pages}`)
      .then((response) => response.data);
  },
  getAuthUser() {
    return instanse
      .get<MeResponseType>(`auth/me`)
      .then((response) => response.data);
  },
  unfollowUser(id: number) {
    return instanse.delete(`follow/${id}`).then((response) => response.data);
  },
  followUser(id: number) {
    return instanse.post(`follow/${id}`).then((response) => response.data);
  },
  login(
    email: string,
    password: string,
    rememberMe = false,
    captcha: null | string = null
  ) {
    return instanse
      .post<LoginResponseType>(`auth/login`, {
        email,
        password,
        rememberMe,
        captcha,
      })
      .then((response) => response.data);
  },
  logout() {
    return instanse.delete(`auth/login`).then((response) => response.data);
  },
};
export const ProfileAxios = {
  getProfiles(id: number) {
    return instanse.get(`profile/${id}`).then((response) => response.data);
  },
  getStatus(id: number) {
    return instanse
      .get(`profile/status/${id}`)
      .then((response) => response.data);
  },
  updateStatus(status: string) {
    return instanse
      .put(`profile/status`, { status: status })
      .then((response) => response.data);
  },
  savePhoto(file:any) {
    const formData = new FormData();
    formData.append("image", file);
    return instanse
      .put(`profile/photo`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => response.data);
  },
  saveProfile(profile: ProfileType) {
    return instanse.put(`profile`, profile).then((response) => response.data);
  },
};
export const SecurityAxios = {
  getCaptchaUrl() {
    return instanse
      .get(`security/get-captcha-url`)
      .then((response) => response.data);
  },
};

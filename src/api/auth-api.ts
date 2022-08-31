import { instanse, APIResponseType } from "./api";

type MeResponseDataType = {
  id: number;
  email: string;
  login: string;
};
type LoginResponseDataType = {
  userId: number;
};

export const AuthAPI = {
  me() {
    return instanse
      .get<APIResponseType<MeResponseDataType>>(`auth/me`)
      .then((res) => res.data);
  },
  login(
    email: string,
    password: string,
    rememberMe = false,
    captcha: null | string = null
  ) {
    return instanse
      .post<APIResponseType<LoginResponseDataType>>(`auth/login`, {
        email,
        password,
        rememberMe,
        captcha,
      })
      .then((res) => res.data);
  },
  logout() {
    return instanse.delete(`auth/login`).then((res) => res.data);
  },
};

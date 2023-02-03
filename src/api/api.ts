import axios from "axios";

import { UserType } from "@/types/types";

export const instanse = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: { "API-KEY": "f4b9c198-7716-4319-b2ac-5f5fc35e722e" },
});

export enum ResultCodesEnum {
  Succses = 0,
  Error = 1,
  CaptchaIsRequired = 10,
}

export type GetItemsType = {
  items: Array<UserType>;
  totalCount: number;
  error: string | null;
};

export type APIResponseType<D = {}, RC = ResultCodesEnum> = {
  data: D;
  resultCode: RC;
  messages: Array<string>;
};

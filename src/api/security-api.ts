import { instanse } from "./api";

type GetCaptchaUrlResponseType = {
  url: string;
};

export const SecurityAPI = {
  getCaptchaUrl() {
    return instanse
      .get<GetCaptchaUrlResponseType>(`security/get-captcha-url`)
      .then((response) => response.data);
  },
};

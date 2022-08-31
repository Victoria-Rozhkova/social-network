import { PhotosType, ProfileType } from "../types/types";
import { instanse, APIResponseType } from "./api";

type SavePhotoResponseDataType = {
  photos: PhotosType;
};

export const ProfileAPI = {
  getProfiles(id: number) {
    return instanse.get<ProfileType>(`profile/${id}`).then((res) => res.data);
  },
  getStatus(id: number) {
    return instanse.get<string>(`profile/status/${id}`).then((res) => res.data);
  },
  updateStatus(status: string) {
    return instanse
      .put<APIResponseType>(`profile/status`, { status: status })
      .then((res) => res.data);
  },
  savePhoto(file: any) {
    const formData = new FormData();
    formData.append("image", file);
    return instanse
      .put<APIResponseType<SavePhotoResponseDataType>>(
        `profile/photo`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => res.data);
  },
  saveProfile(profile: ProfileType) {
    return instanse
      .put<APIResponseType>(`profile`, profile)
      .then((res) => res.data);
  },
};

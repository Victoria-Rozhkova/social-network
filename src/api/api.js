import axios from "axios";

const instanse = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: { "API-KEY": "f4b9c198-7716-4319-b2ac-5f5fc35e722e" },
});

export const UsersAxios = {
  getUsers(currentPage, pages) {
    return instanse
      .get(`users?page=${currentPage}&count=${pages}`)
      .then((response) => response.data);
  },
  getAuthUser() {
    return instanse.get(`auth/me`).then((response) => response.data);
  },
  unfollowUser(id) {
    return instanse.delete(`follow/${id}`).then((response) => response.data);
  },
  followUser(id) {
    return instanse.post(`follow/${id}`).then((response) => response.data);
  },
  login(email, password, rememberMe = false) {
    return instanse
      .post(`auth/login`, { email, password, rememberMe })
      .then((response) => response.data);
  },
  logout() {
    return instanse.delete(`auth/login`).then((response) => response.data);
  },
};
export const ProfileAxios = {
  getProfiles(id) {
    return instanse.get(`profile/${id}`).then((response) => response.data);
  },
  getStatus(id) {
    return instanse
      .get(`profile/status/${id}`)
      .then((response) => response.data);
  },
  updateStatus(status) {
    return instanse
      .put(`profile/status`, { status: status })
      .then((response) => response.data);
  },
  savePhoto(file) {
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
  saveProfile(profile) {
    return instanse.put(`profile`, profile).then((response) => response.data);
  },
};

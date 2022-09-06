import React, { FC } from "react";
import { ProfileType } from "src/types/types";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import module from "./Profile.module.css";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

type PropsType = {
  profile: ProfileType | null;
  status: string;
  isOwner: boolean;
  isAuth: boolean;
  updateStatus: (status: string) => void;
  savePhoto: (file: File) => void;
  updateProfile: (profile: ProfileType) => Promise<any>;
};

export const Profile: FC<PropsType> = ({
  profile,
  status,
  updateStatus,
  isOwner,
  savePhoto,
  updateProfile,
}) => {
  // if (props.isAuth) {
  return (
    <div className={module.content}>
      <ProfileInfo
        profile={profile}
        status={status}
        updateStatus={updateStatus}
        isOwner={isOwner}
        savePhoto={savePhoto}
        updateProfile={updateProfile}
      />
      <MyPostsContainer />
    </div>
  );
};
// else {
//    <Navigate to="/login" />;
// }
//};

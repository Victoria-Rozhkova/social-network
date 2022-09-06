import React, { FC } from "react";
import module from "./ProfileInfo.module.css";
import img from "../img/profileImg.png";
import userPhoto from "../../../assets/images/user.png";
import { Preloader } from "../../common/Preloader/Preloader";
import { UploadFile } from "../../common/UploadFile/UploadFile";
import { ProfileAbout } from "./ProfileAbout/ProfileAbout";
import { useState } from "react";
import { ProfileAboutReduxForm } from "./ProfileAboutForm/ProfileAboutForm";
import { ProfileType } from "src/types/types";

type PropsTypes = {
  profile: ProfileType | null;
  status: string;
  isOwner: boolean;
  updateStatus: (status: string) => void;
  savePhoto: (file: File) => void;
  updateProfile: (profile: ProfileType) => Promise<any>;
};

export const ProfileInfo: FC<PropsTypes> = ({
  profile,
  status,
  updateStatus,
  isOwner,
  savePhoto,
  updateProfile,
}) => {
  const [editMode, setEditMode] = useState(false);

  if (profile === null) {
    return <Preloader />;
  }
  const toEdit = () => {
    setEditMode(true);
  };
  const onSubmit = (formData: ProfileType) => {
    if (formData) {
      updateProfile(formData).then(() => {
        setEditMode(false);
      });
    }
  };

  return (
    <div>
      <div className={module.profileImage}>
        <img src={img} alt="img" />
      </div>
      <div className={module.profileInfo}>
        <div className={module.mainPhoto}>
          <label htmlFor="file">
            <img
              src={
                profile.photos.large == null ? userPhoto : profile.photos.large
              }
              alt="avatar"
            />
          </label>
          {isOwner && <UploadFile callback={savePhoto} text="Update photo" />}
        </div>
        {editMode && (
          <ProfileAboutReduxForm
            onSubmit={onSubmit}
            profile={profile}
            initialValues={profile}
          />
        )}
        {!editMode && (
          <ProfileAbout
            profile={profile}
            isOwner={isOwner}
            status={status}
            updateStatus={updateStatus}
            goToEditMode={toEdit}
          />
        )}
      </div>
    </div>
  );
};

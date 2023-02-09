import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import img from "@/assets/images/profileImg.png";
import userPhoto from "@/assets/images/user.png";
import { Preloader } from "@/components/common/preloader/preloader";
import { UploadFile } from "@/components/common/uploadFile/upload-file";
import { ProfileAbout } from "@/components/Profile/profile-about";
import { ProfileAboutReduxForm } from "@/components/Profile/profile-about-form";
import { ProfileType } from "@/types/types";
import { profileSelector } from "@/redux/selectors/profile.selectors";
import {
  actionsProfile,
  savePhoto,
  updateProfile,
} from "@/redux/profile.reducer";
import module from "@/components/Profile/profile-info.module.css";

type PropsTypes = {
  isOwner: boolean;
};

export const ProfileInfo: FC<PropsTypes> = ({ isOwner }) => {
  const [editMode, setEditMode] = useState(false);

  const profile = useSelector(profileSelector);

  const dispatch = useDispatch();

  const toEdit = () => {
    setEditMode(true);
  };

  const onSubmit = (formData: ProfileType) => {
    if (formData) {
      dispatch(updateProfile(formData) as any).then(() => {
        setEditMode(false);
      });
    }
  };

  useEffect(() => {
    return () => {
      dispatch(actionsProfile.setUserProfile(null));
    };
  }, []);

  if (profile === null) {
    return <Preloader />;
  }

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
          <ProfileAboutReduxForm onSubmit={onSubmit} initialValues={profile} />
        )}
        {!editMode && <ProfileAbout isOwner={isOwner} goToEditMode={toEdit} />}
      </div>
    </div>
  );
};

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
import { useDispatch, useSelector } from "react-redux";
import { profileSelector } from "src/redux/selectors/profileSelectors";
import { savePhoto, updateProfile } from "src/redux/profileReduser";

type PropsTypes = {
  isOwner: boolean;
};

export const ProfileInfo: FC<PropsTypes> = ({ isOwner}) => {
  const [editMode, setEditMode] = useState(false);

  const profile = useSelector(profileSelector);

  const dispatch = useDispatch();

  if (profile === null) {
    return <Preloader />;
  }
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
        {!editMode && (
          <ProfileAbout
            isOwner={isOwner}
            goToEditMode={toEdit}
          />
        )}
      </div>
    </div>
  );
};

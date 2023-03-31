import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import img from "@/assets/images/profileImg.png";
import userPhoto from "@/assets/images/user.png";
import { Preloader } from "@/components/common/preloader/preloader";
import { UploadFile } from "@/components/common/uploadFile/upload-file";
import { ProfileAbout } from "@/components/profile/profile-about";
import ProfileAboutForm from "@/components/profile/profile-about-form";
import { profileSelector } from "@/redux/selectors/profile.selectors";
import { actionsProfile, savePhoto } from "@/redux/profile.reducer";
import module from "@/components/profile/profile-info.module.css";

type PropsTypes = {
  isOwner: boolean;
  editMode: boolean;
  setEditMode: (b: boolean) => void;
};

export const ProfileInfo: FC<PropsTypes> = ({
  isOwner,
  editMode,
  setEditMode,
}) => {
  const profile = useSelector(profileSelector);

  const dispatch = useDispatch();

  const toEdit = () => {
    setEditMode(true);
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
                profile?.photos && profile.photos.large === null
                  ? userPhoto
                  : profile?.photos?.large
              }
              alt="avatar"
            />
          </label>
          {isOwner && <UploadFile callback={savePhoto} text="Update photo" />}
        </div>
        {editMode && <ProfileAboutForm setEditMode={setEditMode} />}
        {!editMode && <ProfileAbout isOwner={isOwner} goToEditMode={toEdit} />}
      </div>
    </div>
  );
};

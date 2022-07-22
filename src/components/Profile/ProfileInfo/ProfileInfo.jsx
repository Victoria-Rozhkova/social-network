import React from 'react';
import module from './ProfileInfo.module.css';
import img from '../img/profileImg.png';
import userPhoto from '../../../assets/images/user.png';
import { Preloader } from '../../common/Preloader/Preloader';
import { UploadFile } from '../../common/UploadFile/UploadFile';
import { ProfileAbout } from './ProfileAbout/ProfileAbout';
import { useState } from 'react';
import { ProfileAboutReduxForm } from './ProfileAboutForm/ProfileAboutForm';

export const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
  const [editMode, setEditMode] = useState(false);

  if (profile === null) {
    return <Preloader />;
  }
  const onEdit = () => {
    setEditMode(true);
  };
  const onSubmit = (formData) => {
    setEditMode(false);
  };

  return (
    <div>
      <div className={module.profileImage}>
        <img src={img} alt="img" />
      </div>
      <div className={module.profileInfo}>
        <div className={module.mainPhoto}>
          <label for="file"><img src={profile.photos.large == null
            ? userPhoto
            : profile.photos.large} alt="avatar" /></label>
          {isOwner && <UploadFile savePhoto={savePhoto} />}
        </div>
        {editMode && <ProfileAboutReduxForm isOwner={isOwner} onSubmit={onSubmit} />}
        {!editMode && <ProfileAbout profile={profile} status={status} updateStatus={updateStatus} onEdit={onEdit} />}
      </div>
    </div >
  );
};
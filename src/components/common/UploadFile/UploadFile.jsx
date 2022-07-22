import React from "react";
import module from './UploadFile.module.css';

export const UploadFile = (savePhoto) => {
  const onSavePhoto = (e) => {
    if (e.target.files.length) {
      savePhoto.savePhoto(e.target.files[0]);
    }
  };

  return <div className={module.inputWrapper}>
    <input className={module.uploadPhoto} type="file" name="file" id="file" onChange={onSavePhoto} />
    <label for="file">Обновить фото</label>
  </div>;
};
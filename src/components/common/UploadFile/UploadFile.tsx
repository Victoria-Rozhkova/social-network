import React, { ChangeEvent, FC } from "react";
import { useDispatch } from "react-redux";

import module from "./UploadFile.module.css";

type PropsTypes = {
  text: string;
  callback: (file: File) => void;
};

export const UploadFile: FC<PropsTypes> = ({ callback, text }) => {
  const dispatch = useDispatch();

  const onSavePhoto = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      dispatch(callback(e.target.files[0]) as any);
    }
  };

  return (
    <div className={module.inputWrapper}>
      <input
        className={module.uploadPhoto}
        type="file"
        name="file"
        id="file"
        onChange={onSavePhoto}
      />
      <label htmlFor="file">{text}</label>
    </div>
  );
};

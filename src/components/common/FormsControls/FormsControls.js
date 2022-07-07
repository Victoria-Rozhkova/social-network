import React from "react";
import style from "./FormControls.module.css";

export const Input = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={style.formControl + " " + (hasError && style.error)}>
      <input {...input} {...props} />
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};

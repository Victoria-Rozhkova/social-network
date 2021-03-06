import React from "react";
import { Field } from "redux-form";
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

export const TextArea = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={style.formControl + " " + (hasError && style.error)}>
      <textarea {...input} {...props} />
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};

export const createFieldForm = (
  name,
  className,
  validate,
  type,
  placeholder,
  component
) => (
  <div>
    <Field
      name={name}
      className={className}
      validate={validate}
      type={type}
      placeholder={placeholder}
      component={component}
    />
  </div>
);

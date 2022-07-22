import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { createFieldForm, Input, TextArea } from '../../../common/FormsControls/FormsControls';
import module from './ProfileAboutForm.module.css';

const ProfileAboutForm = ({ isOwner, handleSubmit }) => {

  return (
    <form className={module.editProfileForm} onSubmit={handleSubmit}>
      <div className={module.formWrapper}>
        <b>FullName:</b>{createFieldForm("fullName", module.fullname, [], "text", "FullName", Input)}
        <label htmlFor="lookingForAJob"><Field name="lookingForAJob" type="checkbox" id="lookingForAJob" component="input" /> Looking for a job </label>
        {createFieldForm("lookingForAJobDescription", module.fullname, [], "text", "lookingForAJobDescription", TextArea)}
        <b>About me:</b>{createFieldForm("AboutMe", module.about, [], "text", "About Me", TextArea)}
      </div>
      <div>{isOwner && <button>Save</button>}</div>
    </form >
  );
};

export const ProfileAboutReduxForm = reduxForm({
  form: 'edit-profile',
})(ProfileAboutForm);
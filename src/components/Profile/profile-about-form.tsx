import React from "react";
import { useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";

import { profileSelector } from "@/redux/selectors/profileSelectors";
import {
  createFieldForm,
  Input,
  TextArea,
} from "@/components/common/FormsControls/FormsControls";
import module from "@/components/Profile/profile-about-form.module.css";
import style from "@/components/common/FormsControls/FormControls.module.css";

const ProfileAboutForm: any = ({ handleSubmit, error, initialValues }: any) => {
  const profile = useSelector(profileSelector);

  return (
    <form className={module.editProfileForm} onSubmit={handleSubmit}>
      <div className={module.formWrapper}>
        {error && <div className={style.errorSummary}>{error}</div>}
        <b>FullName:</b>
        {createFieldForm(
          "fullName",
          module.fullname,
          [],
          "text",
          "FullName",
          Input
        )}
        <label htmlFor="lookingForAJob">
          <b>Looking for a job </b>
          <Field
            name="lookingForAJob"
            type="checkbox"
            id="lookingForAJob"
            component="input"
          />{" "}
        </label>
        <b>My professional skills:</b>{" "}
        {createFieldForm(
          "lookingForAJobDescription",
          module.fullname,
          [],
          "text",
          "Write your skills...",
          TextArea
        )}
        <b>About me:</b>
        {createFieldForm(
          "aboutMe",
          module.about,
          [],
          "text",
          "About me...",
          TextArea
        )}
        <b>Contacts:</b>
        <div className={module.contacts}>
          {profile &&
            Object.keys(profile.contacts).map((key) => {
              return (
                <div key={key}>
                  {" "}
                  <b>{key}:</b>{" "}
                  {createFieldForm(
                    "contacts." + key,
                    module.fullname,
                    [],
                    "url",
                    key,
                    Input
                  )}{" "}
                </div>
              );
            })}
        </div>
      </div>
      <div>
        <button className={module.saveBtn}>Save</button>
      </div>
    </form>
  );
};

export const ProfileAboutReduxForm: any = reduxForm({
  form: "edit-profile",
  enableReinitialize: true,
  destroyOnUnmount: false,
})(ProfileAboutForm);

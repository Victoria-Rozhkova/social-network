import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Field, Form, Formik } from "formik";

import {
  errorSelector,
  profileSelector,
} from "@/redux/selectors/profile.selectors";

import module from "@/components/Profile/profile-about-form.module.css";
import style from "@/components/common/FormsControls/FormControls.module.css";
import { updateProfile } from "@/redux/profile.reducer";

type Propstype = {
  setEditMode: (n: boolean) => void;
};

const ProfileAboutForm: FC<Propstype> = ({ setEditMode }) => {
  const profile = useSelector(profileSelector);
  const error = useSelector(errorSelector);
  const dispatch = useDispatch();

  const onSubmit = (
    values: any,
    { setSubmitting }: { setSubmitting: (b: boolean) => void }
  ) => {
    setTimeout(() => {
      if (values) {
        dispatch(updateProfile(values) as any).then(() => {
          setEditMode(false);
        });
      }
      setSubmitting(false);
    }, 400);
  };
  return (
    <Formik
      initialValues={{
        fullName: profile?.fullName || "",
        lookingForAJob: profile?.lookingForAJob || false,
        lookingForAJobDescription: profile?.lookingForAJobDescription || "",
        aboutMe: profile?.aboutMe || "",
        contacts: {
          vk: profile?.contacts.vk || "",
          twitter: profile?.contacts.twitter || "",
          website: profile?.contacts.website || "",
          github: profile?.contacts.github || "",
          mainLink: profile?.contacts.mainLink || "",
          youtube: profile?.contacts.youtube || "",
          facebook: "",
          instagram: "",
        },
      }}
      enableReinitialize
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={module.editProfileForm}>
          <div className={module.formWrapper}>
            {error && <div className={style.errorSummary}>{error}</div>}
            <label htmlFor="fullName">
              <b>FullName:</b>
            </label>
            <Field
              className={module.fullname}
              id="fullName"
              name="fullName"
              placeholder="fullName"
            />
            <label htmlFor="lookingForAJob">
              <b>Looking for a job </b>
            </label>
            <Field id="lookingForAJob" name="lookingForAJob" type="checkbox" />
            <label htmlFor="lookingForAJobDescription">
              <b>My professional skills:</b>
            </label>
            <Field
              className={module.fullname}
              id="lookingForAJobDescription"
              as="textarea"
              name="lookingForAJobDescription"
              placeholder="Write your skills..."
            />
            <label htmlFor="aboutMe">
              <b>About me:</b>
            </label>
            <Field
              className={module.fullname}
              id="aboutMe"
              as="textarea"
              name="aboutMe"
              placeholder="About me..."
            />
            <b>Contacts:</b>
            <div className={module.contacts}>
              {profile &&
                Object.keys(profile.contacts).map((key) => {
                  return (
                    <div key={key} className={module.contact}>
                      <b>{key}:</b>
                      <Field
                        className={module.fullname}
                        id="contacts"
                        type="url"
                        name={`contacts.${key}`}
                        placeholder={key}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
          <div>
            <button
              className={module.saveBtn}
              type="submit"
              disabled={isSubmitting}
            >
              Save
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ProfileAboutForm;

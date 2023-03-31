import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { Field, Form, Formik } from "formik";

import { actionsProfile } from "@/redux/profile.reducer";
import module from "@/components/profile/posts/my-posts-form.module.css";

export const MyPostForm: FC = () => {
  const dispatch = useDispatch();

  const onSubmit = (
    values: { post: string },
    { setSubmitting }: { setSubmitting: (b: boolean) => void }
  ) => {
    setTimeout(() => {
      if (values) {
        dispatch(actionsProfile.addPost(values.post));
        values.post = "";
      }
      setSubmitting(false);
    }, 400);
  };
  return (
    <Formik
      initialValues={{
        post: "",
      }}
      enableReinitialize
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={module.form}>
          <Field
            className={module.field}
            as="textarea"
            name="post"
            placeholder="New post..."
          />
          <button
            className={module.button}
            type="submit"
            disabled={isSubmitting}
          >
            New post
          </button>
        </Form>
      )}
    </Formik>
  );
};

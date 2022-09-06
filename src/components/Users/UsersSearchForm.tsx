import React, { FC } from "react";
import style from "./Users.module.css";
import { Formik, Form, Field } from "formik";
import { FilterType } from "src/redux/usersReduser";

type PropsTypes = {
  filter: FilterType;
  onFilterChanged: (filter: FilterType) => void;
};

export const UsersSearchForm: FC<PropsTypes> = React.memo(
  ({ onFilterChanged, filter }) => {
    const submit = (
      values: any,
      { setSubmitting }: { setSubmitting: (isSubmit: boolean) => void }
    ) => {
      setSubmitting(false);
      const filter: FilterType = {
        term: values.term,
        friend:
          values.friend === "null"
            ? null
            : values.friend === "true"
            ? true
            : false,
      };
      onFilterChanged(filter);
    };

    return (
      <div className={style.usersSearch}>
        <Formik
          initialValues={{ term: filter.term, friend: filter.friend }}
          validate={(values) => {
            const errors = {};
            return errors;
          }}
          onSubmit={submit}
        >
          {({ isSubmitting }) => (
            <Form className={style.form}>
              <Field className={style.textField} type="text" name="term" />
              <Field name="friend" as="select">
                <option value="null">All</option>
                <option value="true">Only followed</option>
                <option value="false">Only unfollowed</option>
              </Field>
              <button type="submit" disabled={isSubmitting}>
                Find
              </button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
);

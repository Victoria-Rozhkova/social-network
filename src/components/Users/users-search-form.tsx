import React, { FC } from "react";
import { Formik, Form, Field } from "formik";

import { FilterType } from "@/redux/usersReduser";
import style from "@/components/Users/users.module.css";

type PropsTypes = {
  filter: FilterType;
  onFilterChanged: (filter: FilterType) => void;
};

type FormType = {
  term: string;
  friend: string;
};

export const UsersSearchForm: FC<PropsTypes> = React.memo(
  ({ onFilterChanged, filter }) => {
    const submit = (
      values: FormType,
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
          enableReinitialize
          initialValues={{
            term: filter.term,
            friend: String(filter.friend),
          }}
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

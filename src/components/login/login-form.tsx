import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Field, Form, Formik } from "formik";

import { login } from "@/redux/auth.reducer";
import module from "@/components/login/login.module.css";
import style from "@/components/common/FormsControls/FormControls.module.css";

import {
  captchaSelector,
  errorSelector,
} from "@/redux/selectors/auth.selectors";

export const LoginForm: FC = () => {
  const error = useSelector(errorSelector);
  const captchaUrl = useSelector(captchaSelector);

  const dispatch = useDispatch();

  const submit = (
    values: any,
    { setSubmitting }: { setSubmitting: (isSubmit: boolean) => void }
  ) => {
    setSubmitting(false);
    dispatch(
      login(
        values.email,
        values.password,
        values.remember,
        values.captcha || null
      ) as any
    );
  };
  return (
    <Formik
      enableReinitialize
      initialValues={{
        email: "",
        password: "",
        captcha: "",
      }}
      validate={(values) => {
        const errors = {};
        return errors;
      }}
      onSubmit={submit}
    >
      {({ isSubmitting, errors }) => (
        <Form className={style.form}>
          <div className={module.inputBox}>
            <Field
              className={module.input}
              type="text"
              name="email"
              placeholder="email"
            />
            <Field
              className={module.input}
              type="password"
              name="password"
              placeholder="password"
            />
            <div className={module.check}>
              <label>
                <Field
                  className={style.textField}
                  type="checkbox"
                  name="remember"
                />{" "}
                remember me
              </label>
            </div>

            {captchaUrl && (
              <div className={module.captcha}>
                <img src={captchaUrl} alt="captcha" />
                <Field
                  className={style.textField}
                  type="text"
                  name="captcha"
                  placeholder="Symbols in image"
                />
              </div>
            )}
            {error && <div className={style.errorSummary}>{error}</div>}
            <button
              className={module.btn}
              type="submit"
              disabled={isSubmitting}
            >
              Sign in
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

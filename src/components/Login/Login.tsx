import React, { FC } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { login } from "../../redux/authReduser";
import module from "./Login.module.css";
import style from "../common/FormsControls/FormControls.module.css";
import { AppStateType } from "../../redux/store-redux";
import { Field, Form, Formik } from "formik";
import { errorSelector } from "src/redux/selectors/authSelectors";

type PropsTypes = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType;
type OwnPropsType = {
  login: (
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string | null
  ) => void;
  captchaUrl: string;
};

export const Login: FC<PropsTypes> = ({ login, isAuth, captchaUrl }) => {
  console.log("Login");
  // const onSubmit = (formData: LoginFormValuesType) => {
  //   login(
  //     formData.email,
  //     formData.password,
  //     formData.rememberMe,
  //     formData.captcha
  //   );
  // };

  if (isAuth) {
    console.log("isAuth");
    return <Navigate to="/profile" />;
  } else {
    console.log("!isAuth");
    return (
      <div className={module.loginWrapper}>
        <h2 className={module.heading}>Login</h2>
        <LoginForm login={login} captchaUrl={captchaUrl} />
      </div>
    );
  }
};

const LoginForm: FC<OwnPropsType> = ({ captchaUrl, login }) => {
  console.log("LoginForm");

  const error = useSelector(errorSelector);

  const submit = (
    values: any,
    { setSubmitting }: { setSubmitting: (isSubmit: boolean) => void }
  ) => {
    setSubmitting(false);
    login(
      values.email,
      values.password,
      values.remember,
      values.captcha || null
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

type MapStateToPropsType = {
  isAuth: boolean;
  captchaUrl: string | null;
};
type MapDispatchToPropsType = {
  login: (
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string | null
  ) => void;
};
type LoginFormValuesType = {
  email: string;
  password: string;
  rememberMe: boolean;
  captcha: string | null;
};

// const LoginReduxForm: any = reduxForm({
//   form: "login",
// })(LoginForm as any);

const MapStateToProps = (state: AppStateType): MapStateToPropsType => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl,
});

export const LoginContainer = connect(MapStateToProps, { login })(Login as any);

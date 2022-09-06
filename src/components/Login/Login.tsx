import React, { FC } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { Field, reduxForm, InjectedFormProps } from "redux-form";
import { login } from "../../redux/authReduser";
import { email, minLength, required } from "../../utils/validators/validators";
import { Input, createFieldForm } from "../common/FormsControls/FormsControls";
import module from "./Login.module.css";
import style from "../common/FormsControls/FormControls.module.css";
import { AppStateType } from "../../redux/store-redux";

type PropsTypes = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType;
type OwnPropsType = {
  captchaUrl: string;
};

export const Login: FC<PropsTypes> = ({ login, isAuth, captchaUrl }) => {
  const onSubmit = (formData: LoginFormValuesType) => {
    login(
      formData.email,
      formData.password,
      formData.rememberMe,
      formData.captcha
    );
  };

  if (isAuth) {
    return <Navigate to="/profile" />;
  } else {
    return (
      <div className={module.loginWrapper}>
        <h2 className={module.heading}>Login</h2>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
      </div>
    );
  }
};

export const LoginForm: FC<
  InjectedFormProps<LoginFormValuesType> & OwnPropsType
> = ({ handleSubmit, error, captchaUrl }) => {
  const minLength5 = minLength(5);
  return (
    <form onSubmit={handleSubmit} className={module.inputBox}>
      {createFieldForm(
        "email",
        module.input,
        [required, email],
        "email",
        "email",
        Input
      )}
      {createFieldForm(
        "password",
        module.input,
        [required, minLength5],
        "password",
        "password",
        Input
      )}
      <div className={module.check}>
        <label htmlFor="remember">
          <Field
            name="rememberMe"
            type="checkbox"
            id="remember"
            component="input"
          />{" "}
          remember me
        </label>
      </div>
      {captchaUrl && (
        <div className={module.captcha}>
          <img src={captchaUrl} alt="captcha" />
          {createFieldForm(
            "captcha",
            module.captchaInput,
            [required],
            "text",
            "Symbols in image",
            Input
          )}
        </div>
      )}
      {error && <div className={style.errorSummary}>{error}</div>}
      <button className={module.btn} type="submit">
        Sign in
      </button>
    </form>
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

const LoginReduxForm: any = reduxForm({
  form: "login",
})(LoginForm);

const MapStateToProps = (state: AppStateType): MapStateToPropsType => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl,
});

export const LoginContainer = connect(MapStateToProps, { login })(Login);

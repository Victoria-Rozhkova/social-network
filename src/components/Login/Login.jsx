import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { login } from "../../redux/authReduser";
import { email, minLength, required } from "../../utils/validators/validators";
import { Input } from "../common/FormsControls/FormsControls";
import module from './Login.module.css';
import style from '../common/FormsControls/FormControls.module.css';

export const Login = (props) => {

  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Navigate to="/profile" />;
  } else {
    return <div className={module.loginWrapper}>
      <h2 className={module.heading}>Login</h2>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>;
  }
};

export const LoginForm = (props) => {
  const minLength5 = minLength(5);
  return (
    <form onSubmit={props.handleSubmit} className={module.inputBox}>
      <div><Field name="email" className={module.input} validate={[required, email]} type="email" placeholder="email" component={Input} /></div>
      <div><Field name="password" className={module.input} validate={[required, minLength5]} type="password" placeholder="password" component={Input} /></div>
      <div className={module.check}>
        <label htmlFor="remember"><Field name="rememberMe" type="checkbox" id="remember" component="input" /> remember me</label>
      </div>
      {props.error && <div className={style.errorSummary}>{props.error}</div>}
      <button className={module.btn} type="submit">Sign in</button>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: 'login',
})(LoginForm);

const MapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
});

export const LoginContainer = connect(MapStateToProps, { login })(Login);
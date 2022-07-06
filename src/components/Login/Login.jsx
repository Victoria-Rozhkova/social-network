import React from "react";
import { Field, reduxForm } from "redux-form";
import module from './Login.module.css';

export const Login = () => {

  const onSubmit = (formData) => {
    console.log(formData);
  };
  return <div className={module.loginWrapper}>
    <h2 className={module.heading}>Login</h2>
    <LoginReduxForm onSubmit={onSubmit} />
  </div>;
};

export const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={module.inputBox}>
      <div><Field name="login" className={module.input} type="login" placeholder="login" component="input" /></div>
      <div><Field name="password" className={module.input} type="password" placeholder="password" component="input" /></div>
      <div className={module.check}>
        <label htmlFor="remember"><Field name="rememberMe" type="checkbox" id="remember" component="input" /> remember me</label>
      </div>
      <button className={module.btn} type="submit">Sign in</button>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: 'login',
})(LoginForm);
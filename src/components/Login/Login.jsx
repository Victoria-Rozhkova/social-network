import React from "react";
import module from './Login.module.css';

export const Login = () => {
  return <div className={module.loginWrapper}>
    <h2 className={module.heading}>Login</h2>
    <form className={module.inputBox}>
      <div><input className={module.input} type="login" placeholder="login" /></div>
      <div><input className={module.input} type="password" placeholder="password" /></div>
      <button className={module.btn} type="submit">Войти</button>
    </form>

  </div>;
};
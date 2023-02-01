import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { isAuthSelector } from "src/redux/selectors/authSelectors";
import { LoginForm } from "./login-form";
import module from "./Login.module.css";

export const Login: FC = () => {
  const isAuth = useSelector(isAuthSelector);

  if (isAuth) {
    console.log("isAuth");
    return <Navigate to="/profile" />;
  } else {
    console.log("!isAuth");
    return (
      <div className={module.loginWrapper}>
        <h2 className={module.heading}>Login</h2>
        <LoginForm />
      </div>
    );
  }
};

export default Login;

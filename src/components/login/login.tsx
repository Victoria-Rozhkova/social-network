import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { isAuthSelector } from "@/redux/selectors/auth.selectors";
import { LoginForm } from "@/components/login/login-form";
import module from "@/components/login/login.module.css";

export const Login: FC = () => {
  const isAuth = useSelector(isAuthSelector);

  if (isAuth) {
    return <Navigate to="/profile" />;
  }
  return (
    <div className={module.loginWrapper}>
      <h2 className={module.heading}>Login</h2>
      <LoginForm />
    </div>
  );
};

export default Login;

import React from "react";
import LoginForm from "../../components/login-form/LoginForm";
import "./login.Style.css";

export const Login = () => {
  return (
    <div className="login-page bg-dark">
      <LoginForm />
    </div>
  );
};
export default Login;

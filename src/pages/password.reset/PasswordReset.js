import React from "react";
import { PasswordResetForm } from "../../components/passwod-reset-form/PasswordResetForm";
import "./passwordReset.style.css";

export const ResetPassword = () => {
  return (
    <div className="login-page bg-dark">
      <PasswordResetForm />
    </div>
  );
};
export default ResetPassword;

import React from 'react';
import './ResetPasswordWelcome.css';
import illustration from '../../../Assets/Icons/ForgotPasswordScreen/ForgotPasswordWelcomeImage.svg';

const ResetPasswordWelcome = () => {
  return (
      <div className="forgot-password-image">
        <img src={illustration} alt="Forgot Password Illustration" />
      </div>
  );
};

export default ResetPasswordWelcome;

import React from 'react';
import './ForgotPasswordWelcome.css';
import illustration from '../../../Assets/Icons/ForgotPasswordScreen/ForgotPasswordWelcomeImage.svg';

const ForgotPasswordWelcome = () => {
  return (
      <div className="forgot-password-image">
        <img src={illustration} alt="Forgot Password Illustration" />
      </div>
  );
};

export default ForgotPasswordWelcome;

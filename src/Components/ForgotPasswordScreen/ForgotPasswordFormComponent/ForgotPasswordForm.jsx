import React from 'react';
import './ForgotPasswordForm.css';
import AuthButton from '../../General/AuthButton/AuthButton';

const ForgotPasswordForm = () => {
  return (
    <div className="forgot-password-form">
      <h2>Forgot Password</h2>
      <h5>forgot your password ? no worries !</h5>
      <div className='forgotPasswordCardText'>
        Enter the email address for your CloudCom account below and we will email you a link to reset your password.
      </div>
      <form>
        <input className="forgotPasswordInput" type="email" placeholder="Email" required />
        <AuthButton text="Reset Password" link="/resetPassword"/>
      </form>
      <div className='action_link'>
        <a href="/login" className='sign-in-link'>Go to sign in</a>
      </div>
  </div>
  );
};

export default ForgotPasswordForm;

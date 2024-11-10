import React from 'react';
import './ResetPasswordForm.css';
import AuthButton from '../../General/AuthButton/AuthButton';

const ResetPasswordForm = () => {
  return (
    <div className="forgot-password-form">
      <h2>Reset Password</h2>
      <div className='forgotPasswordCardText'>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
      sed diam nonummy nibh euismod tincidunt ut laoreet 
      </div>
      <form>
        <input className="loginInput" type="email" placeholder="Email" required />
        <input className="loginInput" type="email" placeholder="Email" required />
        <AuthButton text="Reset Password" link="#"/>
      </form>
    </div>
  );
};

export default ResetPasswordForm;

import React from 'react';
import './ResetPasswordScreen.css';
import illustration from '../../Assets/Icons/ForgotPasswordScreen/ForgotPasswordWelcomeImage.svg';
import AuthButton from '../General/AuthButton/AuthButton';
import LogoNavbar from '../General/LogoNavbarComponent/LogoNavbar';

const ResetPasswordScreen = () => {
  return (
    <>
      <LogoNavbar />
      <div className="forgot-password-container">
      <div className="forgot-password-content">
        <div className="forgot-password-image">
          <img src={illustration} alt="Forgot Password Illustration" />
        </div>
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
      </div>
    </div>
    </>

  );
};

export default ResetPasswordScreen;

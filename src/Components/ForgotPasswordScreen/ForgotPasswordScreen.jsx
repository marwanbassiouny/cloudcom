import React from 'react';
import './ForgotPasswordScreen.css';
import illustration from '../../Assets/Icons/ForgotPasswordScreen/ForgotPasswordWelcomeImage.svg';
import AuthButton from '../General/AuthButton/AuthButton';
import LogoNavbar from '../General/LogoNavbarComponent/LogoNavbar';

const ForgotPasswordScreen = () => {
  return (
    <>
      <LogoNavbar />
      <div className="forgot-password-container">
      <div className="forgot-password-content">
        <div className="forgot-password-image">
          <img src={illustration} alt="Forgot Password Illustration" />
        </div>
        <div className="forgot-password-form">
          <h2>Forgot Password</h2>
          <h5>forgot your password ? no worries !</h5>
          <div className='forgotPasswordCardText'>
            Enter the email address for your CloudCom account below and we will email you a link to reset your password.
          </div>
          <form>
            <input className="loginInput" type="email" placeholder="Email" required />
            <AuthButton text="Reset Password" link="/resetPassword"/>
          </form>
          <div className='action_link'>
            <p className="sign-in-link">
                <a href="/login">Go to sign in</a>
            </p>
          </div>
        </div>
      </div>
    </div>
    </>

  );
};

export default ForgotPasswordScreen;

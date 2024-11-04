import React from 'react';
import './LoginForm.css';
import logo from '../../../Assets/Icons/RegistrationScreen/RegistrationForm/logo.svg';
import googleIcon from '../../../Assets/Icons/RegistrationScreen/RegistrationForm/googleIcon.svg';

const LoginForm = () => {
  return (
    <div className="login-container">
      <div className="login-form-card">
        <div className="login-logo-container">
          <img src={logo} alt="Cloudcom Logo" className="login-logo" />
        </div>
        <h2>Welcome back!</h2>
        <div className='divider-section'>
          <div className="line_divider">
            <hr className="login-divider" />
            <div className="login-or-divider">OR</div>
            <hr className="login-divider" />
          </div>
        </div>
        <div className="google-login">
          <button className="google-login-btn">
            <img src={googleIcon} alt="Google icon" /> Login with Google
          </button>
        </div>
        <form className="login-form">
          <input className="loginInput" type="text" placeholder="User Name" required />
          <input className="loginInput" type="password" placeholder="Password" required />
          <div className="login-options">
            <label className="remember-me">
              <input type="checkbox" /> Remember me
            </label>
            <a href="#" className="forgot-password">Forgot Password?</a>
          </div>
          <div className='verificationText'>. I want to receive verification code through :</div>
          <div className="verification-options">
            <label>
              <input type="radio" name="verification" value="email" /> Email
            </label>
            <label>
              <input type="radio" name="verification" value="sms" /> SMS
            </label>
          </div>
          <button className="login-button" type="submit">LOGIN</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;

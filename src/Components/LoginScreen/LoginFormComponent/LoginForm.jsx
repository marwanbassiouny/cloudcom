import React from 'react';
import './LoginForm.css';
import logo from '../../../Assets/Icons/RegistrationScreen/RegistrationForm/logo.svg';
import googleIcon from '../../../Assets/Icons/RegistrationScreen/RegistrationForm/googleIcon.svg';

const LoginForm = () => {
  return (
    <div className="login-container">
      <div className="login-form-card">
        <img src={logo} alt="Cloudcom Logo" className="login-logo" />
        <h2>Welcome back!</h2>
        <hr className="login-divider" />
        <div className="login-or-divider">OR</div>
        <button className="google-login-btn">
          <img src={googleIcon} alt="Google icon" /> Login with Google
        </button>
        <form className="login-form">
          <input type="text" placeholder="User Name" required />
          <input type="password" placeholder="Password" required />
          <div className="login-options">
            <label className="remember-me">
              <input type="checkbox" /> Remember me
            </label>
            <a href="#" className="forgot-password">Forgot Password?</a>
          </div>
          <p>I want to receive verification code through:</p>
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

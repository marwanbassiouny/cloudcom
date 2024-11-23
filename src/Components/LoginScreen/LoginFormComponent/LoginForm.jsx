import React from 'react';
import './LoginForm.css';
import googleIcon from '../../../Assets/Icons/RegistrationScreen/RegistrationForm/googleIcon.svg';
import AuthButton from '../../General/AuthButton/AuthButton';
import PasswordInput from '../../General/PasswordInput/PasswordInput';
import AuthInput from '../../General/AuthInput/AuthInput';


const LoginForm = () => {
  
  return (
    <div className="login-container">
      <div className="login-form-card">
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
          {/* <input className="loginInput" type="text" placeholder="User Name" required /> */}
          <AuthInput
              className='loginInput'
              label="User Name"
              type="text"
              name=""
              value={''}
              onChange={(e) => {console.log()}}
              required
            />

            {/* <AuthInput
              className='loginInput'
              label="Password"
              type="password"
              name=""
              value={''}
              onChange={(e) => {console.log()}}
              required
            /> */}
          
          <PasswordInput label="Password" />
          
          <div className="login-options">
            <label className="remember-me">
              <input type="checkbox" /> Remember me
            </label>
            <a href="/forgotPassword" className="forgot-password" target='_blank'>Forgot Password?</a>
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
          <AuthButton text="LOGIN" link="#"/>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;

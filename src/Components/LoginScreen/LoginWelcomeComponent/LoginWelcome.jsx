import React from 'react';
import './LoginWelcome.css';
import welcomeImage from '../../../Assets/Icons/RegistrationScreen/WelcomeComponent/welcomeImage.svg';

const LoginWelcome = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-text">
        <h2>Nice to see you again!</h2>
        <p>CloudCom The Starting Point of customer engagement</p>
      </div>
      <div className="welcome-image">
        <img src={welcomeImage} alt="Profile" className="login-profile-image" />
      </div>
      <p className="login-text">Don’t have an account? <a href="/register">SIGNUP</a></p>
    </div>
  );
};

export default LoginWelcome;

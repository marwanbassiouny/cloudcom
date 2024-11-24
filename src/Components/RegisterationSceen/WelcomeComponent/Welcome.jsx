import React from 'react';
import './Welcome.css';
import welcomeImage from '../../../Assets/Icons/RegistrationScreen/WelcomeComponent/welcomeImage.png';

const WelcomeComponent = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-text">
        <h1>Welcome to !</h1>
        <p>CloudCom The Starting Point Of Customer Engagement</p>
      </div>
      <div className="welcome-image">
        <img src={welcomeImage} alt="Profile" className="register-profile-image" loading='lazy' />
      </div>
      <p className="login-text">Already have an account? <a href="/login">LOGIN</a></p>
    </div>
  );
};

export default WelcomeComponent;

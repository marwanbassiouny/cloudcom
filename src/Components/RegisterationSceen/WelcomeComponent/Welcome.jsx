import React from 'react';
import './Welcome.css';
import welcomeImage from '../../../Assets/Icons/RegistrationScreen/WelcomeComponent/welcomeImage.svg';

const WelcomeComponent = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-text">
        <h1>Welcome to !</h1>
        <p>CloudCom The Starting Point Of Customer Engagement</p>
      </div>
      <div className="welcome-image">
        <img src={welcomeImage} alt="Profile" className="profile-image" />
      </div>
      <p className="login-text">Already have an account? <a href="/login">LOGIN</a></p>
    </div>
  );
};

export default WelcomeComponent;

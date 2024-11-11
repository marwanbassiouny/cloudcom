import React from 'react';
import './LoadingScreen.css';
import loadingAppIcon from '../../Assets/Icons/General/PrimaryNavbarComponent/CloudcomLogo.svg';

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="loading-content">
        <img src={loadingAppIcon} alt="App Logo" className="loading-logo" />
        <div className="loading-spinner-container">
          <div className="loading-spinner"></div>
          <span className="loading-text">Loading</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;

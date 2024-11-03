import React from 'react';
import './VerificationScreen.css';
import logoIcon from '../../Assets/Icons/VerificationScreen/logo.svg';
import verificationImage from '../../Assets/Icons/VerificationScreen/verificationIcon.svg';

const VerificationScreen = () => {
  return (
    <div className="verification-container">
      <div className="logo-section">
        <img src={logoIcon} alt="Cloudcom Logo" className="logo" />
      </div>

      <div className="verification-content">
        <img src={verificationImage} alt="Email Verification" className="verification-image" />
        <h2>Please verify your account</h2>
        <p>You're almost there! We sent a verification code to this email:</p>
        <p className="email-address">ayhaga@gmail.com</p>
        <p>Just enter the six-digit code to complete your signup. If you don’t see it, check your spam folder.</p>

        <div className="code-inputs">
          <input type="text" maxLength="1" />
          <input type="text" maxLength="1" />
          <input type="text" maxLength="1" />
          <input type="text" maxLength="1" />
          <input type="text" maxLength="1" />
          <input type="text" maxLength="1" />
        </div>

        <button className="resend-btn">Resend Verification Code</button>
      </div>
    </div>
  );
};

export default VerificationScreen;

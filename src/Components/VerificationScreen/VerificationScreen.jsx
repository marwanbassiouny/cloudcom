import React from 'react';
import './VerificationScreen.css';
import verificationImage from '../../Assets/Icons/VerificationScreen/verificationIcon.svg';
import AuthButton from '../General/AuthButton/AuthButton';
import VerificationCodeInputs from '../General/VerificationCodeInputs/VerificationCodeInputs';
import LogoNavbar from '../General/LogoNavbarComponent/LogoNavbar';

const VerificationScreen = () => {
  return (
    <>
      <LogoNavbar />
      <div className="verification-container">
        <div className="verification-content">
          <img src={verificationImage} alt="Email Verification" className="verification-image" />
          <h2>Please verify your account</h2>
          
          <div className='verification-text'>
            <p>You're almost there! We sent a verification code to this email:</p>
            <h5 className="email-address">ayhaga@gmail.com</h5>
            <p>Just enter the six-digit code to complete your signup. If you don’t see it, <strong>check your spam</strong> folder.</p>
          </div>

          <VerificationCodeInputs />
          <AuthButton text="Resend Verification Code" link="#"/>
        </div>
      </div>
    </>

  );
};

export default VerificationScreen;

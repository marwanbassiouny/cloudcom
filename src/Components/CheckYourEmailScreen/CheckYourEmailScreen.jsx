import React from 'react';
import './CheckYourEmailScreen.css';
import verificationImage from '../../Assets/Icons/VerificationScreen/verificationIcon.svg';
import AuthButton from '../General/AuthButton/AuthButton';
import LogoNavbar from '../General/LogoNavbarComponent/LogoNavbar';

const CheckYourEmailScreen = () => {
  return (
    <>
        <LogoNavbar />
        <div className="verification-container">
          <div className="verification-content">
            <img src={verificationImage} alt="Email Verification" className="verification-image" />
            <h2>Check Your Email</h2>

            <div className='checkyourmail-text'>
              <p>If you do not receive an email at <strong>ayhaga@gmail.com</strong>, then check to be sure it’s the email address </p>
              <p>you used to sign up for your CloudCom account</p>
              <p>If you don’t see the password reset email in your inbox, make sure to check your junk or spam folder</p>  
            </div>

            <AuthButton text="Go To Sign In" link="/login"/>
          </div>
        </div>
    </>

  );
};

export default CheckYourEmailScreen;

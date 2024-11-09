import React from 'react';
import './RegistrationForm.css';
import googleIcon from '../../../Assets/Icons/RegistrationScreen/RegistrationForm/googleIcon.svg';
import 'react-phone-input-2/lib/style.css'; 
import PhoneInput from 'react-phone-input-2';
import AuthButton from '../../General/AuthButton/AuthButton';
import LogoNavbar from '../../General/LogoNavbarComponent/LogoNavbar';

const RegistrationForm = () => {
  return (
    <div className="registration-container">
      <div className="form-card">
      
        <LogoNavbar />
        
        <h2>Let’s Create an account !</h2>
        
        <div className='divider-section'>
          <div className="line_divider">
            <hr className="login-divider" />
            <div className="login-or-divider">OR</div>
            <hr className="login-divider" />
          </div>
        </div>

        <div className="google-register_container">
          <button className="google-signup">
            <img src={googleIcon} alt="Google icon" /> Sign up with Google
          </button>
        </div>

        <form className="registration-form">
          <div className="name-inputs">
            <input className='registerInput' type="text" placeholder="First Name *" required />
            <input className='registerInput'  type="text" placeholder="Last Name *" required />
          </div>
          <PhoneInput
            country={'eg'}
            value=""
            placeholder="Phone Number *"
            inputClass="phone-input"
            containerClass="phone-input-container"
            countryCodeEditable={false}
          />
          <input className='registerInput'  type="email" placeholder="Email *" required />
          <input className='registerInput'  type="password" placeholder="Password *" required />
          <input className='registerInput'  type="password" placeholder="Confirm Password *" required />
          <p className='registration-paragrapgh'>
            By creating an account, you agree to the <a className="signup_links" href="#">Terms of use</a> and{' '}
            <a className="signup_links" href="#">Privacy Policy</a>.
          </p>
          <AuthButton text="SIGNUP" link="#"/>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;

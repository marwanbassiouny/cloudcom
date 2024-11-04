import React from 'react';
import './RegistrationForm.css';
import logo from '../../../Assets/Icons/RegistrationScreen/RegistrationForm/logo.svg';
import googleIcon from '../../../Assets/Icons/RegistrationScreen/RegistrationForm/googleIcon.svg';

const RegistrationForm = () => {
  return (
    <div className="registration-container">
      <div className="form-card">
        <div className="register-logo-container">
          <img src={logo} alt="Cloudcom Logo" className="logo" />
        </div>
        
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
          {/* <PhoneInput
            country={'eg'}
            value=""
            placeholder="Phone Number *"
            inputClass="phone-input"
            containerClass="phone-input-container"
            countryCodeEditable={false}
          /> */}
          <input className='registerInput'  type="email" placeholder="Email *" required />
          <input className='registerInput'  type="password" placeholder="Password *" required />
          <input className='registerInput'  type="password" placeholder="Confirm Password *" required />
          <p>
            By creating an account, you agree to the <a className="signup_links" href="#">Terms of use</a> and{' '}
            <a className="signup_links" href="#">Privacy Policy</a>.
          </p>
          <button className="signup-button" type="submit">SIGNUP</button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;

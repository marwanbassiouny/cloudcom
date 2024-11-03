import React from 'react';
import './RegistrationForm.css';
import logo from '../../../Assets/Icons/RegistrationScreen/RegistrationForm/logo.svg';
import googleIcon from '../../../Assets/Icons/RegistrationScreen/RegistrationForm/googleIcon.svg';

const RegistrationForm = () => {
  return (
    <div className="registration-container">
      <div className="form-card">
        <img src={logo} alt="Cloudcom Logo" className="logo" />
        <h2>Let’s Create an account !</h2>
        <div className="or-divider">OR</div>
        <hr className="form_divider" />

        <button className="google-signup">
          <img src={googleIcon} alt="Google icon" /> Sign up with Google
        </button>

        <form className="registration-form">
          <div className="name-inputs">
            <input type="text" placeholder="First Name *" required />
            <input type="text" placeholder="Last Name *" required />
          </div>
          {/* <PhoneInput
            country={'eg'}
            value=""
            placeholder="Phone Number *"
            inputClass="phone-input"
            containerClass="phone-input-container"
            countryCodeEditable={false}
          /> */}
          <input type="email" placeholder="Email *" required />
          <input type="password" placeholder="Password *" required />
          <input type="password" placeholder="Confirm Password *" required />
          <p>
            By creating an account, you agree to the <a href="#">Terms of use</a> and{' '}
            <a href="#">Privacy Policy</a>.
          </p>
          <button className="signup-button" type="submit">SIGNUP</button>
        </form>
        {/* <p className="login-link">
          Already have an account? <a href="/login">LOGIN</a>
        </p> */}
      </div>
    </div>
  );
};

export default RegistrationForm;

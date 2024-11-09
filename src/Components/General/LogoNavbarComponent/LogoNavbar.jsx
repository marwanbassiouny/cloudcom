import React from 'react';
import './LogoNavbar.css'
import logo from '../../../Assets/Icons/RegistrationScreen/RegistrationForm/logo.svg';

const LogoNavbar = () => {
  return (
  <div className="logo-navbar-container">
    <a href='/' className='logo-navbar-link'>
      <img src={logo} alt="Cloudcom Logo" className="logo-navbar-icon" />
    </a>
  </div>
  );
};

export default LogoNavbar;

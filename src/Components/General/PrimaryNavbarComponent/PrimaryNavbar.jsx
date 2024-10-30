import React from 'react';
import './PrimaryNavbar.css';
import logo from '../../../Assets/Icons/General/PrimaryNavbarComponent/CloudcomLogo.png';
import signupIcon from '../../../Assets/Icons/General/PrimaryNavbarComponent/signup.svg'
import textContent from '../../../Assets/Data/General/PrimaryNavbarComponent/PrimaryNavbarComponent.json'

const PrimaryNavbar = () => {
  return (
    <nav className="primary-navbar">
      <div className="navbar-left">
        <img src={logo} alt="Cloudcom Logo" className="Cloudcom_Logo" />
      </div>
      <ul className="navbar-links">
        <li><a href="#">{textContent.whoAreWe}</a></li>
        <li><a href="#">{textContent.ourProducts}</a></li>
        <li><a href="#">{textContent.pricing}</a></li>
        <li><a href="/ClientTestimonials">{textContent.testimonials}</a></li>
        <li><a href="/ContactUs">{textContent.contactUs}</a></li>
      </ul>
      <div className="navbar-right">
        <a href="#" className="signup-btn">{textContent.signUp}  </a>
        {/* <img className="arrow" src={signupIcon} alt="signupIcon" /> */}
  
      </div>
    </nav>
  );
};

export default PrimaryNavbar;

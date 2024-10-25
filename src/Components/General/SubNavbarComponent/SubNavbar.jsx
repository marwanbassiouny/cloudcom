import React from 'react';
import phoneIcon from '../../../Assets/Icons/HomeScreen/SubNavbarComponent/phone.png';
import emailIcon from '../../../Assets/Icons/HomeScreen/SubNavbarComponent/email.png';
import facebookIcon from '../../../Assets/Icons/HomeScreen/SubNavbarComponent/facebook.png';
import linkedinIcon from '../../../Assets/Icons/HomeScreen/SubNavbarComponent/linkedin.png';
import twitterIcon from '../../../Assets/Icons/HomeScreen/SubNavbarComponent/twitter.png';
import youtubeIcon from '../../../Assets/Icons/HomeScreen/SubNavbarComponent/youtube.png';
import textContent from '../../../Assets/Data/HomeScreen/SubNavbarComponent/SubNavbarComponent.json'
import './SubNavbar.css'

const SubNavbar = () => {
  return (
    <div className="sub-navbar">
      <div className="sub-navbar-left">
        <span className="phone"><img src={phoneIcon} alt="phoneIcon" /> {textContent.phone}</span>
        <span className="email"><img src={emailIcon} alt="emailIcon" /> {textContent.email}</span>
      </div>
      <div className="sub-navbar-right">
        <a href="#"><img src={facebookIcon} alt="Facebook" /></a>
        <a href="#"><img src={linkedinIcon} alt="LinkedIn" /></a>
        <a href="#"><img src={twitterIcon} alt="Twitter" /></a>
        <a href="#"><img src={youtubeIcon} alt="YouTube" /></a>
      </div>
    </div>
  );
};

export default SubNavbar;

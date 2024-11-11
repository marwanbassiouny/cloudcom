import React from 'react';
import phoneIcon from '../../../Assets/Icons/General/SubNavbarComponent/phone.svg';
import emailIcon from '../../../Assets/Icons/General/SubNavbarComponent/email.svg';
import facebookIcon from '../../../Assets/Icons/General/SubNavbarComponent/facebook.svg';
import linkedinIcon from '../../../Assets/Icons/General/SubNavbarComponent/linkedin.svg';
import twitterIcon from '../../../Assets/Icons/General/SubNavbarComponent/twitter.svg';
import youtubeIcon from '../../../Assets/Icons/General/SubNavbarComponent/youtube.svg';
import textContent from '../../../Assets/Data/General/SubNavbarComponent/SubNavbarComponent.json'
import './SubNavbar.css'

const SubNavbar = () => {
  return (
    <div className="sub-navbar page_padding_level_1">
      <div className="sub-navbar-left">
        <span className="phone"><img src={phoneIcon} alt="phoneIcon" /> {textContent.phone}</span>
        <span className="email"><img src={emailIcon} className ="emailIcon" alt="emailIcon" /> {textContent.email}</span>
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

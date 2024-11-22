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
        <span className="phone"><img src={phoneIcon} alt="phoneIcon" /> +971 52 729 5941</span>
        <span className="email"><a className='subnav_email_link' href='mailto:info@cloudcom.io' target='_blank' rel="noopener noreferrer"><img src={emailIcon} className ="emailIcon" alt="emailIcon" /> {textContent.email}</a></span>
      </div>
      <div className="sub-navbar-right">
        <a href='https://www.facebook.com/UseCloudCom' target='_blank'><img src={facebookIcon} alt="Facebook" /></a>
        <a href='https://www.linkedin.com/company/usecloudcom/about/' target='_blank'><img src={linkedinIcon} alt="LinkedIn" /></a>
        <a href='https://x.com/UseCloudCom' target='_blank'><img src={twitterIcon} alt="Twitter" /></a>
        <a href='https://www.youtube.com/@UseCloudCom' target='_blank'><img src={youtubeIcon} alt="YouTube" /></a>
      </div>
    </div>
  );
};

export default SubNavbar;

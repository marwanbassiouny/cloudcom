import React, { useState } from 'react';
import './PrimaryNavbar.css';
import logo from '../../../Assets/Icons/General/PrimaryNavbarComponent/CloudcomLogo.svg';
import textContent from '../../../Assets/Data/General/PrimaryNavbarComponent/PrimaryNavbarComponent.json';
import CustomerDataManagementIcon from '../../../Assets/Icons/General/PrimaryNavbarComponent/CustomerDataManagement.svg';
import verifyIcon from '../../../Assets/Icons/General/PrimaryNavbarComponent/verifyIcon.svg';
import campaignManagerIcon from '../../../Assets/Icons/General/PrimaryNavbarComponent/campaignManagerIcon.svg';
import aiSegmantationIcon from '../../../Assets/Icons/General/PrimaryNavbarComponent/aiSegmantationIcon.svg';
import chatManagementIcon from '../../../Assets/Icons/General/PrimaryNavbarComponent/chatManagementIcon.svg'
import flowIcon from '../../../Assets/Icons/General/PrimaryNavbarComponent/flowIcon.svg';
import CloudComButton from '../CloudComButton/CloudComButton';

const PrimaryNavbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="primary-navbar">
      <div className="navbar-left">
        <a href="/"><img src={logo} alt="Cloudcom Logo" className="Cloudcom_Logo" /></a>
      </div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/whoWeAre">{textContent.whoAreWe}</a></li>
        <li 
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
          className="dropdown"
        >
          <a href="#">{textContent.ourProducts}</a>
          {showDropdown && (
            <div className="dropdown-menu">
              <a href="/customerDataManagement"><img src={CustomerDataManagementIcon} alt="Icon" /> Customer Data Management</a>
              <a href="/AIPoweredSegmantation"><img src={aiSegmantationIcon} alt="Icon" /> AI-Powered Segmentation</a>
              <a href="/verify"><img src={verifyIcon} alt="Icon" /> Verify</a>
              <a href="/chatManagement"><img src={chatManagementIcon} alt="Icon" /> Chat Management</a>
              <a href="/multiChannelCampaignManager"><img src={campaignManagerIcon} alt="Icon" /> Multi-Channel Campaign Manager</a>
              <a href="/flowBuilder"><img src={flowIcon} alt="Icon" /> Flow</a>
            </div>
          )}
        </li>
        <li><a href="/packagesAndPrices">{textContent.pricing}</a></li>
        <li><a href="/ClientTestimonials">{textContent.testimonials}</a></li>
        <li><a href="/ContactUs">{textContent.contactUs}</a></li>
      </ul>
      <div className="navbar-right">
        <CloudComButton text="Signup" />
      </div>
    </nav>
  );
};

export default PrimaryNavbar;

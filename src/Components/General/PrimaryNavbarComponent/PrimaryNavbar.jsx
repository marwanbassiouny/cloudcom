import React, { useState } from 'react';
import './PrimaryNavbar.css';
import logo from '../../../Assets/Icons/General/PrimaryNavbarComponent/CloudcomLogo.svg';
import textContent from '../../../Assets/Data/General/PrimaryNavbarComponent/PrimaryNavbarComponent.json';
import CustomerDataManagementIcon from '../../../Assets/Icons/General/PrimaryNavbarComponent/CustomerDataManagement.svg';
import verifyIcon from '../../../Assets/Icons/General/PrimaryNavbarComponent/verifyIcon.svg';
import campaignManagerIcon from '../../../Assets/Icons/General/PrimaryNavbarComponent/campaignManagerIcon.svg';
import aiSegmantationIcon from '../../../Assets/Icons/General/PrimaryNavbarComponent/aiSegmantationIcon.svg';
import chatManagementIcon from '../../../Assets/Icons/General/PrimaryNavbarComponent/chatManagementIcon.svg';
import flowIcon from '../../../Assets/Icons/General/PrimaryNavbarComponent/flowIcon.svg';
import CloudComButton from '../CloudComButton/CloudComButton';
import CustomerDataManagementIconSelected from '../../../Assets/Icons/General/PrimaryNavbarComponent/CustomerDataManagement_selected.svg';
import verifyIconSelected from '../../../Assets/Icons/General/PrimaryNavbarComponent/verifyIcon_selected.svg';
import campaignManagerIconSelected from '../../../Assets/Icons/General/PrimaryNavbarComponent/campaignManagerIcon_selected.svg';
import aiSegmantationIconSelected from '../../../Assets/Icons/General/PrimaryNavbarComponent/aiSegmantationIcon_selected.svg';
import chatManagementIconSelected from '../../../Assets/Icons/General/PrimaryNavbarComponent/chatManagementIcon_selected.svg';
import flowIconSelected from '../../../Assets/Icons/General/PrimaryNavbarComponent/flowIcon_selected.svg';
import dropdownMenuIcon from '../../../Assets/Icons/General/PrimaryNavbarComponent/dropdownMenuIcon.svg';

const PrimaryNavbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentPath = window.location.pathname; // Current path

  return (
    <nav className="primary-navbar page_padding_level_0">
      <div className="navbar-left">
        <a href="/"><img src={logo} alt="Cloudcom Logo" className="Cloudcom_Logo" /></a>
      </div>
      
      <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <li>
          <a href="/" className={currentPath === '/' ? 'active-link' : ''}>Home</a>
        </li>
        <li>
          <a href="/whoWeAre" className={currentPath === '/whoWeAre' ? 'active-link' : ''}>{textContent.whoAreWe}</a>
        </li>
        <li
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
          className="dropdown"
        >
          <a href="#" className={currentPath === '/ourProducts' ? 'active-link' : ''}>
            {textContent.ourProducts}
            <img src={dropdownMenuIcon} alt="Dropdown Icon" className={`dropdown-icon ${showDropdown ? 'rotated' : ''}`} />
          </a>
          {showDropdown && (
            <div className="dropdown-menu">
              <a href="/customerDataManagement" className="menu-item-hover">
                <img src={CustomerDataManagementIcon} alt="Icon" className="default-icon"/>
                <img src={CustomerDataManagementIconSelected} alt="Icon" className="hover-icon" /> 
                Customer Data Management
              </a>
              <a href="/AIPoweredSegmantation" className="menu-item-hover">
                <img src={aiSegmantationIcon} alt="Icon" className="default-icon"/> 
                <img src={aiSegmantationIconSelected} alt="Icon" className="hover-icon" /> 
                AI-Powered Segmentation
              </a>
              <a href="/verify" className="menu-item-hover">
                <img src={verifyIcon} alt="Verify Icon" className="default-icon" />
                <img src={verifyIconSelected} alt="Verify Icon Blue" className="hover-icon" />
                Verify
              </a>
              <a href="/chatManagement" className="menu-item-hover">
                <img src={chatManagementIcon} alt="Icon" className="default-icon" /> 
                <img src={chatManagementIconSelected} alt="Icon" className="hover-icon" /> 
                Chat Management
              </a>
              <a href="/multiChannelCampaignManager" className="menu-item-hover">
                <img src={campaignManagerIcon} alt="Icon" className="default-icon"/> 
                <img src={campaignManagerIconSelected} alt="Icon" className="hover-icon" />
                Multi-Channel Campaign Manager
              </a>
              <a href="/flowBuilder" className="menu-item-hover">
                <img src={flowIcon} alt="Icon" className="default-icon"/> 
                <img src={flowIconSelected} alt="Icon" className="hover-icon" />
                Flow
              </a>
            </div>
          )}
        </li>
        <li>
          <a href="/packagesAndPrices" className={currentPath === '/packagesAndPrices' ? 'active-link' : ''}>{textContent.pricing}</a>
        </li>
        <li>
          <a href="/caseStudies" className={currentPath === '/caseStudies' ? 'active-link' : ''}>Case Studies</a>
        </li>
        <li>
          <a href="/ClientTestimonials" className={currentPath === '/ClientTestimonials' ? 'active-link' : ''}>{textContent.testimonials}</a>
        </li>
        <li>
          <a href="/reports" className={currentPath === '/reports' ? 'active-link' : ''}>{textContent.reports}</a>
        </li>
        <li>
          <a href="/newsandarticles" className={currentPath === '/newsandarticles' ? 'active-link' : ''}>{textContent.news}</a>
        </li>
        <li>
          <a href="/ContactUs" className={currentPath === '/ContactUs' ? 'active-link' : ''}>{textContent.contactUs}</a>
        </li>
      </ul>
      <div className="navbar-right">
        <CloudComButton text="Signup" link="/register"/>
      </div>
      <div className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default PrimaryNavbar;

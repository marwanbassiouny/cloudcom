import React, { useState, useEffect } from 'react';
import './PrimaryNavbar.css';
import logo from '../../../Assets/Icons/General/PrimaryNavbarComponent/CloudcomLogo.svg';
import textContent from '../../../Assets/Data/General/PrimaryNavbarComponent/PrimaryNavbarComponent.json';
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
  const [showResouresDropdown, setShowResourcesDropdown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentPath = window.location.pathname;

  // Detect screen size and adjust menu state
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1024px)'); // Tablet/mobile breakpoint
    const handleResize = () => {
      // Only allow the menu to open on tablet and mobile screen sizes
      if (!mediaQuery.matches) {
        setIsMenuOpen(false);
      }
    };
    mediaQuery.addEventListener('change', handleResize);
    handleResize(); // Initial check on component mount
    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);

  return (
    <nav className="primary-navbar page_padding_level_1">
      <div className="navbar-left">
        <a href="/">
          <img src={logo} alt="Cloudcom Logo" className="Cloudcom_Logo" />
        </a>
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
                <img src={CustomerDataManagementIconSelected} alt="Icon" className="hover-icon" loading="lazy"/>
                Customer Data Management
              </a>
              <a href="/AIPoweredSegmantation" className="menu-item-hover">
                <img src={aiSegmantationIconSelected} alt="Icon" className="hover-icon" loading="lazy"/>
                AI-Powered Segmentation
              </a>
              <a href="/verify" className="menu-item-hover">
                <img src={verifyIconSelected} alt="Verify Icon Blue" className="hover-icon" loading="lazy"/>
                Verify
              </a>
              <a href="/chatManagement" className="menu-item-hover">
                <img src={chatManagementIconSelected} alt="Icon" className="hover-icon" loading="lazy"/>
                Chat Management
              </a>
              <a href="/multiChannelCampaignManager" className="menu-item-hover">
                <img src={campaignManagerIconSelected} alt="Icon" className="hover-icon" loading="lazy"/>
                Multi-Channel Campaign Manager
              </a>
              <a href="/flowBuilder" className="menu-item-hover">
                <img src={flowIconSelected} alt="Icon" className="hover-icon" loading="lazy"/>
                Flow-Builder
              </a>
            </div>
          )}
        </li>

        <li
          onMouseEnter={() => setShowResourcesDropdown(true)}
          onMouseLeave={() => setShowResourcesDropdown(false)}
          className="dropdown"
        >
          <a href="#" className={currentPath === '/ourProducts' ? 'active-link' : ''}>
            Resources
            <img src={dropdownMenuIcon} alt="Dropdown Icon" className={`dropdown-icon ${showResouresDropdown ? 'rotated' : ''}`} />
          </a>
          {showResouresDropdown && (
            <div className="resources-dropdown-menu">
              <a href="/caseStudies" className={currentPath === '/caseStudies' ? 'secondDropDownLink resourceDD-active-link' : 'secondDropDownLink'}>Case Studies</a>
              <a href="/ClientTestimonials" className={currentPath === '/ClientTestimonials' ? 'secondDropDownLink resourceDD-active-link' : 'secondDropDownLink'}>{textContent.testimonials}</a>
              <a href="/reports" className={currentPath === '/reports' ? 'secondDropDownLink resourceDD-active-link' : 'secondDropDownLink'}>{textContent.reports}</a>
              <a href="/newsandarticles" className={currentPath === '/newsandarticles' ? 'secondDropDownLink resourceDD-active-link' : 'secondDropDownLink'}>{textContent.news}</a>
            </div>
          )}
        </li>

        <li>
          <a href="/packagesAndPrices" className={currentPath === '/packagesAndPrices' ? 'active-link' : ''}>{textContent.pricing}</a>
        </li>
        <li>
          <a href="/ContactUs" className={currentPath === '/ContactUs' ? 'active-link' : ''}>{textContent.contactUs}</a>
        </li>
        {isMenuOpen && (
          <CloudComButton text="Sign Up" link="/register" width="140" height="40" />
        )}
      </ul>

      {!isMenuOpen && (
        <div className="navbar-right">
          <CloudComButton text="Sign Up" link="/register" width="140" height="40" />
        </div>
      )}

      <div className="hamburger-menu" onClick={() => {
        // Toggle menu only if on tablet or mobile view
        if (window.matchMedia('(max-width: 1025px)').matches) {
          setIsMenuOpen(!isMenuOpen);
        }
      }}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default PrimaryNavbar;

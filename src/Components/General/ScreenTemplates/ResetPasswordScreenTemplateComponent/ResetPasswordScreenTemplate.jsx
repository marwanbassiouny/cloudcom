import React from 'react';
import './AuthScreenTemplate.css';
import LogoNavbar from '../../LogoNavbarComponent/LogoNavbar';

const ResetPasswordScreenTemplate = ({leftPanel, rightPanel}) => {
  return (
    <>
      <div className="resetPass-template-screen">
          <div className="auth-template-navbar">
            <LogoNavbar />
          </div>
          <div className="resetPass-template-content">
            <div className="resetPass-left-section"> 
              {leftPanel}
            </div>
            <div className="resetPass-right-section">
              {rightPanel} 
            </div>
          </div>
      </div>
    </>
  );
};

export default ResetPasswordScreenTemplate;

import React from 'react';
import './AuthScreenTemplate.css';
import LogoNavbar from '../../LogoNavbarComponent/LogoNavbar';

const AuthScreenTemplate = ({leftPanel, rightPanel}) => {
  return (
    <>
      <div className="auth-template-screen">
          <div className="auth-template-navbar">
            <LogoNavbar />
          </div>
          <div className="auth-template-content">
              {/* {leftPanel}
              {rightPanel}  */}

            <div className="authTempalte-left-section"> 
              {leftPanel}
            </div>
            <div className="authTempalte-right-section">
              {rightPanel} 
            </div>
          </div>
      </div>
    </>
  );
};

export default AuthScreenTemplate;

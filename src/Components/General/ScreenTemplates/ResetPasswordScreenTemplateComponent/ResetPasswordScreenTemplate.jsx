import React from 'react';
import './ResetPasswordScreenTemplate.css';
import LogoNavbar from '../../LogoNavbarComponent/LogoNavbar';
import elipse from '../../../../Assets/Icons/General/ScreenTemplates/AuthScreenTemplateComponent/eliplse1.svg'
import cloud from '../../../../Assets/Icons/General/ScreenTemplates/AuthScreenTemplateComponent/cloud.svg'

const ResetPasswordScreenTemplate = ({leftPanel, rightPanel}) => {
  return (
    <>
      <div className="ResetPasswordScreenTemplate-screen">
          <div className="ResetPasswordScreenTemplate-navbar">
            <LogoNavbar />
          </div>
          <div className="ResetPasswordScreenTemplate-content">
            
          <div class="parent-container">
            <img src={elipse} class="auth-ellipse-1" alt="Ellipse" />
            <img src={elipse} class="auth-ellipse-2" alt="Ellipse" />
            <img src={elipse} class="auth-ellipse-3" alt="Ellipse" />
            <img src={elipse} class="auth-ellipse-4" alt="Ellipse" />
            <img src={cloud} class="auth-ellipse ellipse-bottom-left" alt="Ellipse" />
          </div>

            <div className="ResetPasswordScreenTemplate-left-section"> 
              {leftPanel}
            </div>
            <div className="ResetPasswordScreenTemplate-right-section">
              {rightPanel} 
            </div>
          </div>
      </div>
    </>
  );
};

export default ResetPasswordScreenTemplate;

import React from 'react';
import './CaseStudyIntro.css';
import logo from '../../../Assets/Images/CaseStudyScreen/Vezeeta-Logo 3.png';

const CaseStudyIntro = () => {
  return (
    <div className="case-study-intro">
      <div className="left-section">
        <div className="client-info">
          <img src={logo} alt="vezzeta Egypt Logo" className="case-study-logo-vezzeta" />
          <p><span>Client<br/></span> Vezeeta</p>
          <p><span>Year<br/></span> 2024</p>
        </div>
      </div>
      <div className="right-section">
        <h2>How Vezeeta Increased Pharmacy Orders by 28% with cloudcom’s Personalized Communication and Segmentation Tools</h2>
        <div className="metrics">
          <div className="metric">
            <p className="percentage">28%</p>
            <p>Boosted Retention</p>
          </div>
          <div className="divider" />
          <div className="metric">
            <p className="percentage">34%</p>
            <p>Customer Engagement</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyIntro;

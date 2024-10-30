import React from 'react';
import './CaseStudyIntro.css';
import logo from '../../../Assets/Icons/InnerCaseStudyScreen/CaseStudyIntro/gourmetIcon.svg';

const CaseStudyIntro = () => {
  return (
    <div className="case-study-intro">
      <div className="left-section">
        <img src={logo} alt="Gourmet Egypt Logo" className="case-study-logo" />
        <div className="client-info">
          <p><span>Client</span> Gourmet Egypt</p>
          <p><span>Year</span> 2024</p>
        </div>
      </div>
      <div className="right-section">
        <h2>How Gourmet Egypt Boosted Retention with cloudcom’s CPaaS Solutions</h2>
        <div className="metrics">
          <div className="metric">
            <p className="percentage">22%</p>
            <p>Boosted Retention</p>
          </div>
          <div className="divider" />
          <div className="metric">
            <p className="percentage">35%</p>
            <p>Customer Engagement</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyIntro;

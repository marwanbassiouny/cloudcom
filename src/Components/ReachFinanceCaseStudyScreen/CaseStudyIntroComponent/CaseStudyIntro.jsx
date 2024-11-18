import React from 'react';
import './CaseStudyIntro.css';
import logo from '../../../Assets/Images/CaseStudyScreen/reachlogo.png';

const CaseStudyIntro = () => {
  return (
    <div className="case-study-intro">
      <div className="left-section">
        <div className="client-info">
          <img src={logo} alt="Gourmet Egypt Logo" className="case-study-logo" />
          <p><span>Client<br/></span> Reach Finance</p>
          <p><span>Year<br/></span> 2024</p>
        </div>
      </div>
      <div className="right-section">
        <h2>How Reach Finance Increased Email Open Rates by 32% and Boosted Repeat Transactions by 25% with cloudcom’s Personalized Messaging Solutions</h2>
        <div className="metrics">
          <div className="metric">
            <p className="percentage">32%</p>
            <p>Increased Email Open Rates</p>
          </div>
          <div className="divider" />
          <div className="metric">
            <p className="percentage">25%</p>
            <p> Boosted Repeat Transactions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyIntro;

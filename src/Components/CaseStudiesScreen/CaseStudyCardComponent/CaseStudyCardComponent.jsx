import React from "react";
import "../CaseStudyScreen.css";

const CaseStudyCard = ({ image, companyLogo, title, description, stats, buttonLabel }) => {
  
  return (
    <div className="case-study-card">
      <img src={image} alt={title} className="case-study-image" />
      <div className="case-study-content">
        <div className="case-study-head">
          <h3 className="case-study-title">{title}</h3>
          <img src={companyLogo} alt={`${title} logo`} className="case-study-logo" />
        </div>
        <p className="case-study-description">{description}</p>
          <div className="case-study-stats">
          {stats && stats.length > 0 && (
              <>
               <div className="case-study-stat">
                <span className="stat-value">{stats[0].value}</span>
                <span className="stat-label">{stats[0].label}</span>
              </div>
              {stats.length > 1 && (
                <>
                <div className="case-study-divider"></div>
                <div className="case-study-stat">
                  <span className="stat-value">{stats[1].value}</span>
                  <span className="stat-label">{stats[1].label}</span>
                </div>
                </>
              )}
              
              </>
          )}
           
           <button className="read-more-button">{buttonLabel}</button>
        </div>
       
      </div>
    </div>
  );
};

export default CaseStudyCard;

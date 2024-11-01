import React from "react";
import "./SuccessStoriesBanner.css";

const SuccessStoriesBanner = () => {
  return (
    <div className="SuccessStoriesBanner"> 
        <div className="success-stories-banner">
        <div className="banner-overlay">
          <div className="banner-content">
            <h2 className="banner-title">Explore real-world <br /> success stories </h2>

            <p className="banner-description">
              See how our customers have transformed their communication strategies with cloudcom.
            </p>
            <a style={{textDecoration:"none"}} href="/casestudies" target="_blank"><button className="banner-button">Case Studies →</button></a>
          </div>
        </div>
        <div className="pagination-dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    </div>
  );
};

export default SuccessStoriesBanner;

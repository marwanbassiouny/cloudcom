import React from 'react';
import './SuccessStories.css';
import successStoriesImage from '../../../Assets/Images/HomeScreen/SuccessStoriesComponent/SuccessStoriesImage.svg'; 
import successStoriesIcon from '../../../Assets/Icons/HomeScreen/SuccessStoriesComponent/SuccessStoriesIcon.svg'; 
import CloudComButton from '../../General/CloudComButton/CloudComButton';

const SuccessStories = () => {
  return (
    <div className="success-stories-container">
      <h2>Discover the Success Stories</h2>
      <p className="description">
        See how businesses across various industries have transformed their customer engagement with cloudcom’s solutions.
        From increasing retention to driving growth, explore real-world results that highlight the power of personalized,
        omni-channel communication.
      </p>

      <div className="story-section">
        <div className="story-image">
          <img src={successStoriesImage} alt="Gourmet Egypt Store" />
        </div>

        <div className="story-content">
          <img src={successStoriesIcon} alt="Gourmet Egypt Logo" className="logo-image" />
          <h3>Gourmet Egypt</h3>
          <p>How Gourmet Egypt Boosted Retention with cloudcom’s CPaaS Solutions</p>
          <div className="stats">
            <div className="stat-item stat-item-right">
              <h4>22%</h4>
              <p>Boosted Retention</p>
            </div>
            <div className="stat-item middle-item stat-item-right">
              <h4>35%</h4>
              <p>Customer Engagement</p>
            </div>
            <div className="stat-item">
              <h4>22%</h4>
              <p>Boosted Retention</p>
            </div>
          </div>
          {/* <a href="#" className="explore-btn">Explore ↗</a> */}
          <CloudComButton text="Explore" link="/innerCaseStudy" glow='glow' />
        </div>

        <div className="home-nav-dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;

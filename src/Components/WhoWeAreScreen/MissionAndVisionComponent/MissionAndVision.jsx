import React from 'react';
import './MissionAndVision.css';
import mainImage from '../../../Assets/Icons/WhoWeAreScreen/MissionAndVisionComponent/MissonAndVisionIcon.svg';

const MissionAndVision = () => {
  return (
    <div className="mission-vision-container">
      <div className="text-section">
        <div className="card">
          <h3>Purpose</h3>
          <p>
            Connecting businesses with their customers through meaningful interactions that drive loyalty,
            growth, and lasting relationships.
          </p>
        </div>
        <div className="card">
          <h3>Mission</h3>
          <p>
            To simplify CPaaS with seamless onboarding, robust security, and unmatched scalability.
            Empowering businesses to deliver exceptional customer experiences across every touchpoint.
          </p>
        </div>
        <div className="card">
          <h3>Vision</h3>
          <p>
            To fuel business growth through personalized communication, leading the way in CPaaS
            innovation across the MENA, Gulf, and beyond.
          </p>
        </div>
      </div>

      <div className="image-section">
        <img src={mainImage} alt="Purpose, Mission, Vision Illustration" className="main-image" />
      </div>
    </div>
  );
};

export default MissionAndVision;

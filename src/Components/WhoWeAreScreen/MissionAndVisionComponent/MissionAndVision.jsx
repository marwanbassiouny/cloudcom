import React from 'react';
import './MissionAndVision.css';
import mainImage from '../../WhoWeAreScreen/MissionAndVisionComponent/'; // Replace with the actual path

const MissionAndVision = () => {
  return (
    <div className="mission-vision-container">
      <div className="text-section">
        <div className="purpose-section">
          <h3>Purpose</h3>
          <p>
            Connecting businesses with their customers through meaningful interactions that drive loyalty,
            growth, and lasting relationships.
          </p>
        </div>

        <div className="mission-text">
          <h3>Mission</h3>
          <p>
            To simplify CPaaS with seamless onboarding, robust security, and unmatched scalability.
            Empowering businesses to deliver exceptional customer experiences across every touchpoint.
          </p>
        </div>

        <div className="vision-text">
          <h3>Vision</h3>
          <p>
            To fuel business growth through personalized communication, leading the way in CPaaS
            innovation across the MENA, Gulf, and beyond.
          </p>
        </div>
      </div>

      <div className="image-section">
        <img src={mainImage} alt="Illustration" className="main-image" />
      </div>
    </div>
  );
};

export default MissionAndVision;

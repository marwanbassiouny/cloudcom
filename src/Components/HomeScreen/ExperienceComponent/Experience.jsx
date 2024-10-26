import React from 'react';
import './Experience.css';
import sixYearsImage from '../../../Assets/Icons/HomeScreen/ExperienceComponent/SixYearsImage.svg'; 
import textContent from '../../../Assets/Data/HomeScreen/ExperienceComponent/ExperienceComponent.json'

const Experience = () => {
    return (
      <div className="experience-container">
        {/* Left Section */}
        <div className="experience-left">
          <img src={sixYearsImage} alt="6 Years" className="number-image" />
          <div className="experience-text">
            <h2>{textContent.headline1}<br />{textContent.headline2}</h2>
            <p>
            {textContent.description1}<br />
            {textContent.description2}
            </p>
            <a href="#" className="get-in-touch-btn">{textContent.getInTouchButton} ↗</a>
          </div>
        </div>
  
        {/* Right Section: Stats */}
        <div className="experience-right">
          <div className="stat-item">
            <h3>{textContent.stat1Headline}</h3>
            <p>{textContent.stat1Text}</p>
          </div>
          <div className="stat-item">
            <h3>{textContent.stat2Headline}</h3>
            <p>{textContent.stat2Text}</p>
          </div>
          <div className="stat-item">
            <h3>{textContent.stat3Headline}</h3>
            <p>{textContent.stat3Text}</p>
          </div>
          <div className="stat-item">
            <h3>{textContent.stat4Headline}</h3>
            <p>{textContent.stat4Text}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Experience;
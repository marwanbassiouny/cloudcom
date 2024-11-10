import React from 'react';
import introImage from '../../../../Assets/Icons/HomeScreen/IntroComponent/IntroImage.svg';
import './IntroImage.css'

const IntroImage = () => {
    return (
        <div className="intro-image-section">
          <img src={introImage} alt="Customer Support" className="support-image" />
        </div>
    );
  };
  
  export default IntroImage;
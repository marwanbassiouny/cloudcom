import React from 'react';
import introImage from '../../../Assets/Icons/HomeScreen/IntroComponent/IntroImage.svg';
import textContent from '../../../Assets/Data/HomeScreen/Intro/Intro.json'
import './Intro.css'

const Intro = () => {
    return (
      <div className="intro-container">
        <div className="content-section">
          <h1 class="highlight-text">cloudcom the starting point of</h1>
          <h1 class="gradient-text">Customer Support</h1>
          <p>{textContent.headline3}</p>
          <a href="#" className="demo-btn">{textContent.bookDemo} ↗</a>
        </div>
        <div className="intro-image-section">
          <img src={introImage} alt="Customer Support" className="support-image" />
        </div>
      </div>
    );
  };
  
  export default Intro;
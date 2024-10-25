import React from 'react';
import introImage from '../../../Assets/Icons/HomeScreen/IntroComponent/IntroImage.png';
import textContent from '../../../Assets/Data/HomeScreen/Intro/Intro.json'
import './Intro.css'

const Intro = () => {
    return (
      <div className="intro-container">
        <div className="content-section">
          <h1>
            {textContent.headline1} <br />
            <span className="highlight-text">{textContent.headline2}</span>
          </h1>
          <p>{textContent.headline3}</p>
          <a href="#" className="demo-btn">{textContent.bookDemo} ↗</a>
        </div>
        <div className="image-section">
          <img src={introImage} alt="Customer Support" className="support-image" />
        </div>
      </div>
    );
  };
  
  export default Intro;
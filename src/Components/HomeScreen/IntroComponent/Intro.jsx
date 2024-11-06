import React from 'react';
import introImage from '../../../Assets/Icons/HomeScreen/IntroComponent/IntroImage.svg';
import './Intro.css'
import CloudComButton from '../../General/CloudComButton/CloudComButton';

const Intro = () => {
    return (
      <div className="intro-container">
        <div className="content-section">
          <h1 class="highlight-text">cloudcom the starting point of</h1>
          <h1 class="gradient-text">Customer Support</h1>
          <p>Learn. Segment. Connect. Engage. Analyze.</p>
          <p>Support. Your customer.</p>
          <div className="demo-btn"> 
            <CloudComButton text="Book a Demo" link="https://portal.cloudcom.io/login" glow='glow' />
          </div>
        </div>
        <div className="intro-image-section">
          <img src={introImage} alt="Customer Support" className="support-image" />
        </div>
      </div>
    );
  };
  
  export default Intro;
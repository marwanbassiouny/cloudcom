import React from 'react';
import './Intro.css'
import CloudComButton from '../../General/CloudComButton/CloudComButton';
import AnimatedIntroImage from './AnimatedIntroImageComponent/AnimatedIntroImage';

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
       <AnimatedIntroImage />
      </div>
    );
  };
  
  export default Intro;
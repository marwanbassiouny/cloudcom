import React from 'react';
import heroSectionAnimation from '../../../../Assets/Icons/HomeScreen/IntroComponent/HeroSectionAnimation.mp4';
import './HeroSectionAnimation.css'

const HeroSectionAnimation = () => {
    return (
        <div className="intro-image-section">
          <video   
            autoPlay
            loop
            muted
            playsInline 
            className='HeroSectionAnimation'>
              <source src={heroSectionAnimation} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
  };
  
  export default HeroSectionAnimation;
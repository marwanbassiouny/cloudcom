import React from 'react';
import './About.css';
import aboutImage from '../../../Assets/Icons/HomeScreen/AboutComponent/AboutImage.svg'; // Replace with the actual path to your image
import textContent from '../../../Assets/Data/HomeScreen/AboutComponent/AboutComponent.json'
import CloudComButton from '../../General/CloudComButton/CloudComButton';

const About = () => {
  return (
    <div className="about-container">
      {/* Left Section: Text Content */}
      <div className="about-text">
        <h2>{textContent.headline1}</h2>
        <h3>{textContent.subHeadline1}<br />
            {textContent.subHeadline2}<br />
            {textContent.subHeadline3}
        </h3>
        <p> {textContent.description} </p>
        {/* <a href="#" className="read-more-btn">{textContent.readMoreButton} ↗</a> */}
          <CloudComButton text="Read More" link="/whoWeAre" glow='' />
      </div>

      {/* Right Section: Single Image */}
      <div className="about-image">
        <img src={aboutImage} alt="Customer Interaction" className="profile-img" />
      </div>
    </div>
  );
};

export default About;

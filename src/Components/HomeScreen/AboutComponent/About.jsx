import React, { useState } from 'react';
import './About.css';
import aboutImage from '../../../Assets/Icons/HomeScreen/AboutComponent/AboutImage.svg'; // Replace with the actual path to your image
import textContent from '../../../Assets/Data/HomeScreen/AboutComponent/AboutComponent.json';
import CloudComButton from '../../General/CloudComButton/CloudComButton';
import aboutUsVideo from '../../../Assets/Videos/HomeScreen/AboutUsComponent/aboutus.mp4';

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="about-container page_padding_level_1 page_vertical_padding_level_1">
      {/* Left Section: Text Content */}
      <div className="about-text">
        <h2>{textContent.headline1}</h2>
        <h3>
          {textContent.subHeadline1}
          <br />
          {textContent.subHeadline2}
          <br />
          {textContent.subHeadline3}
        </h3>
        <div className="home-about-text">
          <p>Empowering businesses with scalable, secure,</p>
          <p>and AI-driven CPaaS solutions, cloudcom enables</p>
          <p>optimized customer engagement by leveraging</p>
          <p>real-time insights and reporting to seamlessly</p>
          <p>enhance interactions across all communication</p>
          <p>channels. Serving businesses across the MENA</p>
          <p>region, Gulf, LATAM, and beyond.</p>
        </div>
        <CloudComButton text="Read More" link="/whoWeAre" glow="" />
      </div>

      {/* Right Section: Single Image */}
      <div className="about-image">
        <img
          onClick={openModal}
          src={aboutImage}
          alt="Customer Interaction"
          className="profile-img"
        />

        {/* Modal for Video */}
        {isModalOpen && (
          <div className={`modal ${isModalOpen ? 'open' : ''}`} onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <span className="close" onClick={closeModal}>
                &times;
              </span>
              <video controls>
                <source src={aboutUsVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {/* Add a "Cancel" button below the video */}
              <button className="cancel-button" onClick={closeModal}>
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;

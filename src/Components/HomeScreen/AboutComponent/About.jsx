import React, { useState } from 'react';
import './About.css';
import aboutImage from '../../../Assets/Icons/HomeScreen/AboutComponent/AboutImage.svg';
import CloudComButton from '../../General/CloudComButton/CloudComButton';
import aboutUsVideo from '../../../Assets/Videos/HomeScreen/AboutUsComponent/aboutus.mp4';

const About = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="about-container page_padding_level_1 page_vertical_padding_level_1">

      <div className="about-text">
        <h2>About cloudcom</h2>
        <h3>
          Fueling business growth, retention, 
          <br />
          and customer lifetime value through
          <br />
          personalized, omni-channel  communication.
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
        <CloudComButton text="Read More" link="/whoWeAre" glow="" width='184' height='40'/>
      </div>

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
              <video controls autoPlay>
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

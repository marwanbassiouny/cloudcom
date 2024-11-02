import React from 'react';
import './AboutUs.css';
import icon1 from '../../../Assets/Icons/WhoWeAreScreen/AboutUsComponent/Icon1.svg';
import icon2 from '../../../Assets/Icons/WhoWeAreScreen/AboutUsComponent/Icon2.svg'; 

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h2>About cloudcom</h2>
      <h1>Customer experience <br /> that connects</h1>
      <p className="description">
        cloudcom is a leading CPaaS (Communication Platform as a Service) provider, empowering businesses across the MENA, Gulf, LATAM regions & beyond, to connect with their customers through seamless, personalized communication.
      </p>
      
      <div className="about-us-content">
        <div className="row">
          <div className="text-section">
            <p>
              Our platform integrates multi-channel tools—including SMS, WhatsApp, Email, Push notifications, IVR, and social media channels like Facebook Messenger, Instagram—along with AI-driven insights, segmentation and profiling, and real-time reporting.
            </p>
          </div>
          <div className="icon-section">
            <img src={icon1} alt="Illustration 1" className="illustration" />
          </div>
        </div>

        <div className="row reverse">
          <div className="icon-section">
            <img src={icon2} alt="Illustration 2" className="illustration" />
          </div>
          <div className="text-section">
            <p>
              These features enable businesses to optimize customer engagement, improve targeting, and make data-driven decisions that drive growth. With advanced AI analytics, automated workflows, and chatbot integration, cloudcom helps brands continuously refine their communication strategies, ensuring personalized, real-time interactions across all channels.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

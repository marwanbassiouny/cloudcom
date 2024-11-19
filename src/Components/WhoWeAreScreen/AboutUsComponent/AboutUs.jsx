import {React} from 'react';
import './AboutUs.css';
import Icon1Animation from '../../../Assets/Icons/WhoWeAreScreen/AboutUsComponent/Icon1Animation.mp4';
import Icon2Animation from '../../../Assets/Icons/WhoWeAreScreen/AboutUsComponent/Icon2Animation.mp4';

const AboutUs = () => {

  return (
    <>
      <div className='about-us-title-container page_padding_level_1 page_vertical_padding_level_0'>
        <h2>About cloudcom</h2>
          <div className='aboutus-title'>
            <h1 className='aboutus-title-value'>Customer experience that connects</h1>
          </div>
          <p className="about-us-description page_context_font_size_0">
            cloudcom is a leading CPaaS (Communication Platform as a Service) provider, empowering businesses across the MENA, Gulf, LATAM regions & beyond, to connect with their customers through seamless, personalized communication.
          </p>
      </div>
      <div className="about-us-container page_padding_level_1 page_vertical_padding_level_0">
        <div className="about-us-content ">
          <div className="row">
            <div className="text-section page_context_font_size_0">
              <p>
                Our platform integrates multi-channel tools—including SMS, WhatsApp, Email, Push notifications, IVR, and social media channels like Facebook Messenger, Instagram—along with AI-driven insights, segmentation and profiling, and real-time reporting.
              </p>
            </div>
            <div className="icon-section icon-section-1">
              <video   
                autoPlay
                loop
                muted
                playsInline 
                className={`topicDataAnimation  img1 `} 
                >
                  <source src={Icon1Animation} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
          </div>

          <div className="row reverse">
            <div className="icon-section .icon-section-2">
              <video   
                autoPlay
                loop
                muted
                playsInline 
                className={`topicDataAnimation  img1 `} 
                >
                  <source src={Icon2Animation} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="text-section page_context_font_size_0">
              <p>
                These features enable businesses to optimize customer engagement, improve targeting, and make data-driven decisions that drive growth. With advanced AI analytics, automated workflows, and chatbot integration, cloudcom helps brands continuously refine their communication strategies, ensuring personalized, real-time interactions across all channels.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>

  );
};

export default AboutUs;

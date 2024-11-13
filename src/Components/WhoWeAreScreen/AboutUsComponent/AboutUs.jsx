import {React,useState,useEffect} from 'react';
import './AboutUs.css';
import icon1 from '../../../Assets/Icons/WhoWeAreScreen/AboutUsComponent/Icon1 before.svg';
import icon1after from '../../../Assets/Icons/WhoWeAreScreen/AboutUsComponent/Icon1 after.svg';
import icon2 from '../../../Assets/Icons/WhoWeAreScreen/AboutUsComponent/Icon2.svg'; 

const AboutUs = () => {
  const [showSecondImage, setShowSecondImage] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowSecondImage((prev) => !prev);
    }, 2000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="about-us-container page_padding_level_1">
      <h2>About cloudcom</h2>
      <div className='aboutus-title'>
         <h1 className='aboutus-title-value'>Customer experience</h1>
         <h1 className='aboutus-title-value'>that connects</h1>
      </div>
      <p className="about-us-description">
        cloudcom is a leading CPaaS (Communication Platform as a Service) provider, empowering businesses across the MENA, Gulf, LATAM regions & beyond, to connect with their customers through seamless, personalized communication.
      </p>
      
      <div className="about-us-content ">
        <div className="row">
          <div className="text-section">
            <p>
              Our platform integrates multi-channel tools—including SMS, WhatsApp, Email, Push notifications, IVR, and social media channels like Facebook Messenger, Instagram—along with AI-driven insights, segmentation and profiling, and real-time reporting.
            </p>
          </div>
          <div className="icon-section icon-section-1">
            {/* <img src={icon1} alt="Illustration 1" className="illustration" /> */}
            <img 
              src={icon1} 
              alt="Original" 
              className={`illustration img1 ${showSecondImage ? 'slide-left' : ''}`} 
            />

            {/* Image with Icons */}
            <img 
              src={icon1after} 
              alt="With Icons" 
              className={`illustration icon1after ${showSecondImage ? 'show-icons' : ''}`} 
            />
          </div>
        </div>

        <div className="row reverse">
          <div className="icon-section .icon-section-2">
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
